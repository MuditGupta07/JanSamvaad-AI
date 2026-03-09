'use client';
import { useState, useEffect, useCallback, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Avatar from '@/components/Avatar';
import ChatInterface from '@/components/ChatInterface';
import GovernancePanel from '@/components/GovernancePanel';
import { constituencies, topicCategories } from '@/data/governanceData';
import { generateResponse } from '@/lib/aiEngine';
import { getVoiceSystem } from '@/lib/voiceSystem';
import styles from './page.module.css';

export default function DashboardPage() {
  const [lang, setLang] = useState('en');
  const [constituency, setConstituency] = useState('all');
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [avatarState, setAvatarState] = useState('idle');
  const [messages, setMessages] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [insightData, setInsightData] = useState({ projects: [], schemes: [], stats: {} });
  const [mobilePanel, setMobilePanel] = useState('chat'); // chat | left | right
  const voiceRef = useRef(null);
  const hasGreeted = useRef(false);

  // Initialize voice system and greeting
  useEffect(() => {
    if (typeof window !== 'undefined') {
      voiceRef.current = getVoiceSystem();
    }
    if (!hasGreeted.current) {
      hasGreeted.current = true;
      const greetingEn = "Namaste! 🙏 I am your AI Governance Assistant. Ask me about development projects, government schemes, or public services in your constituency. I'm here to help!";
      const greetingHi = "नमस्ते! 🙏 मैं आपका AI गवर्नेंस सहायक हूं। मुझसे अपने क्षेत्र में विकास परियोजनाओं, सरकारी योजनाओं या सार्वजनिक सेवाओं के बारे में पूछें। मैं मदद के लिए यहां हूं!";
      setMessages([{ role: 'assistant', text: lang === 'hi' ? greetingHi : greetingEn }]);
    }
  }, []);

  const handleSend = useCallback(async (text) => {
    if (!text.trim() || isProcessing) return;

    // Add user message
    setMessages(prev => [...prev, { role: 'user', text }]);
    setIsProcessing(true);
    setAvatarState('thinking');

    try {
      const response = await generateResponse(text, lang, constituency);

      setMessages(prev => [...prev, { role: 'assistant', text: response.text }]);
      setInsightData({
        projects: response.projects,
        schemes: response.schemes,
        stats: response.stats,
      });

      // Speak the response
      setAvatarState('speaking');
      const voice = voiceRef.current;
      if (voice) {
        // Clean text for speech (remove markdown)
        const cleanText = response.text
          .replace(/\*\*/g, '')
          .replace(/[✅🔄📋📊🏗️🏥💼🚀📚🙏🇮🇳💡]/g, '')
          .replace(/\n\n/g, '. ')
          .replace(/\n/g, '. ')
          .slice(0, 500);

        voice.speak(
          cleanText,
          lang,
          () => setAvatarState('speaking'),
          () => setAvatarState('idle'),
          null
        );
      } else {
        // No voice, reset after delay
        setTimeout(() => setAvatarState('idle'), 2000);
      }
    } catch (err) {
      setMessages(prev => [...prev, {
        role: 'assistant',
        text: lang === 'hi'
          ? 'क्षमा करें, कुछ गलत हो गया। कृपया पुनः प्रयास करें।'
          : 'Sorry, something went wrong. Please try again.'
      }]);
      setAvatarState('idle');
    } finally {
      setIsProcessing(false);
    }
  }, [lang, constituency, isProcessing]);

  const handleMicClick = useCallback(() => {
    const voice = voiceRef.current;
    if (!voice) return;

    if (isListening) {
      voice.stopListening();
      setIsListening(false);
      setAvatarState('idle');
      return;
    }

    voice.setLanguage(lang);
    voice.initRecognition(lang);
    setIsListening(true);
    setAvatarState('listening');

    voice.startListening(
      (transcript, isFinal) => {
        if (isFinal && transcript.trim()) {
          setIsListening(false);
          setAvatarState('idle');
          handleSend(transcript.trim());
        }
      },
      (error) => {
        console.error('Voice error:', error);
        setIsListening(false);
        setAvatarState('idle');
      },
      () => {
        setIsListening(false);
        if (avatarState === 'listening') setAvatarState('idle');
      }
    );
  }, [lang, isListening, handleSend, avatarState]);

  const handleTopicClick = (topicId) => {
    setSelectedTopic(topicId === selectedTopic ? null : topicId);
    const topic = topicCategories.find(t => t.id === topicId);
    if (topic) {
      const q = lang === 'hi'
        ? `${topic.labelHi} के बारे में बताएं`
        : `Tell me about ${topic.label} projects and schemes`;
      handleSend(q);
    }
  };

  const handleLangChange = (newLang) => {
    setLang(newLang);
    if (voiceRef.current) {
      voiceRef.current.stopSpeaking();
      voiceRef.current.setLanguage(newLang);
    }
  };

  const en = lang === 'en';

  return (
    <>
      <Navbar lang={lang} onLangChange={handleLangChange} />
      <main className={styles.dashboard}>
        {/* Mobile panel switcher */}
        <div className={styles.mobileTabs}>
          <button className={`${styles.mobileTab} ${mobilePanel === 'left' ? styles.activeTab : ''}`}
            onClick={() => setMobilePanel('left')}>
            {en ? '⚙ Settings' : '⚙ सेटिंग्स'}
          </button>
          <button className={`${styles.mobileTab} ${mobilePanel === 'chat' ? styles.activeTab : ''}`}
            onClick={() => setMobilePanel('chat')}>
            {en ? '💬 Chat' : '💬 चैट'}
          </button>
          <button className={`${styles.mobileTab} ${mobilePanel === 'right' ? styles.activeTab : ''}`}
            onClick={() => setMobilePanel('right')}>
            {en ? '📊 Insights' : '📊 इनसाइट्स'}
          </button>
        </div>

        {/* Left Panel */}
        <aside className={`${styles.leftPanel} ${mobilePanel === 'left' ? styles.mobileShow : ''}`}>
          <div className={styles.panelSection}>
            <label className={styles.panelLabel}>{en ? 'Select Constituency' : 'क्षेत्र चुनें'}</label>
            <select
              className={styles.selectField}
              value={constituency}
              onChange={(e) => setConstituency(e.target.value)}
            >
              <option value="all">{en ? 'All Constituencies' : 'सभी क्षेत्र'}</option>
              {constituencies.map(c => (
                <option key={c.id} value={c.id}>{lang === 'hi' ? c.nameHi : c.name}</option>
              ))}
            </select>
          </div>

          <div className={styles.panelSection}>
            <label className={styles.panelLabel}>{en ? 'Language' : 'भाषा'}</label>
            <div className={styles.langSwitch}>
              <button
                className={`${styles.langBtn} ${lang === 'en' ? styles.langActive : ''}`}
                onClick={() => handleLangChange('en')}
              >English</button>
              <button
                className={`${styles.langBtn} ${lang === 'hi' ? styles.langActive : ''}`}
                onClick={() => handleLangChange('hi')}
              >हिंदी</button>
            </div>
          </div>

          <div className={styles.panelSection}>
            <label className={styles.panelLabel}>{en ? 'Quick Topics' : 'त्वरित विषय'}</label>
            <div className={styles.topicGrid}>
              {topicCategories.map(t => (
                <button
                  key={t.id}
                  className={`${styles.topicPill} ${selectedTopic === t.id ? styles.topicActive : ''}`}
                  onClick={() => handleTopicClick(t.id)}
                >
                  <span>{t.icon}</span>
                  <span>{lang === 'hi' ? t.labelHi : t.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className={styles.panelSection}>
            <label className={styles.panelLabel}>{en ? 'Sample Questions' : 'नमूना प्रश्न'}</label>
            <div className={styles.sampleQuestions}>
              {(en ? [
                "What development work happened in my area?",
                "What schemes are available for students?",
                "What infrastructure projects were completed?",
              ] : [
                "मेरे क्षेत्र में क्या विकास कार्य हुआ?",
                "छात्रों के लिए कौन सी योजनाएं उपलब्ध हैं?",
                "कौन सी बुनियादी ढांचा परियोजनाएं पूरी हुईं?",
              ]).map((q, i) => (
                <button key={i} className={styles.sampleQ} onClick={() => handleSend(q)}>
                  💬 {q}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Center Panel */}
        <div className={`${styles.centerPanel} ${mobilePanel === 'chat' ? styles.mobileShow : ''}`}>
          {/* Avatar Section */}
          <div className={styles.avatarSection}>
            <Avatar state={avatarState} size={200} />
            <div className={styles.avatarInfo}>
              <h3>{en ? 'Governance AI Assistant' : 'गवर्नेंस AI सहायक'}</h3>
              <span>{en ? 'Digital Representative' : 'डिजिटल प्रतिनिधि'}</span>
            </div>
          </div>

          {/* Chat */}
          <div className={styles.chatSection}>
            <ChatInterface
              messages={messages}
              onSend={handleSend}
              isProcessing={isProcessing}
              isListening={isListening}
              onMicClick={handleMicClick}
              lang={lang}
            />
          </div>
        </div>

        {/* Right Panel */}
        <aside className={`${styles.rightPanel} ${mobilePanel === 'right' ? styles.mobileShow : ''}`}>
          <GovernancePanel
            projects={insightData.projects}
            schemes={insightData.schemes}
            stats={insightData.stats}
            lang={lang}
          />
        </aside>
      </main>
    </>
  );
}

'use client';
import { useState, useRef, useEffect } from 'react';
import styles from './ChatInterface.module.css';

export default function ChatInterface({ messages, onSend, isProcessing, isListening, onMicClick, lang }) {
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() && !isProcessing) {
      onSend(input.trim());
      setInput('');
    }
  };

  const placeholder = lang === 'hi' ? 'अपना प्रश्न लिखें...' : 'Type your question...';
  const sendLabel = lang === 'hi' ? 'भेजें' : 'Send';

  return (
    <div className={styles.chatContainer}>
      <div className={styles.messagesArea}>
        {messages.map((msg, i) => (
          <div key={i} className={`${styles.message} ${styles[msg.role]}`}>
            {msg.role === 'assistant' && (
              <div className={styles.avatarIcon}>AI</div>
            )}
            <div className={styles.messageBubble}>
              <div className={styles.messageText}>
                {msg.text.split('\n').map((line, j) => {
                  // Bold text handling
                  const parts = line.split(/\*\*(.*?)\*\*/g);
                  return (
                    <p key={j} className={styles.messageLine}>
                      {parts.map((part, k) => 
                        k % 2 === 1 ? <strong key={k}>{part}</strong> : part
                      )}
                    </p>
                  );
                })}
              </div>
              {msg.role === 'assistant' && (
                <div className={styles.trustBadges}>
                  <span className={styles.badge}>
                    <svg width="10" height="10" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8 0L10 6H16L11 9.5L13 16L8 12L3 16L5 9.5L0 6H6Z"/>
                    </svg>
                    {lang === 'hi' ? 'AI जनित' : 'AI Generated'}
                  </span>
                  <span className={styles.badge}>
                    <svg width="10" height="10" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8 0a8 8 0 100 16A8 8 0 008 0zm3.5 6.5l-4 4a.7.7 0 01-1 0l-2-2a.7.7 0 011-1L7 9l3.5-3.5a.7.7 0 011 1z"/>
                    </svg>
                    {lang === 'hi' ? 'सत्यापित डेटा' : 'Verified Data'}
                  </span>
                </div>
              )}
            </div>
            {msg.role === 'user' && (
              <div className={styles.userIcon}>You</div>
            )}
          </div>
        ))}

        {isProcessing && (
          <div className={`${styles.message} ${styles.assistant}`}>
            <div className={styles.avatarIcon}>AI</div>
            <div className={styles.messageBubble}>
              <div className={styles.typingIndicator}>
                <span /><span /><span />
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <form className={styles.inputArea} onSubmit={handleSubmit}>
        <div className={styles.inputWrapper}>
          <button
            type="button"
            className={`${styles.micBtn} ${isListening ? styles.micActive : ''}`}
            onClick={onMicClick}
            title={isListening ? 'Stop listening' : 'Start voice input'}
          >
            {isListening ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="6" y="6" width="12" height="12" rx="2" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z"/>
                <path d="M19 10v2a7 7 0 01-14 0v-2"/>
                <line x1="12" y1="19" x2="12" y2="23"/>
                <line x1="8" y1="23" x2="16" y2="23"/>
              </svg>
            )}
            {isListening && <span className={styles.micPulse} />}
          </button>
          <input
            ref={inputRef}
            type="text"
            className={styles.textInput}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={placeholder}
            disabled={isProcessing}
          />
          <button
            type="submit"
            className={styles.sendBtn}
            disabled={!input.trim() || isProcessing}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="22" y1="2" x2="11" y2="13"/>
              <polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
          </button>
        </div>
        <div className={styles.inputHints}>
          <span>💡 {lang === 'hi' ? 'पूछें: "मेरे क्षेत्र में क्या विकास कार्य हुआ है?"' : 'Try: "What development work happened in my area?"'}</span>
        </div>
      </form>
    </div>
  );
}

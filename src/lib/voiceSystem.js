// Voice System - Speech-to-Text and Text-to-Speech using Web Speech API

export class VoiceSystem {
  constructor() {
    this.recognition = null;
    this.synthesis = typeof window !== 'undefined' ? window.speechSynthesis : null;
    this.isListening = false;
    this.isSpeaking = false;
    this.currentLang = 'en-IN';
    this.onSpeakStart = null;
    this.onSpeakEnd = null;
    this.onWordBoundary = null;
  }

  initRecognition(lang = 'en') {
    if (typeof window === 'undefined') return;
    
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      console.warn('Speech Recognition not supported in this browser');
      return null;
    }

    this.recognition = new SpeechRecognition();
    this.recognition.continuous = false;
    this.recognition.interimResults = true;
    this.currentLang = lang === 'hi' ? 'hi-IN' : 'en-IN';
    this.recognition.lang = this.currentLang;

    return this.recognition;
  }

  startListening(onResult, onError, onEnd) {
    if (!this.recognition) {
      this.initRecognition();
    }
    if (!this.recognition) {
      onError?.('Speech recognition not supported');
      return;
    }

    this.recognition.lang = this.currentLang;
    this.isListening = true;

    this.recognition.onresult = (event) => {
      let finalTranscript = '';
      let interimTranscript = '';
      
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalTranscript += transcript;
        } else {
          interimTranscript += transcript;
        }
      }
      
      onResult?.(finalTranscript || interimTranscript, !!finalTranscript);
    };

    this.recognition.onerror = (event) => {
      this.isListening = false;
      onError?.(event.error);
    };

    this.recognition.onend = () => {
      this.isListening = false;
      onEnd?.();
    };

    try {
      this.recognition.start();
    } catch (e) {
      this.isListening = false;
      onError?.(e.message);
    }
  }

  stopListening() {
    if (this.recognition && this.isListening) {
      this.recognition.stop();
      this.isListening = false;
    }
  }

  setLanguage(lang) {
    this.currentLang = lang === 'hi' ? 'hi-IN' : 'en-IN';
    if (this.recognition) {
      this.recognition.lang = this.currentLang;
    }
  }

  speak(text, lang = 'en', onStart, onEnd, onBoundary) {
    if (!this.synthesis) return;
    
    // Cancel any ongoing speech
    this.synthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang === 'hi' ? 'hi-IN' : 'en-IN';
    utterance.rate = 0.95;
    utterance.pitch = 1.0;
    utterance.volume = 1.0;

    // Try to find a suitable voice
    const voices = this.synthesis.getVoices();
    const langCode = lang === 'hi' ? 'hi' : 'en';
    const suitableVoice = voices.find(v => v.lang.startsWith(langCode) && v.localService) 
      || voices.find(v => v.lang.startsWith(langCode));
    
    if (suitableVoice) {
      utterance.voice = suitableVoice;
    }

    utterance.onstart = () => {
      this.isSpeaking = true;
      this.onSpeakStart?.();
      onStart?.();
    };

    utterance.onend = () => {
      this.isSpeaking = false;
      this.onSpeakEnd?.();
      onEnd?.();
    };

    utterance.onboundary = (event) => {
      this.onWordBoundary?.();
      onBoundary?.(event);
    };

    this.synthesis.speak(utterance);
  }

  stopSpeaking() {
    if (this.synthesis) {
      this.synthesis.cancel();
      this.isSpeaking = false;
      this.onSpeakEnd?.();
    }
  }
}

// Singleton
let voiceInstance = null;

export function getVoiceSystem() {
  if (!voiceInstance) {
    voiceInstance = new VoiceSystem();
  }
  return voiceInstance;
}

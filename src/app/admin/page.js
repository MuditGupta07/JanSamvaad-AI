'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Avatar from '@/components/Avatar';
import styles from './page.module.css';

export default function AdminPage() {
  const [lang, setLang] = useState('en');
  const [form, setForm] = useState({
    name: '',
    role: 'leader',
    voiceStyle: 'professional',
    image: null,
    docs: null,
    imageName: '',
    docsName: '',
  });
  const [created, setCreated] = useState(false);
  const [previewState, setPreviewState] = useState('idle');

  const en = lang === 'en';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim()) return;
    setPreviewState('speaking');
    setTimeout(() => {
      setCreated(true);
      setPreviewState('idle');
    }, 2000);
  };

  const handleReset = () => {
    setForm({ name: '', role: 'leader', voiceStyle: 'professional', image: null, docs: null, imageName: '', docsName: '' });
    setCreated(false);
  };

  return (
    <>
      <Navbar lang={lang} onLangChange={setLang} />
      <main className={styles.adminMain}>
        <div className={styles.adminContainer}>
          <div className={styles.adminHeader}>
            <h1 className={styles.adminTitle}>
              <span className="gradient-text">{en ? 'Create' : 'बनाएं'}</span>{' '}
              {en ? 'Custom Avatar' : 'कस्टम अवतार'}
            </h1>
            <p className={styles.adminSubtitle}>
              {en
                ? 'Configure an AI-powered digital representative for any leader, institution, or organization.'
                : 'किसी भी नेता, संस्था या संगठन के लिए AI-संचालित डिजिटल प्रतिनिधि कॉन्फ़िगर करें।'}
            </p>
          </div>

          <div className={styles.adminGrid}>
            {/* Form */}
            <div className={`glass-card ${styles.formCard}`}>
              <h2 className={styles.formTitle}>{en ? 'Avatar Configuration' : 'अवतार कॉन्फ़िगरेशन'}</h2>
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.field}>
                  <label className={styles.fieldLabel}>{en ? 'Avatar Name' : 'अवतार नाम'} *</label>
                  <input
                    type="text"
                    className={styles.fieldInput}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder={en ? 'e.g. Hon. District Collector' : 'उदा. माननीय जिला कलेक्टर'}
                    required
                  />
                </div>

                <div className={styles.field}>
                  <label className={styles.fieldLabel}>{en ? 'Role' : 'भूमिका'}</label>
                  <div className={styles.roleOptions}>
                    {[
                      { value: 'leader', label: en ? '👤 Leader' : '👤 नेता' },
                      { value: 'institution', label: en ? '🏛 Institution' : '🏛 संस्था' },
                      { value: 'organization', label: en ? '🏢 Organization' : '🏢 संगठन' },
                    ].map(opt => (
                      <button
                        key={opt.value}
                        type="button"
                        className={`${styles.roleBtn} ${form.role === opt.value ? styles.roleActive : ''}`}
                        onClick={() => setForm({ ...form, role: opt.value })}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className={styles.field}>
                  <label className={styles.fieldLabel}>{en ? 'Upload Avatar Image' : 'अवतार छवि अपलोड करें'}</label>
                  <label className={styles.fileUpload}>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => setForm({ ...form, image: e.target.files[0], imageName: e.target.files[0]?.name || '' })}
                      hidden
                    />
                    <span className={styles.fileIcon}>📷</span>
                    <span>{form.imageName || (en ? 'Choose image file...' : 'छवि फ़ाइल चुनें...')}</span>
                  </label>
                </div>

                <div className={styles.field}>
                  <label className={styles.fieldLabel}>{en ? 'Upload Knowledge Documents' : 'ज्ञान दस्तावेज़ अपलोड करें'}</label>
                  <label className={styles.fileUpload}>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx,.txt,.csv"
                      multiple
                      onChange={(e) => setForm({ ...form, docs: e.target.files, docsName: Array.from(e.target.files).map(f => f.name).join(', ') || '' })}
                      hidden
                    />
                    <span className={styles.fileIcon}>📄</span>
                    <span>{form.docsName || (en ? 'Choose documents...' : 'दस्तावेज़ चुनें...')}</span>
                  </label>
                </div>

                <div className={styles.field}>
                  <label className={styles.fieldLabel}>{en ? 'Voice Style' : 'आवाज़ शैली'}</label>
                  <div className={styles.roleOptions}>
                    {[
                      { value: 'professional', label: en ? '🎙 Professional' : '🎙 प्रोफेशनल' },
                      { value: 'friendly', label: en ? '😊 Friendly' : '😊 मित्रवत' },
                      { value: 'formal', label: en ? '📋 Formal' : '📋 औपचारिक' },
                    ].map(opt => (
                      <button
                        key={opt.value}
                        type="button"
                        className={`${styles.roleBtn} ${form.voiceStyle === opt.value ? styles.roleActive : ''}`}
                        onClick={() => setForm({ ...form, voiceStyle: opt.value })}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className={styles.formActions}>
                  {!created ? (
                    <button type="submit" className="glow-btn" style={{ width: '100%', justifyContent: 'center' }}>
                      {en ? '🚀 Create Avatar' : '🚀 अवतार बनाएं'}
                    </button>
                  ) : (
                    <div className={styles.successMsg}>
                      <span className={styles.successIcon}>✅</span>
                      <span>{en ? 'Avatar created successfully!' : 'अवतार सफलतापूर्वक बनाया गया!'}</span>
                      <button type="button" className="glow-btn glow-btn-outline glow-btn-sm" onClick={handleReset}>
                        {en ? 'Create Another' : 'एक और बनाएं'}
                      </button>
                    </div>
                  )}
                </div>
              </form>
            </div>

            {/* Preview */}
            <div className={`glass-card ${styles.previewCard}`}>
              <h2 className={styles.formTitle}>{en ? 'Preview' : 'पूर्वावलोकन'}</h2>
              <div className={styles.previewContent}>
                <Avatar state={previewState} size={220} />
                <div className={styles.previewInfo}>
                  <h3 className={styles.previewName}>
                    {form.name || (en ? 'Avatar Name' : 'अवतार नाम')}
                  </h3>
                  <span className={styles.previewRole}>
                    {form.role === 'leader' ? (en ? '👤 Leader' : '👤 नेता')
                      : form.role === 'institution' ? (en ? '🏛 Institution' : '🏛 संस्था')
                      : (en ? '🏢 Organization' : '🏢 संगठन')}
                  </span>
                  <span className={styles.previewVoice}>
                    {en ? 'Voice: ' : 'आवाज़: '}
                    {form.voiceStyle === 'professional' ? (en ? 'Professional' : 'प्रोफेशनल')
                      : form.voiceStyle === 'friendly' ? (en ? 'Friendly' : 'मित्रवत')
                      : (en ? 'Formal' : 'औपचारिक')}
                  </span>
                </div>
                <div className={styles.previewDemo}>
                  <button
                    className="glow-btn glow-btn-sm"
                    onClick={() => {
                      setPreviewState('speaking');
                      setTimeout(() => setPreviewState('idle'), 3000);
                    }}
                  >
                    {en ? '▶ Test Animation' : '▶ एनिमेशन टेस्ट'}
                  </button>
                </div>

                {created && (
                  <div className={styles.createdBadge}>
                    <span>✨ {en ? 'Avatar Ready' : 'अवतार तैयार'}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

'use client';
import { useMemo } from 'react';
import styles from './GovernancePanel.module.css';

export default function GovernancePanel({ projects = [], schemes = [], stats = {}, lang = 'en' }) {
  const labels = {
    en: {
      insights: 'Governance Insights',
      projects: 'Related Projects',
      schemes: 'Available Schemes',
      stats: 'Quick Stats',
      budget: 'Budget',
      completion: 'Completion',
      eligibility: 'Eligibility',
      benefits: 'Benefits',
      completed: 'Completed',
      inProgress: 'In Progress',
      planned: 'Planned',
      totalProjects: 'Total Projects',
      totalBudget: 'Total Budget',
      completionRate: 'Completion Rate',
      noData: 'Ask a question to see related governance data here.',
    },
    hi: {
      insights: 'गवर्नेंस इनसाइट्स',
      projects: 'संबंधित परियोजनाएं',
      schemes: 'उपलब्ध योजनाएं',
      stats: 'त्वरित आँकड़े',
      budget: 'बजट',
      completion: 'पूर्णता',
      eligibility: 'पात्रता',
      benefits: 'लाभ',
      completed: 'पूर्ण',
      inProgress: 'प्रगति में',
      planned: 'नियोजित',
      totalProjects: 'कुल परियोजनाएं',
      totalBudget: 'कुल बजट',
      completionRate: 'पूर्णता दर',
      noData: 'संबंधित डेटा देखने के लिए प्रश्न पूछें।',
    }
  };
  const l = labels[lang] || labels.en;

  const statusLabel = (status) => {
    if (status === 'completed') return l.completed;
    if (status === 'in-progress') return l.inProgress;
    return l.planned;
  };

  const statusClass = (status) => {
    if (status === 'completed') return styles.statusCompleted;
    if (status === 'in-progress') return styles.statusInProgress;
    return styles.statusPlanned;
  };

  const hasData = projects.length > 0 || schemes.length > 0;

  return (
    <div className={styles.panel}>
      <h3 className={styles.panelTitle}>{l.insights}</h3>

      {/* Quick Stats */}
      {stats.totalProjects && (
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statValue}>{stats.totalProjects}</div>
            <div className={styles.statLabel}>{l.totalProjects}</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statValue}>{stats.totalBudget}</div>
            <div className={styles.statLabel}>{l.totalBudget}</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statValue}>{stats.completionRate}%</div>
            <div className={styles.statLabel}>{l.completionRate}</div>
          </div>
        </div>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>{l.projects}</h4>
          <div className={styles.cardList}>
            {projects.map(p => (
              <div key={p.id} className={styles.projectCard}>
                <div className={styles.projectHeader}>
                  <span className={styles.projectName}>{lang === 'hi' ? p.nameHi : p.name}</span>
                  <span className={`${styles.statusBadge} ${statusClass(p.status)}`}>
                    {statusLabel(p.status)}
                  </span>
                </div>
                <p className={styles.projectDesc}>
                  {lang === 'hi' ? p.descriptionHi : p.description}
                </p>
                <div className={styles.projectMeta}>
                  <span>{l.budget}: {p.budgetLabel}</span>
                  <span>{l.completion}: {p.completion}%</span>
                </div>
                <div className={styles.progressBar}>
                  <div
                    className={styles.progressFill}
                    style={{ width: `${p.completion}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Schemes */}
      {schemes.length > 0 && (
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>{l.schemes}</h4>
          <div className={styles.cardList}>
            {schemes.map(s => (
              <div key={s.id} className={styles.schemeCard}>
                <div className={styles.schemeName}>{lang === 'hi' ? s.nameHi : s.name}</div>
                <div className={styles.schemeDetail}>
                  <span className={styles.detailLabel}>{l.eligibility}:</span>
                  <span>{lang === 'hi' ? s.eligibilityHi : s.eligibility}</span>
                </div>
                <div className={styles.schemeDetail}>
                  <span className={styles.detailLabel}>{l.benefits}:</span>
                  <span>{lang === 'hi' ? s.benefitsHi : s.benefits}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {!hasData && (
        <div className={styles.emptyState}>
          <div className={styles.emptyIcon}>📊</div>
          <p>{l.noData}</p>
        </div>
      )}
    </div>
  );
}

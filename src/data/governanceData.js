// Mock governance data for demo
export const constituencies = [
  { id: 'ward-1', name: 'Ward 1 - Central District', nameHi: 'वार्ड 1 - केंद्रीय जिला' },
  { id: 'ward-5', name: 'Ward 5 - East Zone', nameHi: 'वार्ड 5 - पूर्वी क्षेत्र' },
  { id: 'ward-12', name: 'Ward 12 - North Zone', nameHi: 'वार्ड 12 - उत्तरी क्षेत्र' },
  { id: 'ward-18', name: 'Ward 18 - West Zone', nameHi: 'वार्ड 18 - पश्चिमी क्षेत्र' },
  { id: 'ward-24', name: 'Ward 24 - South Zone', nameHi: 'वार्ड 24 - दक्षिणी क्षेत्र' },
];

export const projects = [
  {
    id: 'p1', name: 'National Highway Expansion', nameHi: 'राष्ट्रीय राजमार्ग विस्तार',
    constituency: 'ward-1', category: 'infrastructure',
    budget: 45000000, budgetLabel: '₹4.5 Cr', status: 'completed', completion: 100,
    description: 'Widening of NH-48 from 4-lane to 6-lane covering 12km stretch through the central district.',
    descriptionHi: 'केंद्रीय जिले से होकर 12 किमी खंड के NH-48 को 4-लेन से 6-लेन तक चौड़ा करना।',
    location: 'Central District, NH-48', year: 2025
  },
  {
    id: 'p2', name: 'Smart Streetlight Installation', nameHi: 'स्मार्ट स्ट्रीटलाइट स्थापना',
    constituency: 'ward-1', category: 'infrastructure',
    budget: 8500000, budgetLabel: '₹85 Lakh', status: 'completed', completion: 100,
    description: 'Installation of 500 solar-powered smart LED streetlights with IoT sensors across Ward 1.',
    descriptionHi: 'वार्ड 1 में IoT सेंसर के साथ 500 सोलर-पावर्ड स्मार्ट LED स्ट्रीटलाइट की स्थापना।',
    location: 'Ward 1 - All Sectors', year: 2025
  },
  {
    id: 'p3', name: 'Primary School Renovation', nameHi: 'प्राथमिक विद्यालय नवीनीकरण',
    constituency: 'ward-5', category: 'education',
    budget: 12000000, budgetLabel: '₹1.2 Cr', status: 'completed', completion: 100,
    description: 'Complete renovation of 8 primary schools including smart classrooms, computer labs, and libraries.',
    descriptionHi: '8 प्राथमिक विद्यालयों का स्मार्ट कक्षाओं, कंप्यूटर लैब और पुस्तकालयों सहित पूर्ण नवीनीकरण।',
    location: 'East Zone - Multiple Schools', year: 2025
  },
  {
    id: 'p4', name: 'Community Health Center', nameHi: 'सामुदायिक स्वास्थ्य केंद्र',
    constituency: 'ward-12', category: 'healthcare',
    budget: 35000000, budgetLabel: '₹3.5 Cr', status: 'in-progress', completion: 72,
    description: 'Construction of a 50-bed community health center with emergency ward, lab, and pharmacy.',
    descriptionHi: 'आपातकालीन वार्ड, लैब और फार्मेसी के साथ 50-बेड सामुदायिक स्वास्थ्य केंद्र का निर्माण।',
    location: 'North Zone, Sector 15', year: 2025
  },
  {
    id: 'p5', name: 'Storm Drainage System', nameHi: 'तूफान जल निकासी प्रणाली',
    constituency: 'ward-12', category: 'infrastructure',
    budget: 28000000, budgetLabel: '₹2.8 Cr', status: 'in-progress', completion: 55,
    description: 'Modern storm water drainage network spanning 8km to prevent waterlogging in North Zone.',
    descriptionHi: 'उत्तरी क्षेत्र में जलभराव रोकने के लिए 8 किमी तक फैला आधुनिक तूफान जल निकासी नेटवर्क।',
    location: 'North Zone, Sectors 12-18', year: 2025
  },
  {
    id: 'p6', name: 'Road Repair & Resurfacing', nameHi: 'सड़क मरम्मत और रीसर्फेसिंग',
    constituency: 'ward-12', category: 'infrastructure',
    budget: 15000000, budgetLabel: '₹1.5 Cr', status: 'completed', completion: 100,
    description: 'Repair and resurfacing of 25km of internal roads with proper markings and speed breakers.',
    descriptionHi: 'उचित मार्किंग और स्पीड ब्रेकर के साथ 25 किमी आंतरिक सड़कों की मरम्मत और रीसर्फेसिंग।',
    location: 'Ward 12 - All Internal Roads', year: 2024
  },
  {
    id: 'p7', name: 'Digital Library Hub', nameHi: 'डिजिटल लाइब्रेरी हब',
    constituency: 'ward-18', category: 'education',
    budget: 9500000, budgetLabel: '₹95 Lakh', status: 'in-progress', completion: 40,
    description: 'State-of-the-art digital library with 10,000+ e-books, study pods, and high-speed internet.',
    descriptionHi: '10,000+ ई-पुस्तकें, स्टडी पॉड और हाई-स्पीड इंटरनेट के साथ अत्याधुनिक डिजिटल लाइब्रेरी।',
    location: 'West Zone, Sector 22', year: 2025
  },
  {
    id: 'p8', name: 'Women\'s Skill Training Center', nameHi: 'महिला कौशल प्रशिक्षण केंद्र',
    constituency: 'ward-18', category: 'education',
    budget: 7800000, budgetLabel: '₹78 Lakh', status: 'completed', completion: 100,
    description: 'Vocational training center for women offering courses in IT, tailoring, and entrepreneurship.',
    descriptionHi: 'आईटी, सिलाई और उद्यमिता में पाठ्यक्रम प्रदान करने वाला महिलाओं के लिए व्यावसायिक प्रशिक्षण केंद्र।',
    location: 'West Zone, Sector 20', year: 2024
  },
  {
    id: 'p9', name: 'Public Park & Playground', nameHi: 'सार्वजनिक पार्क और खेल का मैदान',
    constituency: 'ward-24', category: 'infrastructure',
    budget: 18000000, budgetLabel: '₹1.8 Cr', status: 'in-progress', completion: 65,
    description: 'Green park with jogging track, children\'s playground, open gym, and amphitheater.',
    descriptionHi: 'जॉगिंग ट्रैक, बच्चों के खेल का मैदान, ओपन जिम और एम्फीथिएटर के साथ हरा-भरा पार्क।',
    location: 'South Zone, Sector 30', year: 2025
  },
  {
    id: 'p10', name: 'Rainwater Harvesting System', nameHi: 'रेनवाटर हार्वेस्टिंग सिस्टम',
    constituency: 'ward-24', category: 'infrastructure',
    budget: 6200000, budgetLabel: '₹62 Lakh', status: 'planned', completion: 10,
    description: 'Installation of rainwater harvesting systems in 200 government buildings and 15 parks.',
    descriptionHi: '200 सरकारी इमारतों और 15 पार्कों में रेनवाटर हार्वेस्टिंग सिस्टम की स्थापना।',
    location: 'South Zone - All Government Buildings', year: 2026
  },
  {
    id: 'p11', name: 'Multispecialty Hospital Wing', nameHi: 'मल्टीस्पेशलिटी अस्पताल विंग',
    constituency: 'ward-5', category: 'healthcare',
    budget: 75000000, budgetLabel: '₹7.5 Cr', status: 'in-progress', completion: 30,
    description: 'New 100-bed wing with cardiology, orthopedics, and pediatric departments at District Hospital.',
    descriptionHi: 'जिला अस्पताल में कार्डियोलॉजी, ऑर्थोपेडिक्स और बाल चिकित्सा विभागों के साथ नया 100-बेड विंग।',
    location: 'East Zone, District Hospital', year: 2025
  },
  {
    id: 'p12', name: 'Solar Power Plant', nameHi: 'सौर ऊर्जा संयंत्र',
    constituency: 'ward-1', category: 'infrastructure',
    budget: 55000000, budgetLabel: '₹5.5 Cr', status: 'planned', completion: 5,
    description: '2MW solar power plant to supply clean energy to government offices and streetlights.',
    descriptionHi: 'सरकारी कार्यालयों और स्ट्रीटलाइट्स को स्वच्छ ऊर्जा आपूर्ति के लिए 2MW सौर ऊर्जा संयंत्र।',
    location: 'Central District, Industrial Area', year: 2026
  },
  {
    id: 'p13', name: 'Sewage Treatment Plant Upgrade', nameHi: 'सीवेज ट्रीटमेंट प्लांट अपग्रेड',
    constituency: 'ward-24', category: 'infrastructure',
    budget: 42000000, budgetLabel: '₹4.2 Cr', status: 'in-progress', completion: 48,
    description: 'Upgrading STP capacity from 10 MLD to 25 MLD with advanced tertiary treatment.',
    descriptionHi: 'उन्नत तृतीयक उपचार के साथ STP क्षमता को 10 MLD से 25 MLD तक अपग्रेड करना।',
    location: 'South Zone, River Front', year: 2025
  },
  {
    id: 'p14', name: 'CCTV Surveillance Network', nameHi: 'सीसीटीवी निगरानी नेटवर्क',
    constituency: 'ward-5', category: 'infrastructure',
    budget: 11000000, budgetLabel: '₹1.1 Cr', status: 'completed', completion: 100,
    description: '300 AI-enabled CCTV cameras installed at major junctions and public spaces.',
    descriptionHi: 'प्रमुख चौराहों और सार्वजनिक स्थानों पर 300 AI-सक्षम सीसीटीवी कैमरे स्थापित।',
    location: 'East Zone - All Major Junctions', year: 2024
  },
  {
    id: 'p15', name: 'Anganwadi Modernization', nameHi: 'आंगनवाड़ी आधुनिकीकरण',
    constituency: 'ward-18', category: 'healthcare',
    budget: 5500000, budgetLabel: '₹55 Lakh', status: 'completed', completion: 100,
    description: 'Upgradation of 25 Anganwadi centers with modern nutrition kits, weighing machines, and digital records.',
    descriptionHi: 'आधुनिक पोषण किट, वजन मशीनों और डिजिटल रिकॉर्ड के साथ 25 आंगनवाड़ी केंद्रों का उन्नयन।',
    location: 'West Zone - All Anganwadi Centers', year: 2024
  },
];

export const schemes = [
  {
    id: 's1', name: 'Vidya Lakshmi Scholarship', nameHi: 'विद्या लक्ष्मी छात्रवृत्ति',
    category: 'education',
    eligibility: 'Students from families with income below ₹8 Lakh/year',
    eligibilityHi: '₹8 लाख/वर्ष से कम आय वाले परिवारों के छात्र',
    benefits: 'Up to ₹50,000/year scholarship + free books',
    benefitsHi: '₹50,000/वर्ष तक छात्रवृत्ति + मुफ्त पुस्तकें',
    description: 'Merit-cum-means scholarship for undergraduate students covering tuition fees and books.',
    descriptionHi: 'ट्यूशन फीस और पुस्तकों को कवर करने वाली स्नातक छात्रों के लिए मेरिट-सह-साधन छात्रवृत्ति।',
    beneficiaries: 12500
  },
  {
    id: 's2', name: 'Startup India Seed Fund', nameHi: 'स्टार्टअप इंडिया सीड फंड',
    category: 'startup',
    eligibility: 'DPIIT-registered startups less than 2 years old',
    eligibilityHi: 'DPIIT-पंजीकृत स्टार्टअप जो 2 वर्ष से कम पुराने हैं',
    benefits: 'Up to ₹20 Lakh seed funding + mentorship',
    benefitsHi: '₹20 लाख तक सीड फंडिंग + मेंटरशिप',
    description: 'Seed stage funding for innovative startups with viable prototypes or business models.',
    descriptionHi: 'व्यवहार्य प्रोटोटाइप या व्यवसाय मॉडल वाले नवीन स्टार्टअप के लिए सीड स्टेज फंडिंग।',
    beneficiaries: 850
  },
  {
    id: 's3', name: 'Ayushman Bharat Health Card', nameHi: 'आयुष्मान भारत स्वास्थ्य कार्ड',
    category: 'health',
    eligibility: 'Families identified under SECC data',
    eligibilityHi: 'SECC डेटा के तहत पहचाने गए परिवार',
    benefits: '₹5 Lakh/year health insurance per family',
    benefitsHi: 'प्रति परिवार ₹5 लाख/वर्ष स्वास्थ्य बीमा',
    description: 'Comprehensive health insurance covering hospitalization and surgical procedures.',
    descriptionHi: 'अस्पताल में भर्ती और सर्जिकल प्रक्रियाओं को कवर करने वाला व्यापक स्वास्थ्य बीमा।',
    beneficiaries: 45000
  },
  {
    id: 's4', name: 'PM Kaushal Vikas Yojana', nameHi: 'प्रधानमंत्री कौशल विकास योजना',
    category: 'employment',
    eligibility: 'Youth aged 18-35 years',
    eligibilityHi: '18-35 वर्ष आयु के युवा',
    benefits: 'Free skill training + certification + placement assistance',
    benefitsHi: 'मुफ्त कौशल प्रशिक्षण + प्रमाणन + प्लेसमेंट सहायता',
    description: 'Short-term skill development courses in IT, healthcare, construction, and manufacturing.',
    descriptionHi: 'आईटी, स्वास्थ्य सेवा, निर्माण और विनिर्माण में अल्पकालिक कौशल विकास पाठ्यक्रम।',
    beneficiaries: 28000
  },
  {
    id: 's5', name: 'Digital Literacy Mission', nameHi: 'डिजिटल साक्षरता मिशन',
    category: 'education',
    eligibility: 'All citizens above 14 years',
    eligibilityHi: '14 वर्ष से अधिक आयु के सभी नागरिक',
    benefits: 'Free computer training + digital skills certificate',
    benefitsHi: 'मुफ्त कंप्यूटर प्रशिक्षण + डिजिटल कौशल प्रमाणपत्र',
    description: 'Program to make citizens digitally literate through training centers in each ward.',
    descriptionHi: 'प्रत्येक वार्ड में प्रशिक्षण केंद्रों के माध्यम से नागरिकों को डिजिटल रूप से साक्षर बनाने का कार्यक्रम।',
    beneficiaries: 35000
  },
  {
    id: 's6', name: 'Mukhyamantri Rozgar Yojana', nameHi: 'मुख्यमंत्री रोजगार योजना',
    category: 'employment',
    eligibility: 'Unemployed graduates under 30 years',
    eligibilityHi: '30 वर्ष से कम आयु के बेरोजगार स्नातक',
    benefits: 'Subsidized loan up to ₹10 Lakh for self-employment',
    benefitsHi: 'स्व-रोजगार के लिए ₹10 लाख तक सब्सिडी ऋण',
    description: 'Subsidized loan scheme to promote self-employment and micro-enterprises.',
    descriptionHi: 'स्व-रोजगार और सूक्ष्म उद्यमों को बढ़ावा देने के लिए सब्सिडी ऋण योजना।',
    beneficiaries: 8500
  },
  {
    id: 's7', name: 'Janani Suraksha Yojana', nameHi: 'जननी सुरक्षा योजना',
    category: 'health',
    eligibility: 'Pregnant women from BPL families',
    eligibilityHi: 'BPL परिवारों की गर्भवती महिलाएं',
    benefits: '₹1,400 cash incentive + free delivery + postnatal care',
    benefitsHi: '₹1,400 नकद प्रोत्साहन + मुफ्त प्रसव + प्रसवोत्तर देखभाल',
    description: 'Cash assistance for institutional delivery to reduce maternal and infant mortality.',
    descriptionHi: 'मातृ और शिशु मृत्यु दर को कम करने के लिए संस्थागत प्रसव हेतु नकद सहायता।',
    beneficiaries: 15000
  },
  {
    id: 's8', name: 'Atal Innovation Mission', nameHi: 'अटल नवाचार मिशन',
    category: 'startup',
    eligibility: 'Innovators and Entrepreneurs of any age',
    eligibilityHi: 'किसी भी उम्र के नवप्रवर्तक और उद्यमी',
    benefits: 'Incubation support + ₹10 Lakh grant + mentoring',
    benefitsHi: 'इनक्यूबेशन सहायता + ₹10 लाख अनुदान + मेंटरिंग',
    description: 'Support ecosystem for innovation including tinkering labs in schools and incubation centers.',
    descriptionHi: 'विद्यालयों में टिंकरिंग लैब और इनक्यूबेशन केंद्रों सहित नवाचार के लिए सहायता पारिस्थितिकी तंत्र।',
    beneficiaries: 3200
  },
  {
    id: 's9', name: 'SC/ST Scholarship Program', nameHi: 'अनुसूचित जाति/जनजाति छात्रवृत्ति कार्यक्रम',
    category: 'education',
    eligibility: 'SC/ST students in higher education',
    eligibilityHi: 'उच्च शिक्षा में अनुसूचित जाति/जनजाति के छात्र',
    benefits: 'Full tuition fee waiver + monthly stipend of ₹3,000',
    benefitsHi: 'पूर्ण ट्यूशन फीस माफी + ₹3,000 मासिक वजीफा',
    description: 'Post-matric scholarship for SC/ST students pursuing graduation and post-graduation.',
    descriptionHi: 'स्नातक और स्नातकोत्तर कर रहे अनुसूचित जाति/जनजाति छात्रों के लिए पोस्ट-मैट्रिक छात्रवृत्ति।',
    beneficiaries: 18000
  },
  {
    id: 's10', name: 'Free Health Checkup Camp', nameHi: 'मुफ्त स्वास्थ्य जांच शिविर',
    category: 'health',
    eligibility: 'All citizens, priority for senior citizens',
    eligibilityHi: 'सभी नागरिक, वरिष्ठ नागरिकों को प्राथमिकता',
    benefits: 'Free annual health screening + blood/urine tests + ECG',
    benefitsHi: 'मुफ्त वार्षिक स्वास्थ्य जांच + रक्त/मूत्र परीक्षण + ECG',
    description: 'Monthly free health checkup camps organized in community centers across all wards.',
    descriptionHi: 'सभी वार्डों में सामुदायिक केंद्रों में आयोजित मासिक मुफ्त स्वास्थ्य जांच शिविर।',
    beneficiaries: 52000
  },
];

export const statistics = {
  totalProjects: 48,
  completedProjects: 31,
  totalBudget: '₹285 Cr',
  schemeBeneficiaries: '2.18 Lakh',
  activeSchemes: 24,
  roadsBuilt: '156 km',
  schoolsRenovated: 42,
  healthCenters: 18,
};

export const topicCategories = [
  { id: 'infrastructure', label: 'Infrastructure', labelHi: 'बुनियादी ढांचा', icon: '🏗️' },
  { id: 'education', label: 'Education', labelHi: 'शिक्षा', icon: '📚' },
  { id: 'healthcare', label: 'Healthcare', labelHi: 'स्वास्थ्य सेवा', icon: '🏥' },
  { id: 'schemes', label: 'Schemes', labelHi: 'योजनाएं', icon: '📋' },
  { id: 'employment', label: 'Employment', labelHi: 'रोजगार', icon: '💼' },
  { id: 'startup', label: 'Startups', labelHi: 'स्टार्टअप', icon: '🚀' },
];

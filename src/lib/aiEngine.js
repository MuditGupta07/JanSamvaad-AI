// AI Engine - Mock LLM + RAG simulation
import { projects, schemes, statistics } from '@/data/governanceData';

const responseTemplates = {
  en: {
    development: (filtered, constituency) => {
      if (filtered.length === 0) {
        return `I don't have specific development project data for that query. However, across all constituencies, we have ${statistics.totalProjects} projects with a total budget of ${statistics.totalBudget}. Would you like to know about projects in a specific area or category?`;
      }
      const completed = filtered.filter(p => p.status === 'completed');
      const inProgress = filtered.filter(p => p.status === 'in-progress');
      const totalBudget = filtered.reduce((sum, p) => sum + p.budget, 0);
      let response = `Great question! Here's an overview of development work${constituency ? ' in your constituency' : ''}:\n\n`;
      response += `We have ${filtered.length} projects with a combined budget of ₹${(totalBudget / 10000000).toFixed(1)} Crore.\n\n`;
      if (completed.length > 0) {
        response += `✅ ${completed.length} projects have been completed, including ${completed.slice(0, 2).map(p => p.name).join(' and ')}.\n\n`;
      }
      if (inProgress.length > 0) {
        response += `🔄 ${inProgress.length} projects are currently in progress, such as ${inProgress[0].name} which is ${inProgress[0].completion}% complete.\n\n`;
      }
      response += `Would you like detailed information about any specific project?`;
      return response;
    },
    schemes: (filtered, category) => {
      if (filtered.length === 0) {
        return `I couldn't find schemes matching that specific query. We currently have ${statistics.activeSchemes} active government schemes. Would you like to know about education, health, employment, or startup schemes?`;
      }
      let response = `Here are the government schemes${category ? ` related to ${category}` : ''} available for you:\n\n`;
      filtered.forEach(s => {
        response += `📋 **${s.name}**\n`;
        response += `   Eligibility: ${s.eligibility}\n`;
        response += `   Benefits: ${s.benefits}\n`;
        response += `   Beneficiaries so far: ${s.beneficiaries.toLocaleString()}\n\n`;
      });
      response += `Would you like more details about any specific scheme?`;
      return response;
    },
    infrastructure: (filtered) => {
      const infraProjects = filtered.filter(p => p.category === 'infrastructure');
      if (infraProjects.length === 0) {
        return `I don't have specific infrastructure data for that query. Overall, we've built ${statistics.roadsBuilt} of roads and established ${statistics.healthCenters} health centers. What specific infrastructure topic interests you?`;
      }
      const completed = infraProjects.filter(p => p.status === 'completed');
      let response = `Here's the infrastructure development update:\n\n`;
      response += `We have ${infraProjects.length} infrastructure projects in this area.\n\n`;
      infraProjects.slice(0, 4).forEach(p => {
        const statusEmoji = p.status === 'completed' ? '✅' : p.status === 'in-progress' ? '🔄' : '📋';
        response += `${statusEmoji} **${p.name}** — Budget: ${p.budgetLabel}, Progress: ${p.completion}%\n   ${p.description}\n\n`;
      });
      return response;
    },
    general: () => {
      return `Thank you for your question! I'm your AI Governance Assistant, and I can help you with:\n\n🏗️ **Development Projects** — Roads, schools, hospitals, and more\n📋 **Government Schemes** — Education, health, employment, startup support\n📊 **Area Statistics** — Budget utilization, project completion rates\n🏥 **Public Services** — Health centers, skill training, digital literacy\n\nPlease ask about any specific topic, and I'll provide you with detailed, verified information!`;
    },
    greeting: () => {
      return `Namaste! 🙏 Welcome to JanSamvaad AI. I'm your Digital Governance Assistant. I have access to verified data about:\n\n• ${statistics.totalProjects} development projects\n• ${statistics.activeSchemes} government schemes\n• Infrastructure spanning ${statistics.roadsBuilt} of roads\n• ${statistics.schemeBeneficiaries} scheme beneficiaries\n\nHow can I help you today?`;
    }
  },
  hi: {
    development: (filtered, constituency) => {
      if (filtered.length === 0) {
        return `मुझे उस प्रश्न के लिए विशिष्ट विकास परियोजना डेटा नहीं मिला। हालांकि, सभी क्षेत्रों में हमारे पास ${statistics.totalBudget} के कुल बजट के साथ ${statistics.totalProjects} परियोजनाएं हैं। क्या आप किसी विशिष्ट क्षेत्र के बारे में जानना चाहेंगे?`;
      }
      const completed = filtered.filter(p => p.status === 'completed');
      const inProgress = filtered.filter(p => p.status === 'in-progress');
      const totalBudget = filtered.reduce((sum, p) => sum + p.budget, 0);
      let response = `बहुत अच्छा प्रश्न! यहां विकास कार्य का अवलोकन है:\n\n`;
      response += `हमारे पास ₹${(totalBudget / 10000000).toFixed(1)} करोड़ के कुल बजट के साथ ${filtered.length} परियोजनाएं हैं।\n\n`;
      if (completed.length > 0) {
        response += `✅ ${completed.length} परियोजनाएं पूरी हो चुकी हैं, जिसमें ${completed.slice(0, 2).map(p => p.nameHi).join(' और ')} शामिल हैं।\n\n`;
      }
      if (inProgress.length > 0) {
        response += `🔄 ${inProgress.length} परियोजनाएं वर्तमान में प्रगति पर हैं, जैसे ${inProgress[0].nameHi} जो ${inProgress[0].completion}% पूर्ण है।\n\n`;
      }
      response += `क्या आप किसी विशिष्ट परियोजना के बारे में विस्तृत जानकारी चाहेंगे?`;
      return response;
    },
    schemes: (filtered, category) => {
      if (filtered.length === 0) {
        return `मुझे उस विशिष्ट प्रश्न से मेल खाने वाली योजनाएं नहीं मिलीं। वर्तमान में ${statistics.activeSchemes} सक्रिय सरकारी योजनाएं हैं। क्या आप शिक्षा, स्वास्थ्य, रोजगार या स्टार्टअप योजनाओं के बारे में जानना चाहेंगे?`;
      }
      let response = `यहां आपके लिए उपलब्ध सरकारी योजनाएं हैं:\n\n`;
      filtered.forEach(s => {
        response += `📋 **${s.nameHi}**\n`;
        response += `   पात्रता: ${s.eligibilityHi}\n`;
        response += `   लाभ: ${s.benefitsHi}\n`;
        response += `   अब तक लाभार्थी: ${s.beneficiaries.toLocaleString()}\n\n`;
      });
      response += `क्या आप किसी विशिष्ट योजना के बारे में और जानकारी चाहेंगे?`;
      return response;
    },
    infrastructure: (filtered) => {
      const infraProjects = filtered.filter(p => p.category === 'infrastructure');
      if (infraProjects.length === 0) {
        return `मुझे उस प्रश्न के लिए विशिष्ट बुनियादी ढांचा डेटा नहीं मिला। कुल मिलाकर, हमने ${statistics.roadsBuilt} सड़कें बनाई हैं और ${statistics.healthCenters} स्वास्थ्य केंद्र स्थापित किए हैं।`;
      }
      let response = `बुनियादी ढांचा विकास अपडेट:\n\n`;
      response += `इस क्षेत्र में ${infraProjects.length} बुनियादी ढांचा परियोजनाएं हैं।\n\n`;
      infraProjects.slice(0, 4).forEach(p => {
        const statusEmoji = p.status === 'completed' ? '✅' : p.status === 'in-progress' ? '🔄' : '📋';
        response += `${statusEmoji} **${p.nameHi}** — बजट: ${p.budgetLabel}, प्रगति: ${p.completion}%\n   ${p.descriptionHi}\n\n`;
      });
      return response;
    },
    general: () => {
      return `आपके प्रश्न के लिए धन्यवाद! मैं आपका AI गवर्नेंस सहायक हूं, और मैं इनमें मदद कर सकता हूं:\n\n🏗️ **विकास परियोजनाएं** — सड़कें, स्कूल, अस्पताल और बहुत कुछ\n📋 **सरकारी योजनाएं** — शिक्षा, स्वास्थ्य, रोजगार, स्टार्टअप\n📊 **क्षेत्र सांख्यिकी** — बजट उपयोग, परियोजना पूर्णता दर\n\nकृपया किसी विशिष्ट विषय के बारे में पूछें!`;
    },
    greeting: () => {
      return `नमस्ते! 🙏 जनसंवाद AI में आपका स्वागत है। मैं आपका डिजिटल गवर्नेंस सहायक हूं। मेरे पास सत्यापित डेटा उपलब्ध है:\n\n• ${statistics.totalProjects} विकास परियोजनाएं\n• ${statistics.activeSchemes} सरकारी योजनाएं\n• ${statistics.roadsBuilt} सड़कों का बुनियादी ढांचा\n• ${statistics.schemeBeneficiaries} योजना लाभार्थी\n\nआज मैं आपकी कैसे मदद कर सकता हूं?`;
    }
  }
};

function detectIntent(query) {
  const q = query.toLowerCase();
  
  // Greeting
  if (/^(hi|hello|namaste|hey|namaskar|namasté)/i.test(q)) return 'greeting';
  if (/^(नमस्ते|हैलो|नमस्कार)/i.test(query)) return 'greeting';
  
  // Scheme-related
  if (/scheme|yojana|scholarship|benefit|subsid|योजना|छात्रवृत्ति|लाभ|student/i.test(q)) return 'schemes';
  
  // Infrastructure
  if (/road|bridge|drainage|streetlight|sewer|water|infra|सड़क|पुल|जल|बिजली/i.test(q)) return 'infrastructure';
  
  // Development
  if (/develop|project|work|progress|complete|budget|विकास|परियोजना|काम|प्रगति|बजट/i.test(q)) return 'development';
  
  // Education
  if (/school|education|college|library|शिक्षा|विद्यालय|स्कूल|कॉलेज/i.test(q)) return 'development';
  
  // Healthcare
  if (/hospital|health|doctor|clinic|अस्पताल|स्वास्थ्य|डॉक्टर/i.test(q)) return 'development';
  
  // Employment
  if (/employ|job|skill|training|rozgar|रोजगार|नौकरी|कौशल|प्रशिक्षण/i.test(q)) return 'schemes';
  
  // Startup
  if (/startup|innovation|entrepreneur|स्टार्टअप|नवाचार|उद्यम/i.test(q)) return 'schemes';
  
  return 'general';
}

function filterProjects(query, constituency) {
  const q = query.toLowerCase();
  let filtered = [...projects];
  
  if (constituency && constituency !== 'all') {
    filtered = filtered.filter(p => p.constituency === constituency);
  }
  
  // Category filter
  if (/road|highway|street|drainage|sewer|light|bridge|infra|सड़क|जल|बिजली/i.test(q)) {
    filtered = filtered.filter(p => p.category === 'infrastructure');
  } else if (/school|education|library|college|शिक्षा|विद्यालय/i.test(q)) {
    filtered = filtered.filter(p => p.category === 'education');
  } else if (/hospital|health|clinic|अस्पताल|स्वास्थ्य/i.test(q)) {
    filtered = filtered.filter(p => p.category === 'healthcare');
  }
  
  // Status filter
  if (/complete|done|finish|पूरा|पूर्ण/i.test(q)) {
    filtered = filtered.filter(p => p.status === 'completed');
  } else if (/progress|ongoing|current|चल रहा|प्रगति/i.test(q)) {
    filtered = filtered.filter(p => p.status === 'in-progress');
  } else if (/planned|upcoming|future|आगामी|नियोजित/i.test(q)) {
    filtered = filtered.filter(p => p.status === 'planned');
  }
  
  return filtered;
}

function filterSchemes(query) {
  const q = query.toLowerCase();
  let filtered = [...schemes];
  
  if (/student|education|scholarship|school|शिक्षा|छात्र|छात्रवृत्ति/i.test(q)) {
    filtered = filtered.filter(s => s.category === 'education');
  } else if (/health|medical|hospital|स्वास्थ्य|चिकित्सा|अस्पताल/i.test(q)) {
    filtered = filtered.filter(s => s.category === 'health');
  } else if (/employ|job|skill|rozgar|रोजगार|नौकरी|कौशल/i.test(q)) {
    filtered = filtered.filter(s => s.category === 'employment');
  } else if (/startup|innovat|entrepreneur|स्टार्टअप|उद्यम/i.test(q)) {
    filtered = filtered.filter(s => s.category === 'startup');
  }
  
  return filtered;
}

export async function generateResponse(query, lang = 'en', constituency = 'all') {
  // Simulate AI processing delay
  await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 700));
  
  const intent = detectIntent(query);
  const templates = responseTemplates[lang] || responseTemplates.en;
  
  let text = '';
  let relatedProjects = [];
  let relatedSchemes = [];
  
  switch (intent) {
    case 'greeting':
      text = templates.greeting();
      relatedProjects = projects.slice(0, 3);
      relatedSchemes = schemes.slice(0, 3);
      break;
      
    case 'development':
      relatedProjects = filterProjects(query, constituency);
      text = templates.development(relatedProjects, constituency);
      relatedSchemes = [];
      break;
      
    case 'schemes':
      relatedSchemes = filterSchemes(query);
      text = templates.schemes(relatedSchemes);
      relatedProjects = [];
      break;
      
    case 'infrastructure':
      relatedProjects = filterProjects(query, constituency);
      text = templates.infrastructure(relatedProjects);
      relatedSchemes = [];
      break;
      
    default:
      text = templates.general();
      relatedProjects = projects.slice(0, 3);
      relatedSchemes = schemes.slice(0, 3);
  }
  
  return {
    text,
    projects: relatedProjects.slice(0, 5),
    schemes: relatedSchemes.slice(0, 4),
    stats: {
      totalProjects: relatedProjects.length || statistics.totalProjects,
      totalBudget: relatedProjects.length > 0
        ? `₹${(relatedProjects.reduce((s, p) => s + p.budget, 0) / 10000000).toFixed(1)} Cr`
        : statistics.totalBudget,
      completionRate: relatedProjects.length > 0
        ? Math.round(relatedProjects.filter(p => p.status === 'completed').length / relatedProjects.length * 100)
        : Math.round(statistics.completedProjects / statistics.totalProjects * 100),
    },
    intent,
  };
}

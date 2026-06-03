// ============================================================
// TeluguHelp — i18n Translation System
// Supports: Telugu (te), Hindi (hi), English (en)
// Auto-detects browser language
// Usage: include this file in every page
// ============================================================

const TRANSLATIONS = {

  // ── NAVIGATION ──
  'nav.back': {
    te: '← Home కి వెళ్ళు',
    hi: '← होम पर जाएं',
    en: '← Back to Home'
  },
  'nav.blog': {
    te: '← వ్యాసాలు',
    hi: '← लेख',
    en: '← Articles'
  },

  // ── HOMEPAGE HERO ──
  'hero.chip': {
    te: 'తెలుగు వారికోసం · 100% ఉచితం',
    hi: 'तेलुगू लोगों के लिए · 100% मुफ़्त',
    en: 'For Telugu People · 100% Free'
  },
  'hero.title1': {
    te: 'మీ సమస్యకు',
    hi: 'आपकी समस्या का',
    en: 'Instant Solution'
  },
  'hero.title2': {
    te: 'వెంటనే పరిష్కారం',
    hi: 'तुरंत समाधान',
    en: 'To Your Problem'
  },
  'hero.sub': {
    te: 'జీతం లెక్కలు · లోన్ అర్హత · ప్రభుత్వ పథకాలు — తెలుగులో, సులభంగా',
    hi: 'वेतन गणना · लोन पात्रता · सरकारी योजनाएं — हिंदी में, आसानी से',
    en: 'Salary Calculator · Loan Eligibility · Govt Schemes — Simple & Free'
  },
  'hero.trust1': {
    te: '50,000+ మంది వాడారు',
    hi: '50,000+ लोगों ने उपयोग किया',
    en: '50,000+ Users'
  },
  'hero.trust2': {
    te: 'Registration అక్కర్లేదు',
    hi: 'रजिस्ट्रेशन की जरूरत नहीं',
    en: 'No Registration'
  },
  'hero.trust3': {
    te: 'Data save కాదు',
    hi: 'डेटा सेव नहीं होता',
    en: 'No Data Saved'
  },
  'hero.trust4': {
    te: 'Mobile Friendly',
    hi: 'मोबाइल फ्रेंडली',
    en: 'Mobile Friendly'
  },

  // ── TOOLS SECTION ──
  'tools.heading': {
    te: 'ఏ సమస్య వచ్చినా — ఇక్కడ చూడండి',
    hi: 'कोई भी समस्या हो — यहाँ देखें',
    en: 'Any Problem? — Find Solution Here'
  },
  'tools.sub': {
    te: 'ఒక్కో సాధనం ఒక నిజమైన సమస్యను పూర్తిగా పరిష్కరిస్తుంది',
    hi: 'हर टूल एक वास्तविक समस्या का पूरा समाधान करता है',
    en: 'Each tool completely solves a real-life problem'
  },

  // ── TOOL CARDS ──
  'tool.salary.te': { te: 'జీతం లెక్కలు', hi: 'वेतन गणना', en: 'Salary Calculator' },
  'tool.salary.en': { te: 'Salary & CTC Calculator', hi: 'वेतन और CTC कैलकुलेटर', en: 'Salary & CTC Calculator' },
  'tool.salary.desc': {
    te: 'CTC నుండి నెలసరి జీతం, PF, TDS లెక్కలు తెలుగులో.',
    hi: 'CTC से मासिक वेतन, PF, TDS गणना हिंदी में।',
    en: 'Calculate monthly salary from CTC with PF, TDS breakdown.'
  },

  'tool.emi.te': { te: 'లోన్ వస్తుందా?', hi: 'लोन मिलेगा?', en: 'Loan Eligibility' },
  'tool.emi.en': { te: 'EMI & Loan Eligibility', hi: 'EMI और लोन पात्रता', en: 'EMI & Loan Eligibility' },
  'tool.emi.desc': {
    te: 'మీ జీతానికి ఎంత లోన్ వస్తుందో చెక్ చేయండి.',
    hi: 'आपके वेतन पर कितना लोन मिलेगा चेक करें।',
    en: 'Check how much loan you are eligible for based on salary.'
  },

  'tool.schemes.te': { te: 'ప్రభుత్వ పథకాలు', hi: 'सरकारी योजनाएं', en: 'Govt Schemes' },
  'tool.schemes.en': { te: 'Govt Scheme Checker', hi: 'सरकारी योजना चेकर', en: 'Govt Scheme Checker' },
  'tool.schemes.desc': {
    te: 'మీకు అర్హమైన ప్రభుత్వ పథకాలు తెలుసుకోండి.',
    hi: 'आपके लिए पात्र सरकारी योजनाएं जानें।',
    en: 'Find government schemes you are eligible for.'
  },

  'tool.documents.te': { te: 'పత్రాలు గైడ్', hi: 'दस्तावेज़ गाइड', en: 'Documents Guide' },
  'tool.documents.desc': {
    te: 'రేషన్ కార్డు, ఆధార్, పాన్ — step-by-step తెలుగులో.',
    hi: 'राशन कार्ड, आधार, पैन — स्टेप बाय स्टेप हिंदी में।',
    en: 'Ration Card, Aadhaar, PAN — step-by-step guide.'
  },

  'tool.scholarship.te': { te: 'స్కాలర్షిప్', hi: 'छात्रवृत्ति', en: 'Scholarship' },
  'tool.scholarship.desc': {
    te: 'చదువుకు స్కాలర్షిప్, CGPA అర్హత, 2026 అప్డేట్.',
    hi: 'पढ़ाई के लिए छात्रवृत्ति, CGPA पात्रता, 2026 अपडेट।',
    en: 'Scholarship eligibility, CGPA checker, 2026 updated.'
  },

  'tool.rental.te': { te: 'ఇల్లు అద్దె ఒప్పందం', hi: 'किराया अनुबंध', en: 'Rental Agreement' },
  'tool.rental.desc': {
    te: 'Rental agreement తయారు చేయండి. స్టాంప్ డ్యూటీ లెక్కలు.',
    hi: 'किराया अनुबंध बनाएं। स्टाम्प ड्यूटी गणना।',
    en: 'Create rental agreement. Calculate stamp duty.'
  },

  'tool.resume.te': { te: 'AI Resume Builder', hi: 'AI रेज़्यूमे बिल्डर', en: 'AI Resume Builder' },
  'tool.resume.desc': {
    te: 'AI తో professional resume తయారు చేయండి.',
    hi: 'AI से प्रोफेशनल रेज़्यूमे बनाएं।',
    en: 'Build professional resume with AI. ATS score check.'
  },

  'tool.business.te': { te: 'Business Name Generator', hi: 'बिज़नेस नाम जनरेटर', en: 'Business Name Generator' },
  'tool.business.desc': {
    te: 'AI తో unique business names generate చేయండి.',
    hi: 'AI से यूनीक बिज़नेस नाम बनाएं।',
    en: 'Generate unique business names with AI + domain check.'
  },

  'tool.health.te': { te: 'Health Routine', hi: 'हेल्थ रूटीन', en: 'Health Routine' },
  'tool.health.desc': {
    te: 'Hair, Skin, Gym routine — budget products తో.',
    hi: 'बाल, त्वचा, जिम रूटीन — बजट प्रोडक्ट्स के साथ।',
    en: 'Hair, Skin & Gym routine with budget products.'
  },

  // ── HOW TO USE ──
  'steps.heading': {
    te: 'ఎలా వాడాలి? — చాలా సులభం',
    hi: 'कैसे उपयोग करें? — बहुत आसान',
    en: 'How to Use? — Very Simple'
  },
  'steps.sub': {
    te: '4 simple steps లో మీ సమస్యకు జవాబు పొందండి',
    hi: '4 आसान स्टेप्स में अपनी समस्या का जवाब पाएं',
    en: 'Get your answer in 4 simple steps'
  },
  'step1.title': { te: 'సాధనం ఎంచుకోండి', hi: 'टूल चुनें', en: 'Choose a Tool' },
  'step1.desc': { te: 'పైన ఉన్న tools లో మీకు కావలసిన దాన్ని click చేయండి', hi: 'ऊपर दिए टूल्स में से जो चाहिए वो क्लिक करें', en: 'Click on the tool you need from above' },
  'step2.title': { te: 'వివరాలు నమోదు చేయండి', hi: 'जानकारी दर्ज करें', en: 'Enter Your Details' },
  'step2.desc': { te: 'మీ జీతం, రాష్ట్రం, వయసు లాంటి basic details ఇవ్వండి', hi: 'अपना वेतन, राज्य, उम्र जैसी बेसिक जानकारी दें', en: 'Enter basic details like salary, state, age' },
  'step3.title': { te: 'లెక్కించండి', hi: 'कैलकुलेट करें', en: 'Calculate' },
  'step3.desc': { te: 'ఒక్క click లో మీకు సంపూర్ణ జవాబు వస్తుంది', hi: 'एक क्लिक में आपको पूरा जवाब मिलेगा', en: 'Get complete answer in one click' },
  'step4.title': { te: 'Save చేయండి', hi: 'सेव करें', en: 'Save & Share' },
  'step4.desc': { te: 'PDF download చేయండి లేదా WhatsApp లో share చేయండి', hi: 'PDF डाउनलोड करें या WhatsApp पर शेयर करें', en: 'Download PDF or share on WhatsApp' },

  // ── WHY US ──
  'why.heading': { te: 'మనం ఎందుకు వేరుగా ఉన్నాం?', hi: 'हम अलग क्यों हैं?', en: 'Why Are We Different?' },
  'why.sub': { te: 'Other sites కంటే TeluguHelp ఏ విధంగా మెరుగ్గా ఉంది', hi: 'TeluguHelp दूसरी साइट्स से कैसे बेहतर है', en: 'How TeluguHelp is better than other sites' },
  'why1.title': { te: 'నిజమైన తెలుగులో', hi: 'असली भाषा में', en: 'In Your Language' },
  'why1.desc': { te: 'Google Translate కాదు. మీకు సులభంగా అర్థమవుతుంది.', hi: 'Google Translate नहीं। आपको आसानी से समझ आएगा।', en: 'Not Google Translate. Written in natural, easy language.' },
  'why2.title': { te: 'Accurate లెక్కలు', hi: 'सटीक गणना', en: 'Accurate Results' },
  'why2.desc': { te: 'AI guess work కాదు — real formulas, verified data.', hi: 'AI अनुमान नहीं — असली फार्मूले, सत्यापित डेटा।', en: 'Not AI guesswork — real formulas, verified data.' },
  'why3.title': { te: 'మీ Data Safe', hi: 'आपका डेटा सुरक्षित', en: 'Your Data Safe' },
  'why3.desc': { te: 'Registration అక్కర్లేదు. మీ data save కాదు.', hi: 'रजिस्ट्रेशन नहीं चाहिए। आपका डेटा सेव नहीं होता।', en: 'No registration needed. Your data is never saved.' },

  // ── STATS ──
  'stats.users': { te: 'మంది వాడారు', hi: 'लोगों ने उपयोग किया', en: 'Users' },
  'stats.tools': { te: 'ఉచిత సాధనాలు', hi: 'मुफ़्त टूल्स', en: 'Free Tools' },
  'stats.languages': { te: 'భాషలు', hi: 'भाषाएं', en: 'Languages' },
  'stats.cost': { te: 'ఖర్చు లేదు', hi: 'कोई खर्च नहीं', en: 'No Cost' },

  // ── BLOG ──
  'blog.heading': { te: 'తెలుగులో చదవండి — Useful Articles', hi: 'हिंदी में पढ़ें — उपयोगी लेख', en: 'Read Useful Articles' },
  'blog.sub': { te: 'Finance, Govt schemes, Documents — సరళమైన భాషలో వివరణ', hi: 'Finance, Govt schemes, Documents — सरल भाषा में', en: 'Finance, Govt schemes, Documents — Simple explanations' },
  'blog.read': { te: 'చదవండి →', hi: 'पढ़ें →', en: 'Read →' },

  // ── FOOTER ──
  'footer.tagline': { te: 'Made with ❤️ for Telugu people', hi: 'तेलुगू लोगों के लिए ❤️ से बनाया', en: 'Made with ❤️ for Telugu people' },
  'footer.tools': { te: 'Tools', hi: 'टूल्स', en: 'Tools' },
  'footer.pages': { te: 'Pages', hi: 'पेज', en: 'Pages' },
  'footer.about': { te: 'మా గురించి', hi: 'हमारे बारे में', en: 'About Us' },
  'footer.articles': { te: 'వ్యాసాలు', hi: 'लेख', en: 'Articles' },
  'footer.contact': { te: 'సంప్రదించండి', hi: 'संपर्क करें', en: 'Contact Us' },
  'footer.privacy': { te: 'Privacy Policy', hi: 'गोपनीयता नीति', en: 'Privacy Policy' },
  'footer.disclaimer': { te: 'Disclaimer', hi: 'अस्वीकरण', en: 'Disclaimer' },
  'footer.copy': { te: 'ఖర్చు లేదు · Data save కాదు · ఎప్పుడూ Free', hi: 'कोई खर्च नहीं · डेटा सेव नहीं · हमेशा मुफ़्त', en: 'No Cost · No Data Saved · Always Free' },

  // ── COMMON BUTTONS ──
  'btn.calculate': { te: 'లెక్కించండి →', hi: 'गणना करें →', en: 'Calculate →' },
  'btn.check': { te: 'చెక్ చేయండి →', hi: 'चेक करें →', en: 'Check →' },
  'btn.reset': { te: '🔄 మళ్ళీ లెక్కించు', hi: '🔄 फिर से गणना करें', en: '🔄 Recalculate' },
  'btn.print': { te: '🖨️ Print / PDF', hi: '🖨️ प्रिंट / PDF', en: '🖨️ Print / PDF' },
  'btn.share': { te: '📤 Share', hi: '📤 शेयर करें', en: '📤 Share' },
  'btn.apply': { te: 'Apply చేయండి →', hi: 'आवेदन करें →', en: 'Apply Now →' },
};

// ── Current language (default: auto-detect) ──
let currentLang = 'te';

function detectLanguage() {
  // Check localStorage first
  const saved = localStorage.getItem('th_lang');
  if (saved && ['te','hi','en'].includes(saved)) return saved;

  // Auto-detect from browser
  const browserLang = (navigator.language || navigator.userLanguage || 'te').toLowerCase();
  if (browserLang.startsWith('hi')) return 'hi';
  if (browserLang.startsWith('en')) return 'en';
  if (browserLang.startsWith('te')) return 'te'; // te-IN, te-TG etc
  return 'te'; // Default Telugu for all others
}

function t(key) {
  const entry = TRANSLATIONS[key];
  if (!entry) return key;
  return entry[currentLang] || entry['te'] || key;
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('th_lang', lang);

  // Update all translated elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translation = t(key);
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = translation;
    } else {
      el.textContent = translation;
    }
  });

  // Update lang pills
  document.querySelectorAll('.lang-pill').forEach(btn => {
    btn.classList.toggle('on', btn.dataset.lang === lang);
  });

  // Update html lang attribute
  document.documentElement.lang = lang === 'en' ? 'en' : lang === 'hi' ? 'hi' : 'te';

  // Update page title if key exists
  const pageKey = document.body.dataset.pageKey;
  if (pageKey) {
    const titleKey = 'page.title.' + pageKey;
    const newTitle = t(titleKey);
    if (newTitle) document.title = newTitle;
  }
}

// ── Init on page load ──
function initI18n() {
  currentLang = detectLanguage();
  setLanguage(currentLang);
}

// Run on DOMContentLoaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initI18n);
} else {
  initI18n(); // Already loaded
}

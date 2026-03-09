<div align="center">
  <!-- <img src="https://img.icons8.com/?size=100&id=GvDltQ8A7JvU&format=png&color=10B981" alt="JanSamvaad AI Logo" width="100"/> -->

  # JanSamvaad AI 🇮🇳
  ### Digital Governance Avatar Platform
  
  Experience the future of citizen-government interaction. Talk directly with AI-powered governance avatars for instant, transparent answers about development, schemes, and public services.

  [![Next.js](https://img.shields.io/badge/Next.js-15.0-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-19.0-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

</div>

<br />

## 🌟 The Vision
**JanSamvaad AI** bridges the gap between citizens and governance by deploying interactive, intelligent digital avatars. Built specifically for the Indian civic tech ecosystem, it provides a voice-first, bilingual interface where anyone can ask questions and receive instant, verified data on public infrastructure and welfare schemes.

<br />

## ✨ Key Features

- 🗣️ **AI Avatar Interaction**: Speak naturally with an animated, responsive digital representative featuring lip-sync and idle animations.
- 🎙️ **Voice-First Experience**: Supports Web Speech API for seamless Speech-to-Text and Text-to-Speech in the browser.
- 🌐 **Bilingual Support**: Instant switching between **English and Hindi** for both UI text and voice responses.
- 📊 **Real-Time Data Insights**: Interactive dashboards displaying project budgets, completion rates, and scheme beneficiaries.
- 🏛️ **Knowledge-Based Answers**: Simulates an LLM+RAG architecture to intelligently fetch relevant governance data based on the citizen's query.
- 🎨 **Premium UI/UX**: Built entirely with a custom **Glassmorphism** design system, CSS animations, and a responsive 3-panel layout.
- ⚙️ **Custom Avatar Engine**: Admin panel to configure new avatars for specific leaders, organizations, or institutions with distinct voices and roles.

<br />

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites
- Node.js > 20.0
- Git

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/JanSamvaad-AI.git
   cd JanSamvaad-AI
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
   *(Note: This project deliberately uses `npm` and standard vanilla CSS over Tailwind to showcase fundamental UI architectural skills.)*

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Experience the app:**
   Open [http://localhost:3000](http://localhost:3000) in **Google Chrome** (Chrome is recommended to fully support the Web Speech API features).

<br />

## 💻 Tech Stack

| Technology | Purpose |
| ---------- | ------- |
| **Next.js 15 (App Router)** | Core framework, React environment, optimized routing |
| **React 19** | UI Components and state management |
| **Vanilla CSS** | Custom design system, Glassmorphism, CSS keyframe animations |
| **HTML5 Canvas** | Procedural rendering and animation of the AI Avatar face |
| **Web Speech API** | Native STT (Speech recognition) and TTS (Speech synthesis) |

<br />

## 📂 Project Structure

```text
src/
├── app/                  # Next.js App Router pages
│   ├── admin/            # Avatar creation dashboard
│   ├── dashboard/        # Main citizen interaction interface 
│   ├── globals.css       # Core design tokens and theme engine
│   └── page.js           # Animated landing page
├── components/           # Reusable UI architecture
│   ├── Avatar.js         # Canvas-based lip-sync rendering engine
│   ├── ChatInterface.js  # Conversational UI with voice input
│   ├── GovernancePanel.js# Data visualization right-panel
│   └── Navbar.js         # Responsive navigation
├── data/                 # Mock Knowledge Base
│   └── governanceData.js # 15+ Projects & 10+ Schemes (Bilingual)
└── lib/                  # Core Logic Engines
    ├── aiEngine.js       # Intent detection and RAG simulation response generation
    ├── voiceSystem.js    # STT/TTS wrapper class
    └── i18n.js           # Lightweight translation dictionary
```

<br />

## 📸 Demo Scenarios to Try

Once you boot up the app, go to the dashboard and try these test phrases using the text input or microphone:

**English:**
- *"What development work happened in my area?"*
- *"Tell me about education schemes for students"*
- *"What infrastructure projects were completed recently?"*

**Hindi:**
- *"मेरे क्षेत्र में क्या विकास कार्य हुआ?"*
- *"छात्रों के लिए कौन सी योजनाएं उपलब्ध हैं?"*
- *"अस्पताल और स्वास्थ्य के बारे में बताओ"*

<br />

## 🛠 Troubleshooting

**"The AI Avatar isn't speaking or hearing me."**
* The Web Speech API requires browser permission. Ensure you click "Allow" when the microphone prompt appears.
* Voice features are best supported in **Google Chrome** or Microsoft Edge. Other browsers (like Firefox or Safari) have spotty support for the native Speech API.

**"I'm getting an `EPERM` error when running `npm run dev`."**
* This is a known Windows Next.js cache issue. Delete the `.next` folder manually, or run `rm -rf .next` and try again.

<br />

<div align="center">
  <p>Made with ❤️ for India 🇮🇳</p>
</div>

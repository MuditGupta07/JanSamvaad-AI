import './globals.css';

export const metadata = {
  title: 'JanSamvaad AI — Digital Governance Avatar Platform',
  description: 'Experience the future of citizen-government interaction. Talk directly with AI-powered governance avatars for instant, transparent answers about development, schemes, and public services.',
  keywords: 'governance, AI, avatar, citizen, government, India, digital, JanSamvaad',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><circle cx='16' cy='16' r='14' fill='%2310B981'/><circle cx='16' cy='12' r='5' fill='white'/><path d='M8 26c0-4.4 3.6-8 8-8s8 3.6 8 8' stroke='white' stroke-width='2' fill='none'/></svg>" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Outfit:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning>
        <div className="bg-radial-glow" />
        {children}
      </body>
    </html>
  );
}

import { Metadata } from 'next';
import './globals.css';

interface RootLayoutInterface {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: 'TaskFlow - A Team Collaboration Tool',
  description: 'A team collaboration tool manage team and tasks',
  icons: {
    icon: '/task_logo.png'
  }
}

const RootLayout: React.FC<RootLayoutInterface> =({children})=>{
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;
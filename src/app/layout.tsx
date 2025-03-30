import { Metadata } from 'next';
import './globals.css';
import RootContainer from './root-container';

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
      <body>
        <RootContainer>
          {children}
        </RootContainer> 
      </body>
    </html>
  );
}

export default RootLayout;
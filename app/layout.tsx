// app/layout.tsx
import React from 'react';
import '../styles/globals.css'; // Import global styles
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'My Website',
  description: 'Welcome to My website',
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;

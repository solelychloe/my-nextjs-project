import './globals.css'
import type { Metadata } from 'next'
import { Atkinson_Hyperlegible } from 'next/font/google'

const atkinson = Atkinson_Hyperlegible({
  weight: '400', 
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Chloe Arciniega",
  description: "Software engineer, sysadmin, community manager.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={atkinson.className}
      >
        <main className="gap-2">
          {children}
        </main>
      </body>
    </html>
  );
}

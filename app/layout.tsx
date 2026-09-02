import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Atamore — Mémoires d’un Inspiré',
  description: 'Chroniques, personnages et lieux de la campagne Agone vécue à travers Atamore.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body>{children}</body></html>;
}

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Atamore — Mémoires d’un Inspiré',
  description: 'Chroniques, personnages et lieux d’une campagne Agone vécue à travers Atamore, au cœur de Vertelarme.',
  openGraph: { title: 'Atamore — Mémoires d’un Inspiré', description: 'Ce que la Flamme refuse d’oublier.', images: ['./og.png'] },
  twitter: { card: 'summary_large_image', title: 'Atamore — Mémoires d’un Inspiré', description: 'Ce que la Flamme refuse d’oublier.', images: ['./og.png'] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body>{children}</body></html>;
}

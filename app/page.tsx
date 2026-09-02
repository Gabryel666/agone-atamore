import Link from 'next/link';
import { ArrowDown, Feather } from 'lucide-react';

const nav = ['Chroniques', 'Personnages', 'Lieux', 'Académie', 'Galerie'];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <Link href="/" className="brand" aria-label="Retour à l’accueil">
          <span className="brand-mark">A</span>
          <span><b>ATAMORE</b><small>Mémoires d’un Inspiré</small></span>
        </Link>
        <nav aria-label="Navigation principale">
          {nav.map((item) => <Link key={item} href={`/${item.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`}>{item}</Link>)}
        </nav>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Carnets d’Atameroric · Harmonde, 1450</p>
          <h1>Ce que la Flamme<br /><em>refuse d’oublier.</em></h1>
          <p className="intro">Chroniques d’un obscurantiste, souvenirs d’une compagnie d’Inspirés et fragments d’un monde où chaque beauté dissimule une ombre.</p>
          <div className="hero-actions">
            <Link href="/chroniques" className="button-primary">Ouvrir les chroniques <Feather size={17} /></Link>
            <a href="#fragments" className="button-quiet">Découvrir Atamore <ArrowDown size={15} /></a>
          </div>
        </div>
        <aside className="hero-card" aria-label="Portrait provisoire d’Atamore">
          <div className="portrait-placeholder"><span>Illustration<br />à venir</span></div>
          <p>Atamore <i>dit Atameroric</i></p>
          <small>Principal de l’Académie obscurantiste de Vertelarme</small>
        </aside>
      </section>

      <section className="fragments" id="fragments">
        <p className="section-number">I — Fragments choisis</p>
        <div className="fragment-grid">
          <article><span>Automne 1448</span><h2>Une académie à Vertelarme</h2><p>Atamore fonde une école de magie sur un domaine aux fondations plus anciennes qu’il n’y paraît.</p></article>
          <article><span>Harpie 1450</span><h2>Le visage dans le miroir</h2><p>Un double surgit, et avec lui le doute. La charge de Principal passe alors entre d’autres mains.</p></article>
          <article><span>Dossier ouvert</span><h2>Le Dragon-Cendre</h2><p>Un tableau maudit, des vestiges sous l’Académie et une énigme qui refuse encore de se taire.</p></article>
        </div>
      </section>
    </main>
  );
}

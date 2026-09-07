'use client';

import { useEffect, useState } from 'react';
import { ArrowDown, ArrowRight, Feather, Menu, X } from 'lucide-react';

const nav = [['Chroniques','chroniques'],['Personnages','personnages'],['Lieux','lieux'],['Galerie','galerie']];
const fragments = [
  ['Automne 1448','Une académie à Vertelarme','Atamore fonde une école de magie sur un domaine aux fondations plus anciennes qu’il n’y paraît.'],
  ['Harpie 1450','Le visage dans le miroir','Un double surgit, et avec lui le doute. La charge de Principal passe alors entre d’autres mains.'],
  ['Dossier ouvert','Le Dragon-Cendre','Un tableau maudit, des vestiges sous l’Académie et une énigme qui refuse encore de se taire.'],
];
const groups = [
  { title:'La Compagnie d’Inspirés', people:[['Philippe de Vertelarme','Le Baron — compagnon disparu'],['Graham Richal','Le maître des secrets'],['Tensaku','Le daisho doté d’une âme'],['Destel','Le farfadet de l’Échiquier']] },
  { title:'L’Académie obscurantiste', people:[['Maître Larménius','Le bras droit — maître du Supplice'],['Maître Arkemia','Le nouveau venu — Supplice Ardent'],['Furyom','L’élève minotaure — évadé des Abysses'],['Missenda','L’élève prodige — Trait Noir']] },
  { title:'Les proches de la Compagnie', people:[['Senzigna','La Dame de Sombrevent — Jorniste'],['Erafel','L’artiste inspirée — Fée Noire']] },
];

export default function Home() {
  const [menuOpen,setMenuOpen]=useState(false);
  const [scrolled,setScrolled]=useState(false);
  useEffect(()=>{const onScroll=()=>setScrolled(scrollY>40);onScroll();addEventListener('scroll',onScroll,{passive:true});return()=>removeEventListener('scroll',onScroll)},[]);
  return <main>
    <header className={`site-header ${scrolled?'is-scrolled':''}`}>
      <a href="#haut" className="brand" aria-label="Retour en haut"><span className="brand-mark">A</span><span><b>ATAMORE</b><small>Mémoires d’un Inspiré</small></span></a>
      <nav className={menuOpen?'is-open':''} aria-label="Navigation principale">{nav.map(([label,id])=><a key={id} href={`#${id}`} onClick={()=>setMenuOpen(false)}>{label}</a>)}<a className="nav-source" href="https://www.dellatosa.fr/agone/" target="_blank" rel="noreferrer">Source</a></nav>
      <button className="menu-button" onClick={()=>setMenuOpen(!menuOpen)} aria-label={menuOpen?'Fermer le menu':'Ouvrir le menu'}>{menuOpen?<X/>:<Menu/>}</button>
    </header>

    <section className="hero" id="haut"><div className="season-wheel"><span>✦</span></div>
      <div className="hero-copy"><p className="eyebrow">Carnets d’Atameoric · Harmonde, 1450</p><h1>Ce que la Flamme<br/><em>refuse d’oublier.</em></h1><p className="intro">Chroniques d’un obscurantiste, souvenirs d’une compagnie d’Inspirés et fragments d’un monde où chaque beauté dissimule une ombre.</p><div className="hero-actions"><a href="#chroniques" className="button-primary">Ouvrir les chroniques <Feather size={17}/></a><a href="#univers" className="button-quiet">Entrer dans l’Harmonde <ArrowDown size={15}/></a></div></div>
      <figure className="hero-card"><div className="portrait-wrap"><img src="./images/atamore-premium-v3.png" alt="Portrait peint d’Atamore"/></div><figcaption><strong>Atamore</strong><i>dit Atameoric</i><small>Principal de l’Académie obscurantiste de Vertelarme</small></figcaption></figure><p className="hero-whisper">ATAMORE</p>
    </section>

    <section className="manifesto" id="univers"><div><p className="section-number">Prologue — L’Harmonde</p><h2>Un monde écrit<br/>comme une <em>scène.</em></h2></div><div className="manifesto-copy"><p>Les Muses offrent l’Inspiration. Le Masque la corrompt. Entre les deux, des êtres portent une Flamme assez vive pour infléchir le Drame.</p><div className="cosmos"><span>La Flamme</span><span>Les Arts</span><span>Les Saisons</span><span>Le Masque</span></div></div></section>

    <section className="chronicles" id="chroniques"><header className="section-head"><div><p className="section-number">I — Fragments choisis</p><h2>Dernières chroniques</h2></div><a href="#galerie">Voir les archives <ArrowRight size={15}/></a></header><div className="fragment-grid">{fragments.map((f,i)=><article key={f[1]}><b>0{i+1}</b><span>{f[0]}</span><h3>{f[1]}</h3><p>{f[2]}</p><a href="#">Lire le fragment <ArrowRight size={14}/></a></article>)}</div></section>

    <section className="cast" id="personnages"><div className="cast-intro"><p className="section-number">II — Le cercle d’Atamore</p><h2>Ceux qui marchent<br/>dans sa <em>Flamme.</em></h2><p>Compagnons, maîtres, élèves et alliés : les visages qui composent son Harmonde proche et donnent chair au Drame.</p><article className="atamore-seal"><span>Figure centrale</span><h3>Atamore</h3><p>Principal · Obscurantiste · Inspiré</p></article></div><div className="cast-groups">{groups.map((group,g)=><section className="cast-list" key={group.title}><h3 className="group-title">{group.title}</h3>{group.people.map((p,i)=><article key={p[0]}><span>0{g*4+i+1}</span><div><h3>{p[0]}</h3><p>{p[1]}</p></div><i>✦</i></article>)}</section>)}</div></section>

    <section className="place" id="lieux"><div className="place-frame"><span>Baronnie d’Urguemand</span><h2>Vertelarme</h2><p>À la frontière de Kesh et des Républiques Mercenaires, une terre que l’on dit bénie des Muses — et que l’ombre n’épargne pas.</p><a href="#">Explorer la baronnie <ArrowRight size={15}/></a></div></section>
    <section className="gallery-teaser" id="galerie"><p className="section-number">III — Cabinet de curiosités</p><h2>Peintures, cartes<br/>& reliques du Drame.</h2><p>La galerie accueillera les portraits restaurés, les lieux traversés et les œuvres qui ont infléchi la campagne.</p><a href="#haut" className="button-primary">Revenir au prologue <ArrowDown className="arrow-up" size={16}/></a></section>
    <footer><a href="#haut" className="brand"><span className="brand-mark">A</span><span><b>ATAMORE</b><small>Mémoires d’un Inspiré</small></span></a><p>Site de campagne non officiel consacré à Agone.</p><p>Portrait provisoire : <a href="https://www.dellatosa.fr/agone/" target="_blank" rel="noreferrer">La Croisée des Mondes</a>.</p></footer>
  </main>;
}



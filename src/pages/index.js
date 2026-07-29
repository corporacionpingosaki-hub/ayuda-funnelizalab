import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const categories = [
  {
    icon: '🚀',
    title: 'Primeros Pasos',
    description: 'Empieza aquí si eres nuevo en FunnelizaLab. Aprende lo esencial para configurar tu cuenta.',
    link: '/docs/primeros-pasos',
  },
  {
    icon: '🔧',
    title: 'Problemas Comunes',
    description: 'Soluciones rápidas a los inconvenientes más frecuentes: caché, accesos, carga de páginas y más.',
    link: '/docs/problemas-comunes',
  },
  {
    icon: '🎬',
    title: 'Tutoriales Rápidos',
    description: 'Guías paso a paso con texto y video para completar tareas sin necesidad de contactar soporte.',
    link: '/docs/tutoriales-rapidos',
  },
];

function HeroSection() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
        <p className={styles.heroTagline}>{siteConfig.tagline}</p>
        <Link className={styles.heroCta} to="/docs/primeros-pasos">
          Comenzar →
        </Link>
      </div>
    </section>
  );
}

function CategoryCard({ icon, title, description, link }) {
  return (
    <Link to={link} className={styles.card}>
      <div className={styles.cardIcon}>{icon}</div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDesc}>{description}</p>
    </Link>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}
    >
      <HeroSection />
      <main className={styles.main}>
        <section className={styles.categories}>
          {categories.map((cat) => (
            <CategoryCard key={cat.title} {...cat} />
          ))}
        </section>
      </main>
    </Layout>
  );
}

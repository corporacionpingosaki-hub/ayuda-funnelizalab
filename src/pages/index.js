import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const categories = [
  {
    icon: '🚀',
    title: 'Comunicaciones',
    description: 'Aprende a conectar y configurar tus canales como WhatsApp API.',
    link: '/docs/category/comunicaciones',
  },
  {
    icon: '📇',
    title: 'Contactos y CRM',
    description: 'Aprende a importar, exportar, etiquetar y gestionar tus listas de contactos y pipelines.',
    link: '/docs/category/contactos-y-crm',
  },
  {
    icon: '🔧',
    title: 'Problemas Comunes',
    description: 'Soluciones rápidas a los inconvenientes más frecuentes: caché, formularios, conexiones y más.',
    link: '/docs/category/problemas-comunes',
  },
];

function HeroSection() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
        <p className={styles.heroTagline}>{siteConfig.tagline}</p>
        <Link className={styles.heroCta} to="/docs/problemas-comunes/borrar-cache">
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

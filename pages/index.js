import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm <strong>Daniyar</strong>. I'm a Software Engineer and Game Developer.</p>
        <p>
          I'm passionate about the Front End, Games and 3D, and here is the example of{' '}
          <a href="https://daniyar-yes.github.io/portfolio-3d/" target="_blank">transforming this passion into action</a>.
        </p>
      </section>
    </Layout>
  );
}
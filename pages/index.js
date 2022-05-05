// import Head from 'next/head';
// import Image from 'next/image';
import Layout from '../components/Layout';
import LinkList from '../components/linkList';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout>
      <main className={styles.container}>
        <LinkList />
      </main>
    </Layout>
  );
}

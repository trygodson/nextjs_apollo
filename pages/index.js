// import Head from 'next/head';
// import Image from 'next/image';
import LinkList from '../components/linkList';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <main className={styles.container}>
      <LinkList />
    </main>
  );
}

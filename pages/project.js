import Wrapper from '../components/Wrapper';
import styles from '../styles/Project.module.css';
import Item from '../components/Project/Item';
import Head from 'next/head';
import Footer from '../components/Footer';

const Project = () => {
  return (
    <Wrapper>
      <Head>
        <title>My Projects</title>
      </Head>
      <div className={styles.container}>
        <p className={styles.title}>Projects</p>
        <div className={styles.list}>
          <Item
            name='JuziClub'
            description='Juzi&apos;s Guild Website'
            repo='https://juzi.club'
          />
          <Item
            name='Blog'
            description='My Blog'
            repo='https://blog.juz1.cn'
          />
          <Item
            name='Forum'
            description='My Forum'
            repo='https://forum.juz1.cn'
          />
          <Item
            name='StartMenu'
            description='My StartMenu'
            repo='https://search.juz1.cn'
          />
          <Item
            name='E-MAIL'
            description='My E-MAIL'
            repo='https://mail.juz1.cn'
          />
          <Item
            name='KOOK'
            description='My KOOK'
            repo='https://kook.juz1.cn'
          />
          <Item
            name='Discord'
            description='My Discord'
            repo='https://discord.juz1.cn'
          />
          <Item
            name='RandomSentences'
            description='RandomSentences'
            repo='https://random.juz1.cn'
          />
          <Item
            name='ChristmasTree'
            description='My ChristmasTree'
            repo='https://ct.juz1.cn'
          />
          <Item
            name='404Page'
            description='My 404Page'
            repo='https://juz1.cn/404'
          />
          <Item
            name='Status'
            description='My Status'
            repo='https://status.juz1.cn'
          />
          <Item
            name='IMG'
            description='My IMGSite'
            repo='https://img.juz1.cn'
          />
          <Item
            name='Q&A'
            description='My Q&A'
            repo='https://qaa.juz1.cn'
          />
          <Item
            name='Music'
            description='My Music'
            repo='https://music.juz1.cn'
          />
          <Item
            name='QuickPass'
            description='My QuickPass'
            repo='https://quickpass.juz1.cn'
          />
        </div>
      </div>
      <Footer />
    </Wrapper>
  );
};

export default Project;

import utilStyles from '../../styles/util.module.css';
import styls from '../../styles/Content.module.css';
import Divider from '../Divider';
import Link from 'next/link';

const Content = () => {
  return (
    <div className={`${styls.content} ${utilStyles.plain}`}>
      <article>
        <p>
          Hi👋, I&apos;m Juzi, a student at{' '}
          <span className={utilStyles.stress}>
            ShanDong
          </span>
          , majoring in{' '}
          <span className={utilStyles.stress}>Software Engineering</span>.{' '}
        </p>
        <p>
          I love <span className={utilStyles.stress}>cats</span>, but I have no cats. 🐈
        </p>
      </article>
      <Divider />
      <article>
        <p>
          I enjoy programming. Playing around with code, discovering new tech,
          and building fun and useful projects are my favorite. On the{' '}
          <Link href='/project'>
            <a className={utilStyles.textLink}>projects</a>
          </Link>{' '}
          projects page, I will show you all of my projects with a{' '}
          <a
            href='https://github.com/JUZICN'
            className={utilStyles.textLink}
            rel='noreferrer'
            target='_blank'
          >
            Github
          </a>{' '}
          repository and an online demo.{' '}
        </p>
      </article>
      <Divider />
      <article>
        <p>
          In my spare time, I like creating videos about programming. Not just
          tutorial, but also share some opinions and experience. You can find me
          on <span className={utilStyles.stress}>哔哩哔哩</span> by searching
          他五格连我三刀 or clicking{' '}
          <a
            href='https://space.bilibili.com/492203970'
            rel='noreferrer'
            target='_blank'
            className={utilStyles.textLink}
          >
            this link
          </a>
          .
        </p>
      </article>
      <Divider />
      <article>
        <p>
          Find me on{' '}
          <a
            href='https://github.com/JUZICN'
            rel='noreferrer'
            target='_blank'
            className={utilStyles.textLink}
          >
            Github
          </a>{' '}
          and{' '}
          <a
            href='https://space.bilibili.com/492203970'
            rel='noreferrer'
            target='_blank'
            className={utilStyles.textLink}
          >
            哔哩哔哩
          </a>
          .
        </p>
        <p>
          Mail me at{' '}
          <a
            href='mailto:i@juz1.cn'
            rel='noreferrer'
            target='_blank'
            className={utilStyles.textLink}
          >
            i@juz1.cn
          </a>
          .
        </p>
      </article>
    </div>
  );
};

export default Content;

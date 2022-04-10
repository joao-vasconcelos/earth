import styles from './Footer.module.css';
import IconEmail from '../icons/IconEmail';
import IconGithub from '../icons/IconGithub';
import IconTwitter from '../icons/IconTwitter';

export default function Header() {
  //

  return (
    <footer className={styles.container}>
      <main>
        <div className={styles.intro}>
          <h2>{"Let's work together."}</h2>
          <p>{'I would love to receive your feedback on my projects.'}</p>
          <p>{"If you'd like to help with code, hit me up on Github."}</p>
          <p>{"I'm also very available on Twitter."}</p>
        </div>
        <div className={styles.contacts}>
          <div className={styles.contactMethod}>
            <IconEmail />
            <p className={styles.title}>Email</p>
            <p className={styles.message}>
              Send me an email to <a href='mailto:contact@joao.earth'>contact@joao.earth</a>
            </p>
            <p className={styles.disclaimer}>I might take a while to answer.</p>
          </div>
          <div className={styles.contactMethod}>
            <IconGithub />
            <p className={styles.title}>Code</p>
            <p className={styles.message}>
              Check out some projects on my{' '}
              <a href='https://github.com/joao-vasconcelos' target='_blank' rel='noreferrer'>
                GitHub
              </a>{' '}
              page.
            </p>
            <p className={styles.disclaimer}>{'Living code is messy code.'}</p>
          </div>
          <div className={styles.contactMethod}>
            <IconTwitter />
            <p className={styles.title}>Social</p>
            <p className={styles.message}>
              Twitter is where {"I'm"} usually at:{' '}
              <a href='https://twitter.com/johny________' target='_blank' rel='noreferrer'>
                @johny________
              </a>
            </p>
            <p className={styles.disclaimer}>Send me a DM.</p>
          </div>
        </div>
      </main>
    </footer>
  );
}

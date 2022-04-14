import Image from 'next/image';
import styles from './GeoBus.module.css';

export default function GeoBus() {
  return (
    <main>
      <section className={styles.intro}>
        <container>
          <h1>Public Transit should be easier.</h1>
        </container>
      </section>

      <section className={styles.app}>
        <container>
          <span className={styles.icon}>
            <Image className={styles.iconImg} src='/images/geobus-icon-1024.png' alt='GeoBus Icon' width={180} height={180} priority />
          </span>
          <div className={styles.info}>
            <h1>GeoBus</h1>
            <p>Locate Lisbon buses on the map in real time.</p>
            <a href={'/geobus/download'} target={'_blank'} rel='noreferrer'>
              Download now for free ›
            </a>
          </div>
        </container>
      </section>

      <section className={styles.screenshots}>
        <container>
          <span className={styles.screenshot}>
            <Image className={styles.screenshotImg} src='/images/geobus-screenshot-1.png' alt='GeoBus Icon' width={1242} height={2208} priority />
          </span>
          <span className={styles.screenshot}>
            <Image className={styles.screenshotImg} src='/images/geobus-screenshot-2.png' alt='GeoBus Icon' width={1242} height={2208} priority />
          </span>
          <span className={styles.screenshot}>
            <Image className={styles.screenshotImg} src='/images/geobus-screenshot-3.png' alt='GeoBus Icon' width={1242} height={2208} priority />
          </span>
        </container>
      </section>

      <section className={styles.info}>
        <container>
          <div className={styles.description}>
            <p>
              GeoBus allows you to locate Lisbon buses on the map in real time, just by choosing the route number. You can also see the latest
              estimated schedules for all bus stops in Lisbon. Add routes to your favorites so they are quickly available when you need them the most.
            </p>
            <p>
              <strong>Features:</strong>
              <br />• Real time location of all vehicles on the map;
              <br />• See complete routes (and alternative paths);
              <br />• Estimated travel times for each stop;
              <br />• Add routes to your favorites.
            </p>
            <p>
              Traffic unpredictability makes it very hard to calculate accurate travel times for Lisbon buses and trams. With GeoBus you can see the
              exact location of each vehicle on the map, and thus get a better notion of how much time it will take to arrive at your stop.
            </p>
            <p>
              It is also possible to check estimated ETAs for all Carris stops. Combining this information with real-time positioning, riding the bus
              in Lisbon is gonna be easy-peasy.
            </p>
            <p>All data is kindly provided by Carris itself, and is updated every 30 seconds.</p>
          </div>
          <span className={styles.appstore}>
            <a href={'/geobus/download'} target={'_blank'} rel='noreferrer'>
              <Image className={styles.appstoreImg} src='/images/appstore-button.png' alt='GeoBus Icon' width={315} height={95} priority />
            </a>
          </span>
        </container>
      </section>
    </main>
  );
}

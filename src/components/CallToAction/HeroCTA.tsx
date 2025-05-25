import styles from "./HeroCTA.module.css";

const HeroCTA = () => {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.CTAContainer}>
        <p className={styles.subtitle}>Designing Better Experience</p>
        <h1 className={styles.title}>
          Problems trying to resolve
          <br />
          the conflict between
        </h1>
        <p className={styles.description}>
          Problems trying to resolve the conflict between the two major realms
          of Classical physics:
        </p>
        <h2 className={styles.price}>$16.48</h2>
        <button className={styles.ctaButton}>ADD YOUR CALL TO ACTION</button>
      </div>
    </section>
  );
};

export default HeroCTA;

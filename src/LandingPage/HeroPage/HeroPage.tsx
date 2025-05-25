// import react from react;
import styles from "./HeroPage.module.css";

const HeroPage = () => {
  return (
    <div className={styles.Hero}>
      <div className={styles.HeroLeft}>
        <div className={styles.textOverlay}>
          <h2>5 Items</h2>
          <h4>FURNITURE</h4>
          <p>Read More</p>
        </div>
        <img src="./Images/media bg-cover.png" alt="hero" />
      </div>
      <div className={styles.HeroRight}>
        <div className={styles.flowePot}>
          <div className={styles.textOverlay}>
            <h2>5 Items</h2>
            <h3>FURNITURE</h3>
            <p>Read More</p>
          </div>
          <img src="./Images/media bg-cover (1).png" alt="hero" />
        </div>
        <div className={styles.HeroRightSub}>
          <div className={styles.Lamp}>
            <div className={styles.textOverlay}>
              <h2>5 Items</h2>
              <h3>FURNITURE</h3>
              <p>Read More</p>
            </div>
            <img src="./Images/media bg-cover (2).png" alt="hero" />
          </div>
          <div className={styles.Plates}>
            <div className={styles.textOverlay}>
              <h2>5 Items</h2>
              <h3>FURNITURE</h3>
              <p>Read More</p>
            </div>
            <img src="./Images/media bg-cover (3).png" alt="hero" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroPage;

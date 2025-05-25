import React from "react";
import styles from "./BestService.module.css";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: "/Images/opne1.png",
    title: "Easy Wins",
    description: "Get your best looking smile now!",
  },
  {
    icon: "/Images/opne2.png",
    title: "Concrete",
    description:
      "Defalcate is most focused in helping you discover your most beautiful smile",
  },
  {
    icon: "/Images/opne3.png",
    title: "Hack Growth",
    description: "Overcame any hurdle or any other problem.",
  },
];

const BestService: React.FC = () => {
  return (
    <section className={styles.BestserviceSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Featured Products</h2>
        <h1 className={styles.mainTitle}>THE BEST SERVICES</h1>
        <p className={styles.subtitle}>
          Problems trying to resolve the conflict between
        </p>
        <div className={styles.features}>
          {features.map((feature, index) => (
            <div key={index} className={styles.feature}>
              <img src={feature.icon} alt={feature.title} width="100%" />

              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestService;

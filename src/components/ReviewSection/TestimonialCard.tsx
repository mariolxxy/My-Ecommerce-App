import React from "react";
import styles from "./TestimonialCard.module.css";

export interface Testimonial {
  id: string;
  quote: string;
  authorImage: string;
  authorName: string;
  authorRole: string;
  rating: number;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <article className={styles.card}>
      <img
        src={testimonial.authorImage}
        alt={testimonial.authorName}
        className={styles.authorImage}
        onError={(e) =>
          (e.currentTarget.src =
            "https://placehold.co/100x100/CCCCCC/FFFFFF?text=Author")
        }
      />
      <div className={styles.rating}>
        <img src="./Images/stars.png" />
      </div>
      <blockquote className={styles.quote}>
        <p>{testimonial.quote}</p>
      </blockquote>
      <div className={styles.authorInfo}>
        <p className={styles.authorName}>{testimonial.authorName}</p>
        <p className={styles.authorRole}>{testimonial.authorRole}</p>
      </div>
    </article>
  );
};

export default TestimonialCard;

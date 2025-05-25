// import styles from "./ReviewSection.module.css";

// const ReviewSection = () => {
//   return (
//     <section>
//       <div className={styles.Review}>
//         <div className={styles.ReviewLeft}>
//           <h2 className={styles.reviewtitle}>What they say about us</h2>
//           <img src="./Images/Profile.png" />
//           <p>
//             Slate helps you see how many more days you need to work to reach
//             your financial goal.
//           </p>
//           <p>Regina Miles</p>
//           <small>Designer</small>
//         </div>
//         <div className={styles.ReviewRight}>
//           <img src="./Images/Review.png" alt="Reviewimage" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ReviewSection;

import React from "react";
import TestimonialCard, { type Testimonial } from "./TestimonialCard";
import styles from "./ReviewSection.module.css";

const testimonialData: Testimonial = {
  id: "1",
  quote:
    "late helps you see how many more days you need to work to reach your financial goal.",
  authorImage: "./Images/Profile.png",
  authorName: "Regina Miles",
  authorRole: "Designer",
  rating: 4, // Number of filled stars
};

const imageGridData = [
  {
    id: "img1",
    src: "./Images/gride1.png",
    alt: "Gallery image 1",
  },
  {
    id: "img2",
    src: "./Images/gride2.png",
    alt: "Gallery image 2",
  },
  {
    id: "img3",
    src: "./Images/gride3.png",
    alt: "Gallery image 3",
  },
  {
    id: "img4",
    src: "./Images/gride4.png",
    alt: "Gallery image 4",
  },
  {
    id: "img5",
    src: "./Images/gride6.png",
    alt: "Gallery image 5",
  },
  {
    id: "img6",
    src: "./Images/gride 6.png",
    alt: "Gallery image 6",
  },
  {
    id: "img7",
    src: "./Images/gride7.png",
    alt: "Gallery image 7",
  },
  {
    id: "img8",
    src: "./Images/gride8.png",
    alt: "Gallery image 8",
  },
  {
    id: "img9",
    src: "./Images/gride9.png",
    alt: "Gallery image 9",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.contentWrapper}>
        <div className={styles.testimonialContent}>
          <h2 className={styles.sectionTitle}>What they say about us</h2>
          <TestimonialCard testimonial={testimonialData} />
        </div>
        <div className={styles.imageGrid}>
          {imageGridData.map((img) => (
            <div key={img.id} className={styles.imageGridItem}>
              <img
                src={img.src}
                alt={img.alt}
                onError={(e) =>
                  (e.currentTarget.src =
                    "https://placehold.co/150x150/CCCCCC/FFFFFF?text=Not+Found")
                }
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

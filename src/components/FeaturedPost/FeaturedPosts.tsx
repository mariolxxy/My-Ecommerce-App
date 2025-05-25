import React from "react";
import PostCard, { type Post } from "./PostCard";
import styles from "./FeaturedPosts.module.css";
// import { FaComments, FaCalendarAlt, FaChevronRight } from "react-icons/fa";

const postsData: Post[] = [
  {
    id: "1",
    imageUrl: "./Images/PostCard3.png",
    imageAlt: "Modern bedroom with dark walls and a large bed",
    tags: ["Google", "Trending", "New"],
    title: "Loudest à la Madison #1 (L'integral)",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: 10,
  },
  {
    id: "2",
    imageUrl: "./Images/post4.png",
    imageAlt: "Bright kitchen with white cabinets and a wooden island",
    tags: ["Google", "Trending", "New"],
    title: "Loudest à la Madison #1 (L'integral)",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: 10,
  },
  {
    id: "3",
    imageUrl: "./Images/PostCard2.png",
    imageAlt: "Minimalist bedroom with a green accent wall and a plant",
    tags: ["Google", "Trending", "New"],
    title: "Loudest à la Madison #1 (L'integral)",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: 10,
  },
];

const FeaturedPosts: React.FC = () => {
  return (
    <section className={styles.featuredPostsSection}>
      <div className={styles.header}>
        <p className={styles.practiceAdvice}>Practice Advice</p>
        <h2 className={styles.sectionTitle}>Featured Posts</h2>
      </div>
      <div className={styles.postsGrid}>
        {postsData.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedPosts;

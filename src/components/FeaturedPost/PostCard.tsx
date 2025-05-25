import React from "react";
import styles from "./PostCard.module.css";
import { FaComments, FaCalendarAlt, FaChevronRight } from "react-icons/fa";

export interface Post {
  id: string;
  imageUrl: string;
  imageAlt: string;
  tags: string[];
  title: string;
  description: string;
  date: string;
  comments: number;
}

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <article className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={post.imageUrl}
          alt={post.imageAlt}
          className={styles.image}
          onError={(e) =>
            (e.currentTarget.src =
              "https://placehold.co/600x400/CCCCCC/FFFFFF?text=Image+Not+Found")
          }
        />
        <span className={styles.newBadge}>NEW</span>
      </div>
      <div className={styles.content}>
        <div className={styles.tags}>
          {post.tags.map((tag, index) => (
            <span
              key={index}
              className={`${styles.tag} ${
                tag === "Google" ? styles.tagGoogle : ""
              } ${tag === "Trending" ? styles.tagTrending : ""} ${
                tag === "New" ? styles.tagNew : ""
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className={styles.title}>{post.title}</h3>
        <p className={styles.description}>{post.description}</p>
        <div className={styles.meta}>
          <div className={styles.metaItem}>
            <FaCalendarAlt size={16} className={styles.metaIcon} />
            <span>{post.date}</span>
          </div>
          <div className={styles.metaItem}>
            <FaComments size={16} className={styles.metaIcon} />
            <span>{post.comments} comments</span>
          </div>
        </div>
        <a href="#" className={styles.learnMoreLink}>
          Learn More{" "}
          <FaChevronRight size={16} className={styles.learnMoreIcon} />
        </a>
      </div>
    </article>
  );
};

export default PostCard;

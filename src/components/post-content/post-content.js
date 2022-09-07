import React from "react"
import styles from "./post-content.module.scss"
import ReactMarkdown from "react-markdown";

const PostContent = ({ content }) => {
  
  return (
    <section className={styles.post_content}>
    <ReactMarkdown>{content}</ReactMarkdown>
    </section>
  )
}

export default PostContent

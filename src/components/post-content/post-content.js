import styles from "./post-content.module.scss"
import ReactMarkdown from "react-markdown"
import CodeHighlighter from "../code-highlighter/code-highlighter"

const PostContent = ({ content }) => {
  
  return (
    <section className={styles.post_content}>
    <ReactMarkdown
     components={{
      code: ({ ...props }) => <CodeHighlighter {...props} />,
    }}
    >
      {content}
    </ReactMarkdown>
    </section>
  )
}

export default PostContent

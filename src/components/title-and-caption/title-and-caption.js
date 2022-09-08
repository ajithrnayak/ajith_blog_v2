import Link from 'next/link'
import styles from "./title-and-caption.module.scss"

const TitleAndCaption = ({ data }) => {
  const { title, subtitle, website } = data

  return (
    <div className={styles.titleAndCaption}>
      <h1 className={styles.blogTitle}>
        <Link className={styles.titleLink} href={`/`}>
          {title}
        </Link>
      </h1>
      <div className={styles.blogCaption}>
        <p>
          {subtitle}
          <span className={styles.website}>
            Checkout my <Link href={website} target="_blank" rel="noopener noreferrer">website.</Link>
          </span>
        </p>
      </div>
    </div>
  )
}

export default TitleAndCaption

import TitleAndCaption from "../title-and-caption/title-and-caption"
import ThemeSwitcher from "../theme-switcher/theme-switcher"
import styles from "./header.module.scss"
import siteMetadata from '../../../config'

const Header = () => {

  return (
    <header className={styles.header}>
      <TitleAndCaption data={siteMetadata} />
    </header>
  )
}

export default Header

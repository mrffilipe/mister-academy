import styles from './page.module.css'

import MainContent from '@/components/MainContent'
import LatestPublications from '@/components/LatestPublications'

export default function Home() {
  return (
    <div className={styles.home}>
      <MainContent />
      <LatestPublications />
    </div>
  )
}
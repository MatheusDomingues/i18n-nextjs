import { useIntl } from 'react-intl'

import styles from '../styles/Home.module.css'

export default function Home() {
  const { formatMessage } = useIntl();

  return (
    <div className={styles.container}>
      {formatMessage({ id: 'HELLO_WORLD'})}
    </div>
  )
}

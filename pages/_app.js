import { useRouter } from 'next/router';
import { IntlProvider } from 'react-intl'

import en from '../content/locale/en';
import es from '../content/locale/es';
import pt from '../content/locale/pt';

const locales = {
  en,
  es,
  pt
}

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  const { locale, defaultLocale, pathname } = router
  const localeCopy = locales[locale]
  const messages = localeCopy[pathname]


  return (
    <IntlProvider
      locale={locale}
      defaultLocale={defaultLocale}
      messages={messages}
    >
      <Component {...pageProps} />
    </IntlProvider>
  )
}

export default MyApp

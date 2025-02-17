import initTranslations from '@/lib/initTranslations'
import { Locale } from '../../../i18n-config'
import TranslationsProvider from '@/providers/TranslationsProvider'
import LanguageSwitcher from '@/components/molecules/LanguageSwitcher'
import ThemeToggle from '@/components/molecules/ThemeToggle'
import Gretting from '@/components/molecules/Greeting'

const i18nNamespaces = ['common', 'lang']

export default async function Home(props: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await props.params
  const { t, resources } = await initTranslations(lang, i18nNamespaces)

  return (
    <TranslationsProvider locale={lang} resources={resources} namespaces={i18nNamespaces}>
      <div className="flex min-h-screen justify-center pt-32">
        <main className="flex h-fit flex-col items-center gap-1">
          <h1>{t('wellcome')}</h1>
          <h1>HERO backoffice</h1>
          <Gretting />

          <LanguageSwitcher />

          <ThemeToggle />
        </main>
      </div>
    </TranslationsProvider>
  )
}

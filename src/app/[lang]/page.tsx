import initTranslations from '@/lib/initTranslations'
import { Locale } from '../../../i18n-config'
import TranslationsProvider from '@/providers/TranslationsProvider'
import Gretting from '@/components/molecules/Greeting'
import { AppSidebar } from '@/components/organisms/AppSidebar/AppSidebar'
import { SidebarProvider } from '@/components/atoms/Sidebar'
import { AppHeader } from '@/components/organisms/AppHeader/AppHeader'

const i18nNamespaces = ['common', 'lang']

export default async function Home(props: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await props.params
  const { resources } = await initTranslations(lang, i18nNamespaces)

  return (
    <TranslationsProvider locale={lang} resources={resources} namespaces={i18nNamespaces}>
      <SidebarProvider>
        <AppSidebar />
        <div className="flex min-h-screen w-full flex-col">
          <AppHeader />
          <main className="flex w-full flex-1 justify-center">
            <Gretting />
          </main>
        </div>
      </SidebarProvider>
    </TranslationsProvider>
  )
}

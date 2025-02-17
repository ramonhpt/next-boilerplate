import { Locale } from '../../../i18n-config'
import { Resource } from 'i18next'

export type TransactionsProviderProps = {
  children: React.ReactNode | React.ReactNode[]
  locale: Locale
  namespaces: string[]
  resources: Resource
}

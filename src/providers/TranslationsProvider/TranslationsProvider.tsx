'use client'

import { I18nextProvider } from 'react-i18next'
import { createInstance } from 'i18next'
import React from 'react'
import { TransactionsProviderProps } from './TranslationsProvider.types'
import initTranslations from '@/lib/initTranslations'

export const TranslationsProvider = ({
  children,
  locale,
  namespaces,
  resources
}: TransactionsProviderProps) => {
  const i18n = createInstance()

  initTranslations(locale, namespaces, i18n, resources)

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}

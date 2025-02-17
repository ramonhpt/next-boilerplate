'use client'

import { useTranslation } from 'react-i18next'

export function Gretting() {
  const { t } = useTranslation()

  return <h3>{t('greeting')}</h3>
}

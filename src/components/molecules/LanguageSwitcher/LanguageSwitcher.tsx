'use client'

import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { useTranslation } from 'react-i18next'
import { i18nConfig } from '../../../../i18n-config'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/atoms/Select'
import { SelectLabel } from '@radix-ui/react-select'

export function LanguageSwitcher() {
  const { i18n, t } = useTranslation('lang')
  const currentLocale = i18n.language
  const router = useRouter()
  const currentPathname = usePathname()

  const handleChange = (newLocale: string) => {
    // set cookie for next-i18n-router
    const days = 30
    const date = new Date()
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
    const expires = date.toUTCString()
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`

    // redirect to the new locale path
    if (currentLocale === i18nConfig.defaultLocale) {
      router.push('/' + newLocale + currentPathname)
    } else {
      router.push(currentPathname.replace(`/${currentLocale}`, `/${newLocale}`))
    }

    router.refresh()
  }

  return (
    <Select onValueChange={handleChange}>
      <SelectTrigger>
        <SelectValue placeholder={t('change')} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Languages</SelectLabel>
          <SelectItem value="en">{t('langs.en')}</SelectItem>
          <SelectItem value="es">{t('langs.es')}</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

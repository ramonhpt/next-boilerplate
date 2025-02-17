import { Inbox } from 'lucide-react'

export type Item = {
  title: string
  url: string
  icon: typeof Inbox
  subItems?: Item[]
}

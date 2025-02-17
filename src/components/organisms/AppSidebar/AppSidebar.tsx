'use client'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from '@/components/atoms/Sidebar'
import { useTranslation } from 'react-i18next'
import { Item } from './AppSidebar.types'
import { ADMIN_ITEMS, GAME_OPERATOR_ITEMS } from './AppSidebar.constants'
import { UserNavarItem } from '@/components/molecules/UserNavbarItem'

const MOCK_USER = {
  name: 'Ramón Hoyo',
  email: 'ramonh@prettytechnical.io',
  avatar: ''
}

export function AppSidebar() {
  const { t } = useTranslation('common')

  const renderItem = (item: Item) => {
    return (
      <SidebarMenuItem key={item.title}>
        <SidebarMenuButton asChild>
          <a href={item.url}>
            <item.icon />
            <span>{t(item.title)}</span>
          </a>
        </SidebarMenuButton>
      </SidebarMenuItem>
    )
  }

  const renderSubgroup = (item: Item) => {
    return (
      <SidebarGroup key={item.title}>
        <SidebarGroupLabel>{t(item.title)}</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>{item.subItems?.map(renderItem)}</SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    )
  }

  const renderGroup = (title: string, items: Item[]) => {
    return (
      <SidebarGroup>
        <SidebarGroupLabel>{t(title)}</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {items.map((item) => {
              if (!item.subItems) return renderItem(item)

              return renderSubgroup(item)
            })}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    )
  }

  return (
    <Sidebar>
      <SidebarContent>
        {renderGroup('sidebar.admin.title', ADMIN_ITEMS)}
        {renderGroup('sidebar.game_operator.title', GAME_OPERATOR_ITEMS)}
      </SidebarContent>

      <SidebarFooter>
        <UserNavarItem user={MOCK_USER} />
      </SidebarFooter>
    </Sidebar>
  )
}

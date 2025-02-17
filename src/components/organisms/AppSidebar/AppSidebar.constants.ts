import {
  ChartNoAxesCombined,
  Component,
  Dices,
  Earth,
  Home,
  Inbox,
  LayoutDashboard,
  Library,
  Shield,
  ShieldEllipsis,
  Users,
  UsersRound
} from 'lucide-react'
import { Item } from './AppSidebar.types'

// Menu items.
export const ADMIN_ITEMS: Item[] = [
  {
    title: 'sidebar.admin.dashboard',
    url: '#',
    icon: LayoutDashboard
  },
  {
    title: 'sidebar.admin.security',
    url: '#',
    icon: Shield,
    subItems: [
      {
        title: 'sidebar.admin.users',
        url: '#',
        icon: Users
      },
      {
        title: 'sidebar.admin.roles',
        url: '#',
        icon: ShieldEllipsis
      },
      {
        title: 'sidebar.admin.groups',
        url: '#',
        icon: Component
      }
    ]
  },
  {
    title: 'sidebar.admin.clients',
    url: '#',
    icon: UsersRound,
    subItems: [
      {
        title: 'sidebar.admin.clients',
        url: '#',
        icon: UsersRound
      }
    ]
  },
  {
    title: 'sidebar.admin.operations',
    url: '#',
    icon: Inbox,
    subItems: [
      {
        title: 'sidebar.admin.summary',
        url: '#',
        icon: ChartNoAxesCombined
      }
    ]
  }
]

// Menu items.
export const GAME_OPERATOR_ITEMS: Item[] = [
  {
    title: 'sidebar.game_operator.home',
    url: '#',
    icon: Home
  },
  {
    title: 'sidebar.game_operator.library',
    url: '#',
    icon: Library
  },
  {
    title: 'sidebar.game_operator.players',
    url: '#',
    icon: Dices,
    subItems: [
      {
        title: 'sidebar.game_operator.general',
        url: '#',
        icon: ChartNoAxesCombined
      },
      {
        title: 'sidebar.game_operator.geographic',
        url: '#',
        icon: Earth
      }
    ]
  }
]

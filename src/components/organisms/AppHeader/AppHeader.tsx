import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/atoms/Breadcrumb'
import { Separator } from '@/components/atoms/Separator'
import { SidebarTrigger } from '@/components/atoms/Sidebar'
import LanguageSwitcher from '@/components/molecules/LanguageSwitcher'
import ThemeToggle from '@/components/molecules/ThemeToggle'

export const AppHeader: React.FunctionComponent = () => {
  return (
    <header className="flex h-16 w-full shrink-0 items-center gap-2 border-b px-4">
      <SidebarTrigger className="-ml-1" />
      <Separator orientation="vertical" className="mr-2 h-4" />
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem className="hidden md:block">
            <BreadcrumbLink href="#">HIRO</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="hidden md:block" />
          <BreadcrumbItem>
            <BreadcrumbPage>Home</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex-1" />

      <div>
        <LanguageSwitcher />
        <ThemeToggle />
      </div>
    </header>
  )
}

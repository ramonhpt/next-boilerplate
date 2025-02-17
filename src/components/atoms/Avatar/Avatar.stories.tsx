import type { StoryObj } from '@storybook/react'
import { Avatar, AvatarFallback, AvatarImage } from './Avatar'
import { AvatarProps } from '@radix-ui/react-avatar'

const unsplashAvatarUrl =
  'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80'

const meta = {
  title: 'Example/Avatar',
  component: (props: AvatarProps) => (
    <Avatar className="h-16 w-16 rounded-lg" {...props}>
      <AvatarImage className="object-cover" src={unsplashAvatarUrl} alt="unsplash" />
      <AvatarFallback className="rounded-lg">AV</AvatarFallback>
    </Avatar>
  ),
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {}
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {}
}

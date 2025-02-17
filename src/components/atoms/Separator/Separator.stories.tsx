import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Separator } from './Separator'
import React from 'react'

const meta = {
  title: 'Atoms/Separator',
  component: Separator,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: { onClick: fn() }
} satisfies Meta<typeof Separator>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
  decorators: [
    (Story) => (
      <div className="min-h-12">
        <Story className="mr-2 h-4" />
      </div>
    )
  ]
}

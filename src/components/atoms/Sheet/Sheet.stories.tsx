import type { StoryObj } from '@storybook/react'
import { Sheet, SheetContent } from './Sheet'
import { useEffect, useState } from 'react'
import { DialogProps } from '@radix-ui/react-dialog'

const meta = {
  title: 'Atoms/Sheet',
  component: Sheet,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof meta>

const Render = (args: DialogProps) => {
  const [open, setOpen] = useState(args.open)

  const onOpenChange = (newOpen: boolean) => {
    setOpen(newOpen)
    if (args.onOpenChange) {
      args.onOpenChange(newOpen)
    }
  }

  useEffect(() => {
    setOpen(args.open)
  }, [args.open])

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      {args.children}
    </Sheet>
  )
}

export const Primary: Story = {
  render: Render,
  args: {
    open: true,
    children: (
      <SheetContent
        className="w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden"
        style={
          {
            '--sidebar-width': '18rem'
          } as React.CSSProperties
        }
        side="right"
      >
        <div className="flex h-full w-full flex-col"></div>
      </SheetContent>
    )
  }
}

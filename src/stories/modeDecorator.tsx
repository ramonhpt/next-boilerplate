import ThemeToggle from '@/components/molecules/ThemeToggle'
import React from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ModeDecorator = (Story: any) => {
  return (
    <>
      <div className="fixed right-2 top-2 z-10">
        <ThemeToggle />
      </div>
      <Story />
    </>
  )
}

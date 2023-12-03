'use client'

import { Button } from '@nextui-org/button'
import { useIsSSR } from '@react-aria/ssr'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const isSSR = useIsSSR()

  const onChange = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <Button color='danger' onClick={onChange}>
      {theme === 'light' || isSSR ? (
        <Moon className='text-dark' />
      ) : (
        <Sun className='text-white' />
      )}
    </Button>
  )
}

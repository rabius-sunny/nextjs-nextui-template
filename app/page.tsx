import ThemeSwitcher from '@/components/shared/ThemeSwitcher'

export default function Home() {
  return (
    <main>
      <div className='h-screen flex items-center justify-center'>
        <div>
          <h1 className='font-bold text-3xl text-primary'>
            Welcome to New App
          </h1>
          <div className='text-center mt-8'>
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </main>
  )
}

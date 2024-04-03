import {LoginButton} from '@/components/auth/login-button'
import {Button} from '@/components/ui/button'

export default function Home() {
  return (
    <main className='flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cc-400 to-cc-600'>
      <div className='space-y-6 text-center'>
        <h1 className='text-6xl font-semibold text-white drop-shadow-md'>
          Credit Cooperative
        </h1>
        <p className='text-white text-lg'>
          A management app for informal credit cooperatives.
        </p>
        <div>
          <LoginButton>
            <Button variant='secondary' size='lg'>
              Sign In
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  )
}

'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import {Avatar, AvatarImage, AvatarFallback} from '@/components/ui/avatar'
import {useCurrentUser} from '@/hooks/use-current-user'
import {LogoutButton} from '@/components/auth/logout-button'
import {ExitIcon} from '@radix-ui/react-icons'

export const UserButton = () => {
  const user = useCurrentUser()

  const getInitials = (userName: string) => {
    const splitName = userName.split(' ')
    return `${splitName[0][0].toUpperCase()}${splitName[1][0].toUpperCase()}`
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className='outline-none'>
          <AvatarImage src={user?.image || ''} />
          <AvatarFallback className='bg-[hsl(222.2,47.4%,11.2%)] text-white text-center'>
            {getInitials(user?.name ?? '')}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-40' align='end'>
        <LogoutButton>
          <DropdownMenuItem>
            <ExitIcon className='h-4 w-4 mr-2' />
            Logout
          </DropdownMenuItem>
        </LogoutButton>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

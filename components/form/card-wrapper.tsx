'use client'

import {Card, CardContent, CardFooter, CardHeader} from '@/components/ui/card'
import {BackButton} from '@/components/form/back-button'
import {Header} from '@/components/form/header'
import {Social} from '@/components/form/social'

interface CardWrapperProps {
  children: React.ReactNode
  headerTitle: string
  headerLabel: string
  backButtonLabel: string
  backButtonHref: string
  showSocial?: boolean
}

export const CardWrapper = ({
  children,
  headerTitle,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial,
}: CardWrapperProps) => {
  return (
    <Card className='w-[25rem] shadow-md'>
      <CardHeader>
        <Header title={headerTitle} label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton label={backButtonLabel} href={backButtonHref} />
      </CardFooter>
    </Card>
  )
}

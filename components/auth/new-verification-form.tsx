'use client'

import {ScaleLoader} from 'react-spinners'
import {CardWrapper} from '@/components/form/card-wrapper'
import {useSearchParams} from 'next/navigation'
import {useCallback, useEffect, useState} from 'react'
import {newVerification} from '@/actions/auth/new-verification'
import {FormError} from '@/components/form/form-error'
import {FormSuccess} from '@/components/form/form-success'

export const NewVerificationForm = () => {
  const [error, setError] = useState<string | undefined>()
  const [success, setSuccess] = useState<string | undefined>()

  const searchParams = useSearchParams()

  const token = searchParams.get('token')

  const onSubmit = useCallback(() => {
    if (success || error) return

    if (!token) {
      setError('Missing token!')
      return
    }

    newVerification(token)
      .then((data) => {
        setSuccess(data.success)
        setError(data.error)
      })
      .catch(() => {
        setError('Something went wrong!')
      })
  }, [error, success, token])

  useEffect(() => {
    onSubmit()
  }, [onSubmit])

  return (
    <CardWrapper
      headerTitle='Email Confirmation'
      headerLabel='Confirming your email'
      backButtonLabel='Back to login'
      backButtonHref='/auth/login'
    >
      <div className='flex items-center w-full justify-center'>
        {!success && !error && <ScaleLoader />}
        <FormSuccess message={success} />
        {!success && <FormError message={error} />}
      </div>
    </CardWrapper>
  )
}

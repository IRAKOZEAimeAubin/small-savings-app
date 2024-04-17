import {Resend} from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const domain = process.env.NEXT_PUBLIC_APP_URL

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${domain}/auth/new-verification?token=${token}`

  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: email,
    subject: 'Email Confirmation',
    html: `<p>Please confirm your email by clicking <a href='${confirmLink}'><strong>link</strong></a>.</p>`,
  })
}

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resentLink = `${domain}/auth/new-password?token=${token}`

  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: email,
    subject: 'Password Reset',
    html: `<p>Follow this <a href='${resentLink}'><strong>link</strong></a> to reset your password.</p>`,
  })
}

export const sendTwoFactorTokenEmail = async (email: string, token: string) => {
  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: email,
    subject: '2FA Code',
    html: `<p>Your 2FA code: ${token}</p>`,
  })
}

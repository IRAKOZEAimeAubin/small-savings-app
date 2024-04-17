import {Resend} from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendVerificationEmail = async (email: string, token: string) => {
    const confirmLink = `http://localhost:3000/auth/new-verification?token=${ token }`
    
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: email,
      subject: 'Email Confirmation',
      html: `<p>Please confirm your email by clicking <a href='${confirmLink}'><strong>link</strong></a>.</p>`,
    })
}

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resentLink = `http://localhost:3000/auth/new-password?token=${token}`

  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: email,
    subject: 'Password Reset',
    html: `<p>Follow this <a href='${resentLink}'><strong>link</strong></a> to reset your password.</p>`,
  })
}

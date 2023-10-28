import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata:Metadata =  {
    title: 'Login | Keedriver',
    description: 'Login Page',
}
  
export default function Login() {
  return (
    <main className="flex mx-auto">
      Hello Login
    </main>
  )
}

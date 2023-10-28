import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata:Metadata =  {
    title: 'Create Account | Keedriver',
    description: 'Create Account Page',
}
  
export default function CreateAccount() {
  return (
    <main className="flex mx-auto">
      Hello Create Account
    </main>
  )
}

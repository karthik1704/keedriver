import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata:Metadata =  {
    title: 'About | Keedriver',
    description: 'About Page',
}
  
export default function About() {
  return (
    <main className="flex mx-auto">
      Hello About
    </main>
  )
}

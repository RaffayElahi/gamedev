

import './globals.css'
import { AuthContextProvider } from '../context/AuthContext'


import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Home - GameDev',
  description: 'GameDev, a professional game studio that makes imagination into reality',
}

export default function RootLayout({ children }) {
  
  return (

    <html lang="en">
      <body className="" >
        <AuthContextProvider>
          {children}
        </AuthContextProvider>   
      </body>
    </html>
  )
}

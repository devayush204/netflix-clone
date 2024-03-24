import './globals.css'
import { Inter } from 'next/font/google'
import { GlobalContextProvider } from './utils/Context'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Netflix Clone',
  description: 'created a netflix clone using movies Api',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GlobalContextProvider>
        <body className={inter.className}>
          <div>
            {children}
          </div>
        </body>
      </GlobalContextProvider>
    </html>
  )
}

import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import './globals.css'
import { Inter , Roboto} from 'next/font/google'

const inter = Roboto({ 
  subsets: ['latin' ],
  weight:['500'],
})

export const metadata = {
  title: 'IvidhanSkills',
  description: 'Learn to code anytime anywherre.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <div className="container">
        <Navbar/>
        {children}
        <Footer/>
       </div>
        </body>
    </html>
  )
}

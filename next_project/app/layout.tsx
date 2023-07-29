
import './globals.css'
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
export const metadata = {
  title: 'Flexibble',
  description: 'ShowCase and discover',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <NavBar />
        {children}
      <Footer />
    </html>
  )
}

import React, { PropsWithChildren } from 'react'
import Header from './Header'
import Footer from './Footer'


// interface LayoutProps {
//   children: React.ReactNode
// }


const Layout: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <>
    <Header />
    <main className='min-h-screen'>{children}</main>
    <Footer />
    </>
  )
}

export default Layout
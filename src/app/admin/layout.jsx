import Navbar from '@/components/dashboard/navbar/NavBar'
import SideBar from '@/components/dashboard/sidebar/SideBar'
import React from 'react'

const Layout = ({children}) => {
  return (
    <div>

      <div>
        {children}
      </div>
    </div>
  )
}

export default Layout

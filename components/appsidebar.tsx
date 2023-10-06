import React, {useContext} from 'react'
import { CSidebar, CSidebarBrand, CSidebarNav } from '@coreui/react'
import Image from 'next/image'
import logo from  '../public/images/logo/img.png'
import CIcon from '@coreui/icons-react'

import { AppSidebarNav } from './AppSidebarNav'

import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'

// sidebar nav config
import navigation from '../_nav'
import NavigationProvider from "@/context/navigationcontext";

const vars = {
  '--cui-body-bg': "#2B6CA3",
  '--cui-body-color': "#ffffff",
  '--cui-tertiary-color': "#ffffff",
  '--cui-emphasis-color': "#ffffff",
  '--cui-tertiary-bg': "#3D9BE9"
}

const AppSidebar = () => {
  const navProvider = useContext(NavigationProvider);
  
  return (
    <CSidebar
      style={vars}
      position="fixed"
      visible={navProvider.sidebarShow}
      onVisibleChange={(visible) => {
        navProvider.setSidebarShow(visible)
      }}
    >
      <CSidebarBrand className="d-none d-md-flex" to="/">
        <Image src={logo} alt={'Sistema de Nómina'} height={80}/>
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav items={navigation} />
        </SimpleBar>
      </CSidebarNav>
    </CSidebar>
  )
}

export default React.memo(AppSidebar)

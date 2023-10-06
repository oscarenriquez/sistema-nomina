import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css';
import AppSidebar from "@/components/appsidebar";
import AppHeader from "@/components/appheader";
import AppContent from "@/components/appcontent";
import React from "react";
import NavigationProvider from "@/context/navigationcontext";
config.autoAddCss = false


export default function MyApp({ Component, pageProps }) {
  const [sidebarShow, setSidebarShow] = React.useState(true);
  return (
    <div>
      <NavigationProvider.Provider value={{sidebarShow, setSidebarShow}}>
        <AppSidebar />
        <div className="wrapper d-flex flex-column min-vh-100 bg-light">
          <AppHeader />
          <div className="body flex-grow-1 px-3">
            <AppContent Component={Component} pageProps={pageProps} />
          </div>
        </div>
      </NavigationProvider.Provider>
    </div>
  )
}

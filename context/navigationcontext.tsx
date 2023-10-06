import React from "react";

const NavigationProvider = React.createContext({
  sidebarShow: true,
  setSidebarShow: (value) => {},
})

export default NavigationProvider;

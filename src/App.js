import React from 'react';
import * as s from './App.styles';
import * as Palette from './colors'

// Components
import Sidebar from './components/Sidebar/Sidebar';
import MainView from './components/MainView/MainView'


const App = () => {
  const backgroundImage = 'images/mountain.jpg';
  const sidebarHeader = {
    fullName: 'E-BANKING',
    shortName: 'EB'
  };
  const menuItems = [
    {name: 'Home', to: '/', icon: '/icons/home.svg', subMenuItems: [] },
    {name: 'account', to: '/about', icon: '/icons/about.svg', subMenuItems: [] },
    {name: 'service', to: '/Service', icon: '/icons/destinations.svg', 
      subMenuItems: [
        { name: 'service1', to: '/service1'},        
        { name: 'Brazil', to: '/brazil'},
        { name: 'India', to: '/india'}
      ] },
    {name: 'Blog', to: '/blog', icon: '/icons/blog.svg', subMenuItems: [] },
    {name: 'Services', to: '/services', icon: '/icons/services.svg', subMenuItems: [] },
    {name: 'Contacts', to: '/contacts', icon: '/icons/contacts.svg', subMenuItems: [] }
  ];

  const fonts = {
    header: 'Poppins',
    menu: 'Poppins'
  }

  return (
    <s.App>
      <Sidebar
        backgroundImage={backgroundImage}
        sidebarHeader={sidebarHeader}
        menuItems={menuItems}
        fonts={fonts}
        colorPalette={Palette.brown}
      />
      <MainView  />
    </s.App>
  );
}

export default App;

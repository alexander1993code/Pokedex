import React from 'react';
import MainHeader from '../Component/MainHeader';

function Layout(props){

    return (
        <>
            <MainHeader/>
           {props.children}
        </>
    )
  }
  export default Layout;
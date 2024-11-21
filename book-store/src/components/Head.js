import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar } from "@mui/material";
//import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { NavLink } from "react-router-dom";
import image from './imagelogo.jpeg'
const Head = () => {
  const [value,setValue] = useState()
  return (
    <div>
        <AppBar position="sticky" sx={{backgroundColor:'#232F3D'}}>
          <Toolbar>
          <img src={image} alt="imag" height={70} width={140}/>
          
          <Tabs 
              sx={{ml:'auto'}}
              textColor='inherit'
              indicatorColor="primary"
              value={value}
              onChange={(e,val) =>setValue(val)}
            >
              <Tab LinkComponent={NavLink} to="/add" label='Add Product'/>
              <Tab LinkComponent={NavLink} to="/books" label='Books'/>
              <Tab LinkComponent={NavLink} to="/about" label='About us'/>
          </Tabs>
          </Toolbar>
          
          
        </AppBar>
    </div>
  );
};
export default Head;
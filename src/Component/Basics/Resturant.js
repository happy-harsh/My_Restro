import React, { useState } from "react";
import "./style.css";
import Menu from "./MenuApi";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";
const Resturant = () => {
  const [MenuData, setMenuData] = useState(Menu);
  const uniqueList = [...new Set(Menu.map((e)=>{
    return e.category
  })),"All"]
  // console.log(uniqueList)
  const [menuList, setMenuList] = useState(uniqueList)
  
  const filterMenu=(category)=>{
    
      if(category==="All"){
        setMenuData(Menu);
        return;
      }
    const updatedList=Menu.filter((currElem)=>{
      return currElem.category===category;
    })
  
  setMenuData(updatedList);
  }


  return (
    <>
    <Navbar filterMenu={filterMenu} menuList={menuList}/>
      <MenuCard menuData={MenuData} />
    </>
  );
};

export default Resturant;

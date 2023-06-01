import React from 'react'
import Resturant from './Component/Basics/Resturant'
// import Test from './Test'
import Head from './Component/Basics/Head'
const App = () => {
  // const arr=[{id:1,name:"harsh",age:21},{id:2,name:"rajeev",age:22},{id:3,name:"kinjal",age:23}];
  return (
    <div>
      {/* <Test arr={arr}/> */}
      <Head/>
      <Resturant/>
    </div>
  )
}

export default App

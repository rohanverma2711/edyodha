import React from 'react'
import '../style.css'
import { Resources } from '../Resources'

function Navbar() {
  return (
    <>

    <div className='Navbar'>
    

    <div className='NavContent'>

   


      <div className='leftside'>

        <img src = {Resources.images.edyodha}></img>
        <div className='rightTabs' >

        <div className='Navtabs' >
          <p className='NavtabsText'>Course</p>
        <img  className='downarrow' height={7.5} width={12}  src = {Resources.images.downarrow}></img></div>


        <div className='Navtabs' ><p className='NavtabsText'>Programs</p>
        <img className='downarrow' height={7.5} width={12} src = {Resources.images.downarrow}></img></div>

        </div>

        

      </div>
      <div className='rightside'>
        <img style={{paddingTop:"15px"}} height={24} width={24} src ={Resources.images.search}></img>

        <div><p>Log In</p></div>
        <div className='JoinButton'>JOIN NOW</div>

      </div>

      </div>

    

    </div>
    
    </>
  )
}

export default Navbar
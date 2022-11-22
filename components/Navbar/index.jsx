import React from 'react'
import MainLogo from '../../stories/assets/Images/Logo Main Color.svg'
import Search from '../../stories/assets/Images/search-lg.svg'
import Globe from '../../stories/assets/Images/Icon (2).svg'
import { useRef } from 'react'
import Dropdown from '../../stories/assets/Images/Icon (3).svg'

const Navbar = () => {
  const btnRef = useRef()
  const ulRef = useRef()

function handleClick(){
  console.log('hello')
  if(ulRef.current.style.display === 'block'){
    ulRef.current.style.display = 'none'
 
    console.log('First')
  }else{
    ulRef.current.style.display = 'block'
    console.log('Second')
  }
}


  
  return (
    <div>
    <nav className='sticky top-0 left-0 bg-white w-full shadow'>
    <div className='container m-auto flex justify-around items-center text-gray-700'>
    <h1 className='pt-8 py-4 text-xl font-bold'><img className='w-16 align-middle mb-6 mr-36' src={MainLogo} alt="" /></h1>
    <ul className='hidden object-content-none md:flex items-center pr-10 text-base font-semibold cursor-pointer'>
      <li className='py- px-3'>Products</li>
      <li className='py-2 px-3'>Pricing</li>
      <li className='py-2 px-3'>Why AccountPal</li>
      <li className='py-2 px-3'>Resources</li>
      <li className='py-2 px-3'>Company</li>
      

    </ul>
    <ul className='hidden  md:flex md:justify-between  md:w-48'>
      <img src={Search} alt="" />
      <img src={Globe} alt="" />
    <button className='bg-blue-700 text-white p-2 rounded-lg' >
        Try it for free
      </button>
    </ul>
     <button  ref={btnRef} onClick={()=>{
      handleClick()
     }}  className=' md:hidden py-3 px-4 mx-2 rounded focus:outline-none'>
     <div className='w-5 h-1 bg-gray-600 mb-1'></div>
     <div className='w-5 h-1 bg-gray-600 mb-1'></div>
     <div className='w-5 h-1 bg-gray-600 mb-1'></div>
      <div className=' relative right-52 top-12'>

      </div>
     </button>
     <ul ref={ulRef} className= ' hidden text-white  bg-blue-500 shadow-inherit absolute left-8 top-24 w-64 h-96 shadow-black p-2 text-left md:hidden '>
  <li className='py-4 px-6 w-full '>Products</li>
  <li className='py-4 px-6 w-full'>Pricing</li>
  <li className='py-4 px-6 w-full'>Why AccountPal</li>
  <li className='py-4 px-6 w-full'>Resources</li>
     <input  className='rounded ml-6 w-36 mt-2' type="text" />
    <div className='p-4'>
    <img className='absolute  bottom-22 right-48 ' src={Globe} alt="" />
     <img className='absolute left-20 bottom-24 ' src={Dropdown} alt="" />
    </div>
    
</ul>
    </div>
    </nav>
    </div>
  )
}

export default Navbar
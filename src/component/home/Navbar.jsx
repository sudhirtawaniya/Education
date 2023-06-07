import { Button, TextField, Typography } from "@mui/material";
import '../../asset/style/style.css'
import logo from '../../asset/Home/logo.jpg'
import { useNavigate } from "react-router-dom";
import data from '../../asset/data'
import { useState } from "react";
export default function NavBar() {
  const nav=useNavigate()
  const [handShow,sethandshow]=useState(false)
    return <>
    
     <div className="hidden home_nav_top_up  md:flex">
            <div >
            <img src={logo} width={60} alt="" />
            <p className="border-t-2 mt-1">Operationacademiassist@gmail.com</p>
            </div>
            <div style={{display:'',justifyContent:'space-around'
            }}>
              <input type="text" placeholder="Type Your Search" className="bg-transparent outline-none  border-b-2  " />
            
              {" "}
              <p className="inline border-l-2 px-2 text-[15px]">
                Login
              </p>
              <p className="inline border-l-2 px-2 text-[15px]">
                Register
              </p>
            
            </div>
          </div>
        <ul className="home_nav_top hidden md:flex w-[50%] mr-[10%]">
            <li>
              {" "}
             <p className="text-[13px]" onClick={()=>nav("/")}>
                Home
              </p>{" "}
            </li>
            <li>
              {" "}
             <p className="text-[13px]" onClick={()=>nav("/Assignment")}>
                Assignment
              </p>{" "}
            </li>
            <li>
              {" "}
             <p className="text-[13px]" onClick={()=>nav("/Solution")}>
                Solutions
              </p>{" "}
            </li>
            <li className="relative parent flex">

<span className="text-[13px]">Cources</span>
<svg
  xmlns="http://www.w3.org/2000/svg"
  className="w-4 h-4 fill-current pt-1"
  viewBox="0 0 24 24"
>
  <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
</svg>

<ul className="child transition z-[99] duration-700 md:absolute top-full left-[-50%] md:w-48 bg-white md:shadow-lg md:rounded-b text-black font-[15px] ">
{data.map((data,val)=>{
  return <><li className="hover:bg-slate-300 px-2 py-[2px] text-[10px] font-[400]" onClick={()=>{nav("/cource/"+data.name)}}>
  {data.name}

</li></>
})}


</ul>
</li>
            <li>
              {" "}
             <p className="text-[13px]" onClick={()=>nav("/contactus")}>
                Contact Us
              </p>{" "}
            </li>
            
       

          </ul>

          <button
      className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
      type="button"
      onClick={()=>{sethandshow(!handShow)
      console.log(handShow);
      }}
      
      >

      <span className="[&>svg]:w-7">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-7 w-7">
          <path
            fill-rule="evenodd"
            d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
            clip-rule="evenodd" />
        </svg>
      </span>
    </button>

   {handShow&& <div
      className=" flex-grow z-40 absolute basis-[100%] items-center lg:!flex lg:basis-auto bg-white w-[50%] p-4"
      
      data-te-collapse-item>
    
      
   
      <ul
        className="list-style-none mr-auto z-99 translate-x-1 bg-white w-fit  flex-col pl-0 lg:flex-row"
        data-te-navbar-nav-ref>
        <li>
              {" "}
             <p className="text-[13px] my-4" onClick={()=>nav("/")}>
                Home
              </p>{" "}
            </li>
            <li>
              {" "}
             <p className="text-[13px] my-4" onClick={()=>nav("/Assignment")}>
                Assignment
              </p>{" "}
            </li>
            <li>
              {" "}
             <p className="text-[13px] my-4" onClick={()=>nav("/Solution")}>
                Solutions
              </p>{" "}
            </li>
           

            <li className="relative parent flex">

<span className="text-[13px]">Cources</span>
<svg
  xmlns="http://www.w3.org/2000/svg"
  className="w-4 h-4 fill-current pt-1"
  viewBox="0 0 24 24"
>
  <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
</svg>

<ul className="child transition z-[99] duration-700 absolute top-full left-[-30%] w-48 bg-white shadow-lg md:rounded-b text-black font-[15px] ">
{data.map((data,val)=>{
  return <><li className="hover:bg-slate-300 px-2 py-[2px] text-[10px] font-[400]" onClick={()=>{nav("/cource/"+data.name);}}>
  {data.name}

</li></>
})}


</ul>
</li>
      
      </ul>
    </div>}

    </>
}
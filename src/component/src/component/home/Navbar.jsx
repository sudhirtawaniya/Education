import { Button, TextField, Typography } from "@mui/material";
import '../../asset/style/style.css'
import logo from '../../asset/Home/logo.png'
import { useNavigate } from "react-router-dom";
export default function NavBar() {
  const nav=useNavigate()
    return <>
    
     <div className="hidden home_nav_top_up  md:flex">
            <div >
            <img src={logo} alt="" />
            <p className="border-t-2 mt-1">support@locusassignments.com</p>
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

<ul className="child transition duration-700 md:absolute top-full left-[-50%] md:w-48 bg-white md:shadow-lg md:rounded-b text-black font-[15px] ">
<li className="hover:bg-slate-300 p-2 text-[13px] font-[400] " onClick={()=>nav("/cource/webDevelopment")}>
  
    Web development
 
</li>
<li className="hover:bg-slate-300 p-2 text-[13px] font-[400]">
          Web Design
 
</li>
<li className="hover:bg-slate-300 p-2 text-[13px] font-[400]">
          Machine Learning
 
</li>
</ul>
</li>
            <li>
              {" "}
             <p className="text-[13px]" onClick={()=>nav("/contactus")}>
                Contact Us
              </p>{" "}
            </li>
            <li>
              {" "}
             <p className="text-[13px]" onClick={()=>nav("/")}>
                Upload Assignment
              </p>{" "}
            </li>
       

          </ul>
    </>
}
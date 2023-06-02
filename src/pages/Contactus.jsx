import {LuMail} from 'react-icons/lu/'
import {HiOutlineLocationMarker} from 'react-icons/hi/'
import NavBar from "../component/home/Navbar";
import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';
export default function ContactUs() {
    const navigate=useNavigate();
  return (
    <>
 
      <div className="hero h-[450px]">
        <div className="mask">
          <NavBar />
          <div className="relative bottom-0 top-[30%] mx-[10%]">
            <h2 className=" text-[#fff] text-[30px] font-[500]">Contact</h2>
            <div className="flex"><p className="text-[13px] font-[400] text-[#fff]"> <span onClick={()=>navigate("/")} className='cursor-pointer'>Home</span>  ⇾ Contact</p></div>
          </div>
        </div>
      </div>
      <div className=" mx-[10%]">
        <p className="text-[12px] font-[600]">
          Need help regarding your assignments? We’ll provide support you need.
          Locus Assignments is committed to delivering quality customer service.
          If you have any query or question regarding your assignments, just
          send your questions or concerns by fill out the inquiry form below
          with some information about your project. We are here to answer any
          questions you may have, reach out to us, we ensure we’ll do our best
          to solve it and send you there. Our experts are available 24/7 to
          provide support to you. We provide instant solution of your queries.
        </p>
        <h2 className=" text-[#00a6ae] my-2 mt-[4%] text-[20px] font-[600] w-full">Send Enquiry</h2>  
        <div className="flex mb-8">
        
        <div className="form flex justify-around w-full flex-wrap">
            <div className="input">
            <p className="my-4 text-[15px] text-[#666] font-[600]">Name</p>
            <input type="text" placeholder="Enter Your Name *" className=" p-2 bg-transparent outline-none  border-b-2 border-[#b7b7b7] " />
            
            </div>
            <div className="input">
            <p className="my-4 text-[15px] text-[#666] font-[600]">Email</p>
            <input type="text" placeholder="Enter Your Email *" className=" p-2 bg-transparent outline-none  border-b-2 border-[#b7b7b7] " />
            
            </div>
            <div className="input">
            <p className="my-4 text-[15px] text-[#666] font-[600]">Contact Number</p>
            <input type="text" placeholder="Enter Contact Number *" className=" p-2 bg-transparent outline-none  border-b-2 border-[#b7b7b7] " />
            
            </div>
            <div className="input w-full ml-6">
            <p className="my-4 text-[15px] text-[#666] font-[600]">Message</p>
            <textarea rows={5} placeholder="Type Message *" className=" p-2 bg-transparent outline-none w-full border-b-2 border-[#b7b7b7] " />
            
            </div>
            <Button
              sx={{
                bgcolor: "#00a6ae",
                marginTop: "20px",
                borderRadius: "20px",
                borderColor: "white",
                border: "white",
                borderWidth: "2px",
              }}
              variant="contained"
            >
              Submit
            </Button>
        </div>
        <div className="message w-[40%]">
        <div className="box w-full mx-5">
            <div className="email bg-black  p-7  flex items-center justify-between">
                <div className='w-[30px] '>
            <LuMail size={"30px"} className='text-[#fff] '/>
            </div>
                <div>
                  <h1 className="text-[15px] text-[#fff] font-[600] flex items-center">OUR CONTACT E-MAIL</h1>
                    <p className="text-[12px] mt-2 text-[#fff] font-[600]">support@locusassignments.com</p>
                </div>
            </div>
        </div>
        <div className="box w-full mt-5 mx-5">
            <div className="email bg-black  p-7  flex items-center justify-between">
                <div className='w-[30px] '>
            <HiOutlineLocationMarker size={"30px"} className='text-[#fff] '/>
            </div>
                <div>
                  <h1 className="text-[15px] text-[#fff] font-[600] flex items-center">OUR CONTACT E-MAIL</h1>
                    <p className="text-[12px] mt-2 text-[#fff] font-[600]">support@locusassignments.com</p>
                </div>
            </div>
        </div>
        </div>
        </div>
      </div>
    </>
  );
}

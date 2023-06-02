
import group from '../asset/Home/group.png'
import books from '../asset/Home/books.png'
import device from '../asset/Home/mobile-phone-and-computer-screen.png'
import Card from "../component/services/card";
import LatestAssignments from "../component/services/LatestAssignments";
import LatestSubject from "../component/services/LatestSubject";
import NavBar from "../component/home/Navbar";
export default function Assignment() {
    return <>
        <div className="hero h-[900px]">
        <div className="mask">
         <NavBar/>
          <div className="hero_text md:mt-[10%]">
         <div className='min-w-full md:mt-0 mt-[50%]'>
            <p  className="text-[24px]">
            Choose From A Range Of Courses
            </p>
            <div className="w-full text-center flex justify-center">
           <input type="text" placeholder="What are the cources You Would like to search" className="bg-transparent outline-none px-4 py-2  border-b-2 w-[60%] my-3" />
           <span
      class="input-group-text relative right-8 flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
      id="basic-addon2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
          clip-rule="evenodd" />
      </svg>
      </span>
           </div>
           
           <div className="flex justify-center md:w-[70%]  bg-slate-600 my-[5%]">
            <div className="flex justify-around w-full">
              <div className="flex items-center flex-col">

            <img src={group} alt="" className="w-[60px]" />
            <p className="text-center">More than 328 Instructors <br /> are Available</p>
            </div>
            <div className="flex items-center flex-col">

            <img src={books} alt="" className="w-[60px]" />
            <p className="text-center">More than 3020 Online <br /> Courses Available</p>
            </div>
            <div className="flex items-center flex-col">

            <img src={device} width={100} alt="" className="w-[60px]" />
            <p className="text-center">Learn Skills on any <br /> Devices anytime</p>
            </div>
            </div>
           </div>
           </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center md:translate-y-[-30%] translate-y-[-10%]">
        <div className="md:w-[60%] flex flex-col items-center mx-4">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      </div>
      <div>
      <LatestAssignments/>
      <LatestSubject/>
      </div>
      </div>
    </>
}
import {MdThumbDownOffAlt} from 'react-icons/md/'
import {BsPeople} from 'react-icons/bs/'
import {AiOutlineStar,AiOutlineMessage,AiOutlineWallet,AiOutlineClockCircle}from 'react-icons/ai'
import NavBar from "../component/home/Navbar";
import { Button, TextField, Typography, Card } from "@mui/material";
import { useParams } from "react-router-dom";
import AboutCource from "../component/Cources/AboutCource";
import LatestSubject from '../component/services/LatestSubject';
import LatestAssignments from '../component/services/LatestAssignments';
export default function Cources() {
  const { name } = useParams();
  return (
    <>
      <div className="hero h-[600px]">
        <div className="mask">
          <NavBar />
          <div className="hero_text">
            <Typography variant="h3" component="h6">
              Hire best tutors and researchers
            </Typography>
            <Typography variant="p" component="h4">
              Request a call back and our managers will be in touch within 6
              hours to understand the requirements.
            </Typography>
            <Button
              sx={{
                bgcolor: "transparent",
                marginTop: "20px",
                borderRadius: "20px",
                borderColor: "white",
                border: "white",
                borderWidth: "2px",
              }}
              variant="contained"
            >
              Call Back
            </Button>
          </div>
        </div>
      </div>
      <div
        className="center"
        style={{
          display: "flex",
          justifyContent: "center",
          transform: "translateY(-60%)",
        }}
      >
        <Card
          variant="outlined"
          className="form_card"
          sx={{
            width: "300px",
            backgroundColor: "white",
            display: "flex",
            padding: "5px",
            justifyContent: "center",
          }}
        >
          <form
            action=""
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
            className="py-5"
          >
            <Typography
              variant="h6"
              component="h6"
              sx={{ textAlign: "center", my: 2 }}
            >
              Quick Upload
            </Typography>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="bg-transparent my-2 py-2 outline-none  border-b-2 border-[#b7b7b7]  "
            />

            <input
              type="text"
              placeholder="Enter Your Email"
              className="bg-transparent my-2 py-2 outline-none  border-b-2 border-[#b7b7b7]  "
            />

            <input
              type="text"
              placeholder="Enter Your Subject"
              className="bg-transparent my-2 py-2 outline-none  border-b-2 border-[#b7b7b7]  "
            />
            <Button
              sx={{
                bgcolor: "blue",
                marginTop: "20px",
                borderRadius: "20px",
                borderColor: "white",
                border: "white",
                borderWidth: "2px",
              }}
              variant="contained"
            >
              Upload Now
            </Button>
          </form>
        </Card>
      </div>
      <div className="px-[10%]">
        <h1 className="text-[45px] text-[#00a6ae] font-[500] text-center">
          Best Assignment Help Service in {name}
        </h1>
        <div className="flex shadow-2xl flex-wrap justify-around p-[2%]">
          <AboutCource
          icon={<BsPeople size={50} color='#00a6ae'/>}
          heading="FULL TIME EXPERTS"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et maxime accusantium earum corrupti, ea debitis ab deleniti doloribus necessitatibus. Sequi consequatur perferendis maiores in voluptatum, nihil aperiam fugit amet architecto quod soluta suscipit totam!"
          
          />
           <AboutCource
            icon={<AiOutlineStar size={50} color='#00a6ae'/>}
          heading="FULL TIME EXPERTS"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et maxime accusantium earum corrupti, ea debitis ab deleniti doloribus necessitatibus. Sequi consequatur perferendis maiores in voluptatum, nihil aperiam fugit amet architecto quod soluta suscipit totam!"
          
          />
           <AboutCource
            icon={<AiOutlineMessage size={50} color='#00a6ae'/>}
          heading="FULL TIME EXPERTS"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et maxime accusantium earum corrupti, ea debitis ab deleniti doloribus necessitatibus. Sequi consequatur perferendis maiores in voluptatum, nihil aperiam fugit amet architecto quod soluta suscipit totam!"
          
          />
           <AboutCource
            icon={<MdThumbDownOffAlt size={50} color='#00a6ae'/>}
          heading="FULL TIME EXPERTS"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et maxime accusantium earum corrupti, ea debitis ab deleniti doloribus necessitatibus. Sequi consequatur perferendis maiores in voluptatum, nihil aperiam fugit amet architecto quod soluta suscipit totam!"
          
          />
           <AboutCource
            icon={<AiOutlineWallet size={50} color='#00a6ae'/>}
          heading="FULL TIME EXPERTS"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et maxime accusantium earum corrupti, ea debitis ab deleniti doloribus necessitatibus. Sequi consequatur perferendis maiores in voluptatum, nihil aperiam fugit amet architecto quod soluta suscipit totam!"
          
          />
            <AboutCource
            icon={<AiOutlineClockCircle size={50} color='#00a6ae' style={{strokeWidth:"1px"}}/>}
          heading="FULL TIME EXPERTS"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et maxime accusantium earum corrupti, ea debitis ab deleniti doloribus necessitatibus. Sequi consequatur perferendis maiores in voluptatum, nihil aperiam fugit amet architecto quod soluta suscipit totam!"
          
          />
        </div>
      </div>
      {/* <div className="flex justify-center translate-y-[-30%]">
        <div className="w-[60%] flex flex-col items-center mx-4">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      </div>
      <div>
      <LatestAssignments/>
      <LatestSubject/>
      </div>
      </div> */}
      <div className="flex justify-around px-[10%]">
      <LatestAssignments name="Latest Subject"/>
        <LatestAssignments/>
        <LatestAssignments name="Latest Solutions"/>
        
      </div>
    </>
  );
}

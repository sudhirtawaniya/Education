
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  TextField,
  Typography,
} from "@mui/material";
import img from "../asset/Home/trust01.png";
import HomeCard from "../component/home/HomeCard";
import logo from '../asset/Home/logo.png'
import Footer from "../component/Footer";
import NavBar from "../component/home/Navbar";
export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="hero h-[600px]">
        <div className="mask">
         <NavBar/>
          <div className="hero_text px-2 py-4">
         
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
        className="center flex justify-center md:translate-y-[-60%] flex-wrap"
       
      >
        <Card
          variant="outlined"
          className="form_card"
          sx={{
            minWidth: "300px",
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
      <div
        className="center"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h3"
          component="h6"
          sx={{ textAlign: "center", color: "#00a6ae" }}
        >
          Welcome to Academi Assist
        </Typography>
        <Typography
          variant="h6"
          component="h6"
          sx={{ textAlign: "center", color: "gray" }}
        >
          Unlock Achievement,Ace Assignments
        </Typography>

        <Card
          variant="outlined"
          sx={{
            width: "80%",
            display: "flex",
            justifyContent: "space-around",
            py: 4,
          }}
          className="flex-wrap"
        >
           <HomeCard
            sx={{ width: "30%",minWidth:'300px', textAlign: "center" }}
            title={"Quality Assurance"}
            img={img}
            content={
              <>
                <p className="text-justify">
                At ACADEMI ASSIST, we have a robust quality assurance process in place. We review and edit the assignments to ensure we meet high standards of academic writing, grammar, and clarity. We offer revisions or have a customer satisfaction guarantee to address any issues with the delivered work.</p>
              </>
            }
          />
         <HomeCard
            sx={{ width: "30%",minWidth:'300px', textAlign: "center" }}
            title={"Confidentiality and Privacy"}
            img={img}
            content={
              <>
                <p className="text-justify">
                Your privacy and confidentiality will be a top priority for us. We have strict policies in place to protect your personal information and ensure that your identity remains confidential. We have secure systems for handling payments and data.</p>
              </>
            }
          />
         <HomeCard
            sx={{ width: "30%",minWidth:'300px', textAlign: "center" }}
            title={"Customer Support"}
            img={img}
            content={
              <>
                <p className="text-justify">
                ACADEMI ASSIST have a responsive and helpful customer support team. We are available to address your queries or concerns promptly, whether through email, live chat, or phone. We are to give you 24/7 customer support for a seamless communication experience.</p>
              </>
            }
          />
        </Card>
        <div
          style={{
            width: "80%",
            display: "flex",
            justifyContent: "space-between",
            border: "none",
            marginTop: "40px",
          }}
        >
         <HomeCard
            sx={{ width: "30%",minWidth:'300px', textAlign: "center" }}
            title={"Timely Delivery"}
            img={img}
            content={
              <>
                <p className="text-justify">
                Meeting deadlines is crucial when it comes to ACADEMIC ASSIST. We have a track record of delivering assignments on time or even before the deadline. We will be responsive to your inquiries and provide regular updates on the progress of your assignment.</p>
              </>
            }
          />
         <HomeCard
            sx={{ width: "30%",minWidth:'300px', textAlign: "center" }}
            title={"Expertise and Qualifications"}
            img={img}
            content={
              <>
                <p className="text-justify">
                ACADEMI ASSIST have a team of skilled and knowledgeable writers with expertise in various academic disciplines. We possess the necessary qualifications, such as advanced degrees or relevant certifications, to ensure that we can handle your assignments effectively.</p>
              </>
            }
          />
         <HomeCard
            sx={{ width: "30%",minWidth:'300px', textAlign: "center" }}
            title={"Plagiarism Free Work"}
            img={img}
            content={
              <>
                <p className="text-justify">
                We use trusted plagiarism detection software, Turnitin.com, to triple-check our completed papers for any instances of plagiarism after writing, editing, and proofreading. Plagiarism is strictly prohibited by our policies. We only offer papers that are completely original and customised.</p>
              </>
            }
          />
        </div>
      </div>
      <div className="home_selector">
        <div className="mask">
          {/* <ul className="home_nav">
            <li>
              {" "}
              <Typography variant="h6" component={"h6"}>
                text
              </Typography>{" "}
            </li>
            <li>
              {" "}
              <Typography variant="h6" component={"h6"}>
                text
              </Typography>{" "}
            </li>
            <li>
              {" "}
              <Typography variant="h6" component={"h6"}>
                text
              </Typography>{" "}
            </li>
            <li>
              {" "}
              <Typography variant="h6" component={"h6"}>
                text
              </Typography>{" "}
            </li>
          </ul> */}
          <p className="w-[100%] relative top-[40%] p-4 text-white">
            <h1 style={{ marginBottom: "12px" }} className="font-[600] text-[20px]">Why ACADEMI ASSIST</h1>
          <p className="font-[500] text-[18px]">
              {" "}
              The company's writers possess extensive knowledge in their respective fields, enabling them to produce assignments that showcase a deep understanding of the subject matter. Additionally, they are proficient in various academic writing styles and can adhere to specific formatting guidelines requested by educational institutions.
ACADEMI ASSIST operates with a strict commitment to originality and academic integrity. All assignments undergo a rigorous plagiarism-checking process to ensure they are free from any form of plagiarism. Students can trust that the papers they receive are unique, authentic, and have been crafted exclusively for their academic needs.
Furthermore, ACADEMI ASSIST values confidentiality and respects the privacy of its clients. The personal information shared during the assignment ordering process is treated with the utmost discretion and is protected by robust security measures.

            </p>
          </p>
        </div>
      </div>
      <div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems:'center',
            border: "none",
            marginTop: "40px",
          }}
        >
          <Card className="md:w-[30%] w-[80%] text-center md:mr-[5%]">
            <div
              className="mask2"
              style={{
                color: "#00a6ae",
                backgroundImage:
                  "linear-gradient(45deg, #008dff17, transparent)",
              }}
            >
              <CardHeader title={"Contact"} />
              <CardContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </CardContent>
              <CardContent>
                <Typography variant="h6" component={"h6"}>
                Operationacademiassist@gmail.com
                </Typography>
              </CardContent>
              <CardContent></CardContent>
            </div>
          </Card>
          <div className="request">
            <Card sx={{ textAlign: "center", p: 6 }} >
              <h4 className="text-[#00a6ae] text-[30px] font-[600] mb-4">
                Request For Call Back
              </h4>
              <TextField id="filled-basic" label="Enter Your Email" variant="filled" />&nbsp;
             <div className="md:hidden mt-[5%]"></div>
              <TextField type={"number"} id="filled-basic" className="ml-[20px]" label="Contact Number"  variant="filled" />
              <br />
              <br />
              <TextField
                id="filled-multiline-flexible"
                label="Message"
                multiline
                maxRows={8}
                minRows={8}
                sx={{ width: "100%" }}
              />
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
            </Card>
          </div>
        </div>
      </div>

    </>
  );
}

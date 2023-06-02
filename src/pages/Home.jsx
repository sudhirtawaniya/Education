
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
        className="center flex justify-center translate-y-[-60%] flex-wrap"
       
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
          Welcome to Locus Assignments
        </Typography>
        <Typography
          variant="h6"
          component="h6"
          sx={{ textAlign: "center", color: "gray" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, nulla.
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
            title={"title"}
            img={img}
            content={
              <>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                  nisi similique inventore.
                </p>
                <p>You can add more content here.</p>
              </>
            }
          />
          <HomeCard
            sx={{ width: "30%",minWidth:'300px', textAlign: "center" }}
            title={"title"}
            img={img}
            content={
              <>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                  nisi similique inventore.
                </p>
                <p>You can add more content here.</p>
              </>
            }
          />
          <HomeCard
            sx={{ width: "30%",minWidth:'300px', textAlign: "center" }}
            title={"title"}
            img={img}
            content={
              <>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                  nisi similique inventore.
                </p>
                <p>You can add more content here.</p>
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
            title={"title"}
            img={img}
            content={
              <>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                  nisi similique inventore.
                </p>
                <p>You can add more content here.</p>
              </>
            }
          />
         <HomeCard
            sx={{ width: "30%",minWidth:'300px', textAlign: "center" }}
            title={"title"}
            img={img}
            content={
              <>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                  nisi similique inventore.
                </p>
                <p>You can add more content here.</p>
              </>
            }
          />
         <HomeCard
            sx={{ width: "30%",minWidth:'300px', textAlign: "center" }}
            title={"title"}
            img={img}
            content={
              <>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                  nisi similique inventore.
                </p>
                <p>You can add more content here.</p>
              </>
            }
          />
        </div>
      </div>
      <div className="home_selector">
        <div className="mask">
          <ul className="home_nav">
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
          </ul>
          <p className="home_para">
            <h1 style={{ marginBottom: "12px" }}>Heading</h1>
            <Typography variant="h6" component={"h6"}>
              {" "}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
              accusantium voluptas porro id quia exercitationem soluta quam in
              dignissimos magnam! Totam, perspiciatis quam!
            </Typography>
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
                  sudhirtawaniya30@gmail.com Address over There
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

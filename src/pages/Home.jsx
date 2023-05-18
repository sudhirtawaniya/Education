import Navbar from "../component/Navbar";
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
import Footer from "../component/Footer";
export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="hero">
        <div className="mask">
        <ul className="home_nav_top">
            <li>
              {" "}
              <Typography variant="p" component={"p"}>
                Home
              </Typography>{" "}
            </li>
            <li>
              {" "}
              <Typography variant="p" component={"p"}>
                Assignment
              </Typography>{" "}
            </li>
            <li>
              {" "}
              <Typography variant="p" component={"p"}>
                Solutions
              </Typography>{" "}
            </li>
           
          </ul>
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
          transform: "translateY(-70%)",
        }}
      >
        <Card
          variant="outlined"
          className="form_card"
          sx={{
            width: "300px",
            backgroundColor: "white",
            display: "flex",
            padding: 2,
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
          >
            <Typography
              variant="h6"
              component="h6"
              sx={{ textAlign: "center", my: 2 }}
            >
              Quick Upload
            </Typography>
            <TextField id="filled-basic" label="Filled" variant="filled" />
            <br />
            <br />
            <TextField id="filled-basic" label="Filled" variant="filled" />
            <br />
            <br />
            <TextField id="filled-basic" label="Filled" variant="filled" />
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
        >
          <HomeCard
            sx={{ width: "30%", textAlign: "center", marginTop: "12px" }}
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
            sx={{ width: "30%", textAlign: "center", marginTop: "12px" }}
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
            sx={{ width: "30%", textAlign: "center", marginTop: "12px" }}
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
            sx={{ width: "30%", textAlign: "center", marginTop: "12px" }}
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
            sx={{ width: "30%", textAlign: "center", marginTop: "12px" }}
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
            sx={{ width: "30%", textAlign: "center", marginTop: "12px" }}
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
          <Card sx={{ width: "30%", textAlign: "center", marginTop: "12px" }}>
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
            <Card sx={{ textAlign: "center", marginTop: "12px", p: 6 }}>
              <Typography variant="h4" component={"h4"} sx={{ mb: 4 }}>
                Request For Call Back
              </Typography>
              <TextField id="filled-basic" label="Filled" variant="filled" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <TextField id="filled-basic" label="Filled" variant="filled" />
              <br />
              <br />
              <TextField
                id="filled-multiline-flexible"
                label="Multiline"
                multiline
                maxRows={8}
                minRows={8}
                sx={{ width: "100%" }}
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
              Submit
            </Button>
            </Card>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

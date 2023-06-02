import { Card, CardContent, CardHeader } from "@mui/material";

export default function HomeCard(props) 
{
    return <>
     <Card sx={props.sx} className="mt-[50px]">
      <div className="flex justify-center w-full ">
      <img src={props.img} alt="" style={{borderRadius:"50%",width:'150px',height:"150px"}} />
      </div>
      <CardHeader title={props.title} />
      <CardContent>
       {props.content}
      </CardContent>
      
    </Card>
    </>
}
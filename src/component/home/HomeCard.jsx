import { Card, CardContent, CardHeader } from "@mui/material";

export default function HomeCard(props) 
{
    return <>
     <Card sx={props.sx}>
      <img src={props.img} alt="" style={{borderRadius:"50%",width:'150px',height:"150px"}} />
      <CardHeader title={props.title} />
      <CardContent>
       {props.content}
      </CardContent>
      
    </Card>
    </>
}
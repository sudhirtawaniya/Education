export default function AboutCource(props) {
return <>
<div className="flex  w-[30%] min-w-[200px] m-4">
    <div className="mr-2">{props.icon}</div>
    <div className="content">
        <h1 className="text-[16px] font-[600]">{props.heading}</h1>
        <p className="text-[13px]  text-gray-500">{props.content}</p></div>
</div>
</>
}
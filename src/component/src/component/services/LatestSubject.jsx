// import img from '../../asset/images/l01.png'
export default function LatestSubject() {
    return <>
    <div className="border-[1px] my-6 bg-white max-w-[300px] border-[#a4dbf4] h-fit rounded-lg shadow-xl">
<h1 className="font-[700] py-2 px-2 text-[15px] border-b-[1px] border-[#a5dce9]">Latest Subjects</h1>
   <div>
    {[...Array(4)].map((data,i)=>{
        return <>
        <div key={i} className="flex w-full max-w-[400px] p-2 border-b-2 border-dashed">
      
        <div className='pl-3'>
            <h3 className='font-[600] text-[15px] text-[#1d1c1c]'> Lorem, ipsum dolor sit amet consectetur </h3>
            <p className='font-[500] text-[13px] text-[#1F1F1FAB]'>9 MAY 2023</p>
        </div>
    </div>
        </>
    })}
   </div>
    </div>
    </>
}
import { MdOutlinePostAdd } from "react-icons/md";
import { RiLoginCircleLine } from "react-icons/ri";
import { FaRegComment } from "react-icons/fa6";
import { GrOverview } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa";
import { SiHappycow } from "react-icons/si";




export default async function Home() {


  return (
    <main className="w-screen h-screen items-center justify-center overflow-hidden">
      <div className="h-1/6 bg-fuchsia-300 justify-center"> 
      <h1 className="justify-center gap-3 flex font-serif p-16 text-4xl text-white"> 
      Welcome to  <div className="font-mono font-bold "> Bubblii</div> !
     </h1>
      </div>
   
    
  
     <div className="  h-1/6  p-2 bg-fuchsia-200">
     <div className=" mt-2 text-fuchsia-400 "> 
     <h1 className=" font-thin my-auto text-4xl"> Login, <RiLoginCircleLine size={60}/> </h1>
     </div>
     </div>

     <div className="  h-1/6  p-2 bg-fuchsia-100">
     <div className=" mt-2 text-fuchsia-300 "> 
     <h1 className=" font-thin my-auto text-4xl"> Create posts, <MdOutlinePostAdd size={60}/> </h1>
     </div>
     </div>

     <div className="  h-1/6  p-2 bg-white">
     <div className=" mt-2 text-fuchsia-200 "> 
     <h1 className=" font-thin my-auto text-4xl"> View, Like, Comment,  <div className="grid  grid-cols-5 md:grid-cols-12"> <GrOverview size={60}/> <FaRegHeart size={60} />   <FaRegComment size={60}/> </div></h1>
     </div>
     </div>

     <div className="  p-2 h-1/6 bg-purple-100">
     <div className=" mt-2 text-white "> 
     <h1 className=" font-thin my-auto text-4xl"> and Enjoy. <SiHappycow size={60}/> </h1>
     </div>
     </div>

     <div className="  p-2 h-screen bg-purple-200">
     <div className=" mt-2 text-fuchsia-100 "> 
     </div>
     </div>
    </main>
  );
}

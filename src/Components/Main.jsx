
import Card from './Card'
import './Main.css'
import './SiderBar.css'
import { IoPerson } from "react-icons/io5";
import { FaUserTie } from "react-icons/fa";
import { FaStreetView } from "react-icons/fa6";
import { FaBook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";
import { BiSolidReport } from "react-icons/bi";
import { FaRegHospital } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
export default function Main(){
  return(
  <div className="main">
    <div className='top-bar'>
    <span className='title'>Student ManageMent</span> 
    </div>
    <div className='middle-bar'>
      <Card description={"Regular Studnets"} icon={ <IoPerson  />} initialVal={8} color="red" />
      <Card description={"Regular Studnets"} icon={ <FaUserTie />} initialVal={11}  color="purple"/>
      <Card description={"Regular Studnets"} icon={ <FaStreetView />} initialVal={9} color="green"/>
    </div>
    <div className='menu'>
     <MenuItem icon={<IoPersonSharp />} description={"Regular Enrolment"}/>
     <MenuItem icon={<FaBook />} description={"Regular Enrolment"}/>
     <MenuItem icon={<FaStreetView />} description={"Regular Enrolment"}/>
     <MenuItem icon={<FaBookReader />} description={"Regular Enrolment"}/>
     <MenuItem icon={<MdEmail />} description={"Regular Enrolment"}/>
     <MenuItem icon={<BiSolidReport />} description={"Regular Enrolment"}/>
     <MenuItem icon={<FaRegHospital />} description={"Regular Enrolment"}/>
    </div>
    <div></div>
  </div>)
}



function MenuItem({icon, description}){
 return(
  <div className="menu-bar-grp">
  <div className='menu-bar-item'>
{icon}
  </div>
  <div className='menu-bar-lable'>
{description}
  </div>
</div>
 )

}

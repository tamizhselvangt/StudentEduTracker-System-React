
import './SiderBar.css'
import { IoMdPeople } from "react-icons/io";
import { HiOutlineWallet } from "react-icons/hi2";
import { BiSolidOffer } from "react-icons/bi";
import { RiCollageFill } from "react-icons/ri";
import { BiSolidReport } from "react-icons/bi";
import logo from '../assets/Success-student-Logo-on-transparent-background-PNG.png'
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";
import { RiLogoutBoxRLine } from "react-icons/ri";

export default function SideBar() {
  return(

        <div className="sidebar">
        <div className="sidebar__logo">
            <img  src={logo} alt='imag' className='logo'/>
        </div>
        <div className="sidebar__menu">
           
          <div className="sider-bar-grp">
            <div className='side-bar-item'>
            <IoMdPeople />
            </div>
            <div className='side-bar-lable'>
           Student ManageMent
            </div>
          </div>


 <div className="sider-bar-grp">
            <div className='side-bar-item'>
            <HiOutlineWallet />
            </div>
            <div className='side-bar-lable'>
           financial ManageMent
            </div>
          </div>


          <div className="sider-bar-grp">
            <div className='side-bar-item'>
            <BiSolidOffer />
            </div>
            <div className='side-bar-lable'>
          Quality Control
            </div>
          </div>


          <div className="sider-bar-grp">
            <div className='side-bar-item'>
            <RiCollageFill />
            </div>
            <div className='side-bar-lable'>
           Report Delivery
            </div>
          </div>


          <div className="sider-bar-grp">
            <div className='side-bar-item'>
            <BiSolidReport />
            </div>
            <div className='side-bar-lable'>
         Attendence
            </div>
        </div>

        </div>
      
      <div className='bottom-side-bar'>
     <span> <BsFillQuestionCircleFill /></span>
     <span> <IoMdSettings /></span>
     <span><RiLogoutBoxRLine /></span>
 
      
      </div>
        </div>

  )
  }

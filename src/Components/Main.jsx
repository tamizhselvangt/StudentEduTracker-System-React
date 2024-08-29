
import Card from './Card'
import './Main.css'
import { IoPerson } from "react-icons/io5";
export default function Main(){
  return(
  <div className="main">
    <div className='top-bar'>
    <span className='title'>Student ManageMent</span> 
    </div>
    <div className='middle-bar'>
      <Card description={"Regular Studnets"} icon={ <IoPerson  />} initialVal={8} color="red" />
      <Card description={"Regular Studnets"} icon={ <IoPerson  />} initialVal={11}  colo="purple"/>
      <Card description={"Regular Studnets"} icon={ <IoPerson  />} initialVal={9} color="green"/>
    </div>
  </div>)
}



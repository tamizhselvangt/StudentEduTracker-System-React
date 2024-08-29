import './Card.css'


export default function Card({description, icon , initialVal , color}){
  return (
  <div className="card" style={{ 
    backgroundColor: color
  }}>
    <div className="card-top">
       <span className='icon'>{icon}</span>
      {initialVal}
    </div>
   <div className='card-bottom'>{description}</div>
  </div>)
}

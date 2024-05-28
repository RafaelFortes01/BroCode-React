import PedroPic from './assets/PEDRO.png'

function Card() {
   return(
      <div className="card">
         <img className="card-image" src={PedroPic} alt="Pedro image" height="150px"/>
         <h2 className="card-title">Pedro</h2>
         <p className="card-text">Pedro Pedro Pedro Pedro PE!</p>
      </div>
   )
}

export default Card
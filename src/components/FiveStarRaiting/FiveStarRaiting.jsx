import s from './style.module.css'
import {StarFill, Star as StarEmpty, StarHalf, Key} from 'react-bootstrap-icons'
export function FiveStarRaiting({rating}){
   // Declarer un tableau d'étoiles (jsx) vide
    const starList = [];
    // Stocker dans une variable le nombre pleine
     const starFillCount = Math.floor(rating)
     // Stocker dans une variable si oui ou non il y'a une demi droite
     const hasStartHalf = rating - starFillCount >= 0.5
     // Stocker ddans une variable le nombre d'étoile vide
      const emptyStartCount = 5 - starFillCount - (hasStartHalf ? 1:0)
      // Pusher dans le tableau les étoiles pleine
       for( let i = 1; i <= starFillCount; i++){
        starList.push(<StarFill key={"star-fill" + i}/>)
       }
       //Pusher dans le tableau les démi étoiles (s'il y'en a)
       if (hasStartHalf){
        starList.push(<StarHalf key={"star-half"} />)
       }
       // Pusher dans le tableau les étoiles vide 
       for (let i = 0; i < emptyStartCount; i++) {
        starList.push(<StarEmpty key={"star-empty" + i} />)
        
       }
    return <div>{starList}</div>
}
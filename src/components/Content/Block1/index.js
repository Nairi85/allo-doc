import Block1Left from './Block1-left'
import mask from '../../../asete/imagines/Mask.png'
import './style.css'

export default()=>{
    return(
     <div className="black1">
        <Block1Left/>
        <img className="mask" src={mask} alt="mask"></img>
     </div>
    )
}
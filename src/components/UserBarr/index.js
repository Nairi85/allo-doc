import vector from '../../asete/imagines/Vector.png';
import { useMemo, useState } from 'react';
import HidenMenu from '../HidenMenu';
import './style.css';
import DOCTORS from '../../data/doctors';


export default (props) => {
  const [menuStatus, setMenuStatus] = useState(true);
  const { name } = props;
  const initial = name.split("")[0];
  const [type,setType] = useState();
  // սա պետք է օգտագործել DoctorsDetails view ի մեջը
  //DOCTORS.find((item=>item.id===id))
  const doctros  = useMemo(()=>{
    return DOCTORS.filter((item=>item.type===type))
  },[type])
  function menuHandler() {
    setMenuStatus(!menuStatus);
  }
  return (
    <div className="user-info-bar">
      <div className="avatar">{initial}</div>
      <span className="avatar-name">{name}</span>
      <img src={vector} alr="vecror" className="vector" onClick={menuHandler} />
      {menuStatus ? <HidenMenu /> : null}
      {doctros.map(item=>{
        return <Link to={`/doctorsDetails/${iten.id}`}></Link>
      })}
    </div>
  )
};
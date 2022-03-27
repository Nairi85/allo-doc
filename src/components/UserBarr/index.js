import vector from '../../asete/imagines/Vector.png';
import { useState } from 'react';
import HidenMenu from '../HidenMenu';
import './style.css';


export default (props) => {
  const [menuStatus, setMenuStatus] = useState(true);
  const { name } = props;
  const initial = name.split("")[0];
  function menuHandler() {
    setMenuStatus(!menuStatus);
  }
  return (
    <div className="user-info-bar">
      <div className="avatar">{initial}</div>
      <span className="avatar-name">{name}</span>
      <img src={vector} alr="vecror" className="vector" onClick={menuHandler} />
      {menuStatus ? <HidenMenu /> : null}
    </div>
  )
};
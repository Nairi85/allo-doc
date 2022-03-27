import './style.css';
import user from '../../../asete/imagines/menuline/user.png';
import crdritCard from '../../../asete/imagines/menuline/credit-card.png';
import help from '../../../asete/imagines/menuline/help.png';
import logout from '../../../asete/imagines/menuline/logout.png';

export default (prop) => {
    const logoImg=[user,crdritCard,help,logout]
    const {logo,text}=prop;

    return (
        <div className="menu__line">
            <img src={logoImg[+logo]} alt="user" className="logo-img"></img>
            <div className="menuLine-text">{text}</div>
        </div>
    )
}
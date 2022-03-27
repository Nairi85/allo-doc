import Logo from '../Logo';
import RightSaid from './RightSaid';
import LenguageBlock from './LenguageBlock';
import './style.css';

export default ({changeLanguage}) => {
    return (
      <div className="header">
        <div className="contenier">
          <Logo />
          <RightSaid />
          <LenguageBlock changeLanguage={changeLanguage}/> 
        </div>
      </div>
    );
  };
  
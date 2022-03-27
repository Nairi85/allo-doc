import './style.css';
import Menu from './Menu';
import Notification from './Notification';
import UserBarr from '../../UserBarr';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { ContextInfo } from '../../../ContextFunction';


export default () => {
    function hendeler() {
        console.log("uuuuuuuu")
    }
    //const [menuTextx, setMenuText] = useState("menuText")
    //setMenuText(menuText)
    /*useEffect(() => {
      console.log("ok")
    }, [useContext(ContextInfo)[0]])*/
    return (<div className="header__right" >
        <Menu name={"menuText,der"} link="#,#,#" />
        <Notification number="10" />
        <UserBarr name="Артем Свиридов" />
    </div>)
}
import { useContext } from 'react';
import TranslateContext from '../../contexts/translate';
import translates from '../../localization/Translates';
import MenuLine from './MenuLine'
import './style.css'

export default(prop)=>{
    const translate = useContext(TranslateContext);
    const t = translates[translate]
    return(
        <div className="hiden_menu" >
             <MenuLine logo="0" text={t["menu_1"]}/>
             <MenuLine logo="1" text={t["menu_2"]}/>
             <MenuLine logo="2" text="FAQ"/>
             <MenuLine logo="3" text="Выйти"/>
        </div>
    )
}
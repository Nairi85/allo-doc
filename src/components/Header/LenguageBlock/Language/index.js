import './style.css';
import { useContext, useState } from 'react';
import TranslateContext from '../../../../contexts/translate';


export default (props) => {
    const { activ, ln, changeLanguage } = props;
    const translate = useContext(TranslateContext);
    return (
        <div className={'language'+(translate===ln?"":"1")} onClick={()=>{changeLanguage(ln)}}>
            {ln}
        </div>
    )
}
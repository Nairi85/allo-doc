import './style.css';
import Language from './Language';
import { useState, useEffect, useContext, lazy } from 'react';
import { ContextInfo } from '../../../ContextFunction';
import TranslateContext from '../../../contexts/translate';


export default ({changeLanguage}) => {
return(
<div className="leng__block">
    <Language  ln="ru" changeLanguage={changeLanguage} />
    <Language ln="ro" changeLanguage = {changeLanguage}/>
</div>
)
}
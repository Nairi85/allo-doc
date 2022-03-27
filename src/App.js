import Header from "./components/Header/index";
import { useState } from "react";
import Content from "./components/Content";
import './App.css';
import { ContextInfo } from "./ContextFunction";
import TranslateContext from "./contexts/translate";



function App() {
  let leng = "RU";
  let menuText = "Как пользоваться?,Мои записи,Записаться к врачу";
  const myEvent = new Event("chengLeng", { "bubbles": true, });
  /*let leng=useContext(ContextInfo)[0]
  const [menuText,setMenuText]=useState("Как пользоваться?,Мои записи,Записаться к врачу");
  function setLenguage(){
      if(leng==="RU"){
          setMenuText("Как пользоваться?,Мои записи,Записаться к врачу")
      }else{
          setMenuText("Cum se utilizează?,Înregistrările mele,Fă o programare la medic")
      }
  }*/
  const languageCheng = (lenguage) => {
    if (leng !== lenguage) {
      if (leng === "RU") {
        leng = "RO"
        contex[2] = "Cum se utilizează?,Înregistrările mele,Fă o programare la medic"
      } else {
        leng = "RU";
        contex[2] = "Как пользоваться?,Мои записи,Записаться к врачу";
      }
      contex[0] = leng
      console.log(contex)
      setContex(contex)
    }
  }
  const [contex, setContex] = useState([leng, languageCheng, menuText, myEvent])

  
  const [language,changeLanguage] = useState("ru")

  return (
    <TranslateContext.Provider value={language}>
      <div className="App" >
        <Header changeLanguage={changeLanguage} />
        <Content />
      </div>
    </TranslateContext.Provider>

  );
}

export default App;

import './style.css'

export default(prop)=>{
    const{classX, text}=prop;
    return(
        <div className={classX}>
            {text}
        </div>
    )
}
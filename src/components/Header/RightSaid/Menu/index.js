import './style.css'

export default (props) => {
    const { name, link,clackState } = props;
    return (<div className="menu">
        <a className="menu__link" hrif={link.split(",")[0]}>
            {name.split(",")[0]}
        </a>
        <a className="menu__link" hrif={link.split(",")[1]}>
            {name.split(",")[1]}
        </a>
        <a className="menu__link" hrif={link.split(",")[2]}>
            {name.split(",")[2]}
        </a>
    </div>)
}
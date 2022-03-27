import Button from './Button';
import './style.css';

export default () => {
    return (
        <div className="bolock1__left__bottom">
            <div className="bolock1__left__bottom__text">
                Проконсультируйтесь <span className="span1">сейчас </span>или по <span className="span1">предварительной записи</span>  со своего компьютера или c помощью нашего приложения, доступного в <span className="span2">App Store</span> и <span className="span2">Google Play</span>
            </div>
            <div className="black1__bottonBlock">
            <Button classX="passiv" text="Записаться"/>
            <Button classX="activ" text="Как это работает?"/>
            </div>
        </div>


    )
}

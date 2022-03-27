import Block1LeftBottom from './Block1-left-bottom';
import './style.css';

export default () => {
    return (
        <div className="Block1__left">
            <p className='Block1__left__title'>
                <span className='Block1__left__span1'>Онлайн консультации</span> от
                врачей специалистов 24/7
            </p>
            <Block1LeftBottom/>
        </div>
    )
}
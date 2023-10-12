
import './rates.scss'

export default function Rates(props) {
    const cl = props.color
    return (
        <div className='rate-container'>
            <div className={cl} id='heading'><h1>{props.heading}</h1></div>
            <div className={cl} id='content'>
                <div className="content-container">
                    <div className="currency"><p>руб</p></div>
                    <div className="price">{props.price}</div>
                    <div className="interval">{props.interval}</div>
                </div>

            </div>
            <div className={cl} id="info">Время тренировки не ограничено!</div>
            <div className="discount"><p>Скидка {props.discount}!</p></div>
        </div>
    )
}

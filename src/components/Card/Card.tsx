import cardCoins from '../../assets/icons/CardCoins.svg'
import Education from '../../assets/icons/Education.svg'
import './Card.scss'
interface CardProps {
    id: number;
    title: string;
    imageUrl: string;
}
const Card: React.FC<CardProps> = ({ title, imageUrl }) => {
    return (
        <article className="card">
            <div className="card__top"></div>
            <img className='card__image' src={imageUrl} alt="NewPlaylist1" />
            <div className="card__header">
                <div className="card__header-left">
                    <img src={cardCoins} alt="cardCoins" />
                    <span className='card__header-left-title'>Earn 2T</span>
                </div>
                <div className="card__header-right">
                    <img src={Education} alt="Education" />
                </div>
            </div>
            <h3 className="card-title">{title}</h3>
            <div className="card__bottom"></div>
        </article>

    )
}

export default Card

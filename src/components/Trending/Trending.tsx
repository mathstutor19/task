import TrendingData from '../../data/TrendingData'
import Card from '../Card/Card'
import './Trending.scss'
const Trending: React.FC = () => {
    return (
        <div className="trending">
            <h2 className='trending__title'>Trending</h2>
            <div className="trending__card-wrapper">
                {TrendingData.map((item) => (
                    <Card key={item.id} id={item.id} title={item.title} imageUrl={item.imageUrl} />
                ))}
            </div>
        </div>
    )
}

export default Trending

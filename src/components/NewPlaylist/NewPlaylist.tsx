import cardData from '../../data/cardData'
import Card from '../Card/Card'
import Filter from '../Filter/Filter'
import Academy from '../Academy/Academy'
import './NewPlaylist.scss'
import SeeAll from '../SeeAll/SeeAll'
const NewPlaylist: React.FC = () => {
    return (
        <div className='playlist'>
            <div className="playlist__container">
                <div className="playlist__filter">
                    <Academy />
                    <Filter />
                </div>
                <div className='playlist__wrapper'>
                    <h2 className='playlist__newtitle'>New Playlist</h2>
                    <SeeAll />
                </div>
                <div className="playlist__card-wrapper">
                    {cardData.map((item) => (
                        <Card key={item.id} id={item.id} title={item.title} imageUrl={item.imageUrl} />
                    ))}
                </div>
                <div className="playlist__bottom"></div>
            </div>
        </div>
    )
}

export default NewPlaylist

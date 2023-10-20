import searchicon from '../../assets/icons/searchicon.svg';
import './SearchInput.scss'

const SearchInput = () => {
    return (
        <div className='search__container'>
            <input className='search__input' type="text" placeholder="Search" />
            <img className='search__icon' src={searchicon} alt="searchicon" />
        </div>
    )
}

export default SearchInput

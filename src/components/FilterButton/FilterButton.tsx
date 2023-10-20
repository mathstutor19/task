import './FilterButton.scss'
interface textProps { text: string, index: number };
const FilterButton: React.FC<textProps> = ({ text, index }) => {
    return (
        <button
            className={`filter__button ${index === 0 ? 'filter__active' : ''}`}>
            {text}
        </button>
    )
}

export default FilterButton

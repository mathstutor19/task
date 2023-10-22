import FilterButton from '../FilterButton/FilterButton'

const Filter: React.FC = () => {
    const filterButtons: string[] = ['All', 'Stocks', 'ETFs', 'Crypto', 'NFTs']
    return (
        <div>
            {filterButtons.map((item, index) => (
                <FilterButton key={index} text={item} index={index} />
            ))}
        </div>
    )
}

export default Filter
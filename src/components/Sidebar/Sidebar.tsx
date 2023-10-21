import NavbarMenu from '../NavbarMenu/NavbarMenu'
import PersonalAccount from '../PersonalAccount/PersonalAccount'
import SearchInput from '../SearchInput/SearchInput'
import './Sidebar.scss'

const Sidebar: React.FC = () => {
    return (
        <aside className="sidebar">
            <PersonalAccount />
            <SearchInput />
            <NavbarMenu />
        </aside>
    )
}

export default Sidebar

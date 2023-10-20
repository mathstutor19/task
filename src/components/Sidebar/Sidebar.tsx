import NavbarMenu from '../NavbarMenu/NavbarMenu'
import PersonalAccount from '../PersonalAccount/PersonalAccount'
import SearchInput from '../SearchInput/SearchInput'
import './Sidebar.scss'
const Sidebar = () => {
    return (
        <aside className="sidebar">
            <PersonalAccount />
            <SearchInput />
            <NavbarMenu />
        </aside>
    )
}

export default Sidebar

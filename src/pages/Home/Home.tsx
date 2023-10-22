import NewPlaylist from "../../components/NewPlaylist/NewPlaylist"
import Trending from "../../components/Trending/Trending"
import './Home.scss'
const Home: React.FC = () => {
    return (
        <main className="home">
            <NewPlaylist />
            <Trending />
        </main>
    )
}

export default Home

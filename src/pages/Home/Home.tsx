import NewPlaylist from "../../components/NewPlaylist/NewPlaylist"
import Trending from "../../components/Trending/Trending"
import './Home.scss'
const Home = () => {
    return (
        <main className="home">
            <NewPlaylist />
            <Trending />
        </main>
    )
}

export default Home

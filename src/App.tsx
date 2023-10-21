import { lazy, Suspense } from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Loading from './components/Loading/Loading';
const Home = lazy(() => import('./pages/Home/Home'));
const Details = lazy(() => import('./pages/Details/Details'));

function App(): React.JSX.Element {
  return (
    <Suspense fallback={<Loading />}>
      <div className="app__wrapper">
        <Sidebar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details" element={<Details />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Suspense>

  );
}

export default App;

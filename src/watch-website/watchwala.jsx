import './watchwala.css';
import Header from './header/header';
// import { BrowserRouter } from 'react-router-dom';
// import { BrowserRouter ,Routes, Route, NavLink } from 'react-router-dom';
import backgroundImage from '../image/background-image.png';
import Main from './main/main';

export default function Watchwala(){
    return<>
    <div className="main" style={{ backgroundImage: `url(${backgroundImage})` }}>
    <Header/>
    </div>
    <Main/>
    {/* <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>} />
    </Routes>
    </BrowserRouter> */}
    </>;
}
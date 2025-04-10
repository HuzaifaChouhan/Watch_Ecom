import './header.css';
import watchwalalogo from '../../image/watchwala-logo.png';
import Nav from './navbar/navbar';
import Hero from './heropage/hero';

export default function Header(){
    return<>
        <header>
            <img src={watchwalalogo} alt="logo" className='watchwala-logo'/>
            <Nav/>
        </header>
        <Hero/>
    </>
}
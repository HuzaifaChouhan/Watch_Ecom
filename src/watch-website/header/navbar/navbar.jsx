import './navbar.css';

function Nav(){
    function showsidebar(){
        let menu = document.querySelector(".remove");
        menu.style.display = "flex";
        const burgermenu = document.querySelector(".menu");
        burgermenu.style.display = "none";  
    }
    function hidesidebar(){
        let menu = document.querySelector(".remove");
        menu.style.display = "none";
        const burgermenu = document.querySelector(".menu");
        burgermenu.style.display = "flex";
    }

    return<>
        <nav>
        <ul className="bar">
            <li className="hide"><a href="/">Brands</a></li>
            <li className="hide"><a href="/">About</a></li>
            <li className="hide"><a href="/">Contact Us</a></li>
            <li className='hide'><a href='/'>Login</a></li>
            <li className="menu" onClick={showsidebar}><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></a></li>
        </ul>
        <ul className="remove">
            <li className="x" onClick={hidesidebar}><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></a></li>
            <li><a href="/" className='hided'>Home</a></li>
            <li><a href="/" className='hided'>About</a></li>
            <li><a href="/" className='hided'>Contact Us</a></li>
        </ul>
    </nav>
    </>
}

export default Nav;
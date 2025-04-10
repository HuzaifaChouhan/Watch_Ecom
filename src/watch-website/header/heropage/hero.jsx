import './hero.css';
import Carousel from 'react-bootstrap/Carousel';
import watch1 from '../../../image/watch1.jpg';
import watch2 from '../../../image/watch2.jpg';
import watch3 from '../../../image/watch3.jpg';

export default function Hero(){
    return<>
        <div className="hero">
            <Carousel controls={false} indicators={false}>
                <Carousel.Item>
                   <img src={watch1} alt="watch1" className='watchs'/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={watch2} alt="watch2" className='watchs'/> 
                </Carousel.Item>
                <Carousel.Item>
                    <img src={watch3} alt="watch3" className='watchs'/> 
                </Carousel.Item>
            </Carousel>
            <button className='butt-order'>
                Order Now!
            </button>
        </div>

    </>
}
import img from '../assets/photo-grid.png'

function Hero() {
    return (
        <div className="hero-container">
            <img src={img} className="hero-img" alt="photo grid" />
            <h1 className="hero-header">Online Experiences</h1>
            <p className="hero-info">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    )
}

export default Hero
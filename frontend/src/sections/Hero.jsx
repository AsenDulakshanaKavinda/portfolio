import Navigation from '../components/Navigation';
import Introduction from '../components/Introduction';
import VisualIntroduction from '../components/VisualIntroduction';
import HeroEndNote from '../components/HeroEndNote';
import '../styles/hero.css'
import '../styles/index.css'

function Hero() {
    return (
        <section className="hero-section">
            <Navigation />
            <div className="hero-content">
                <Introduction />
                <VisualIntroduction />
            </div>
            <HeroEndNote />
        </section>
    );
}

export default Hero;
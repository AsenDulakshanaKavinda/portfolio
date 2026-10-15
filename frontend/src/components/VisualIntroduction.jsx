import '../styles/visual-introduction.css';
import heroImage from '../assets/hero.jpeg';

// Sub-component 1: Brief intro text
function IntroText() {
    return (
        <p className="visual-intro-text">
            Exploring ML engineering roles and thoughtful collaborations.
        </p>
    );
}

// Sub-component 2: External action links (GitHub, LinkedIn, CV)
function ActionLinks() {
    return (
        <div className="action-links-container">
            <div className="link-row">
                <a href="#github" className="action-link">
                    GitHub ↗
                </a>
                <a href="#linkedin" className="action-link">
                    LinkedIn ↗
                </a>
            </div>
            <div className="link-row">
                <a href="#cv" className="action-link">
                    CV / PDF ↗
                </a>
            </div>
        </div>
    );
}

// Sub-component 3: Visual Graphic / Banner Section
function VisualBanner() {
    return (
        <div className="visual-banner-container">
            <div className="banner-image-wrapper">
                {/* Replace src with your actual 3D wave graphic asset */}
                <img 
                    src={heroImage}
                    alt="Abstract wireframe wave graphic" 
                    className="banner-image" 
                />
                <span className="banner-caption">
                    FIG. 01 — FROM COMPLEXITY TO STRUCTURE
                </span>
            </div>
        </div>
    );
}

// Main Component
function VisualIntroduction() {
    return (
        <section className="visual-intro-container">
            <div className="visual-intro-info">
                <IntroText />
                <ActionLinks />
            </div>
            <div className="visual-intro-graphic">
                <VisualBanner />
            </div>
        </section>
    );
}

export default VisualIntroduction;
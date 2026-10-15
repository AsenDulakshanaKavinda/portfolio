import '../styles/navigation.css'


function SectionLabel() {
    return (
        <div className="section-label">
            <p style={{ margin: 0 }}>ILLUSTRATIVE PORTFOLIO</p>
        </div>
    );
}

function Monogram() {
    return (
        <div className="monogram-container">
            <span className="monogram-text">am.</span>
        </div>
    );
}

function NavigationLinks() {
    return (
        <nav className="nav-container">
            <ul className="nav-list">
                <li>Selected work</li>
                <li>About</li>
                <li>Experience</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}

function Navigation() {
    return (
        <header className="navigation">
            <Monogram />
            <NavigationLinks />
            <SectionLabel />
        </header>
    );
}

export default Navigation;
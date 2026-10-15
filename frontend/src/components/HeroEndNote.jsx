import '../styles/hero-end-note.css';

// Sub-component 1: Left breadcrumb label
function PortfolioBreadcrumb() {
    return (
        <span className="endnote-breadcrumb">
            PORTFOLIO / SELECTED EXPLORATIONS
        </span>
    );
}

// Sub-component 2: Right scroll indicator label
function ScrollIndicator() {
    return (
        <span className="endnote-scroll">
            SCROLL TO EXPLORE ↓
        </span>
    );
}

// Main Component
function HeroEndNote() {
    return (
        <div className="hero-endnote-container">
            <PortfolioBreadcrumb />
            <ScrollIndicator />
        </div>
    );
}

export default HeroEndNote;
import '../styles/introduction.css'


// Sub-component for the top tag/label
function RoleLabel() {
    return (
        <span className="intro-label">
            ML / AI ENGINEER · SAMPLE PROFILE
        </span>
    );
}

// Sub-component for the main heading name and tagline
function MainHeadline() {
    return (
        <div className="main-headline">
            <RoleLabel />
            <h1 className="name-title">Asen Dulakshana</h1>
            <p className="main-subheading">
                Turning promising models into dependable systems.
            </p>
        </div>
    );
}

// Sub-component for the side/bottom description block
function SideDescription() {
    return (
        <div className="side-description">
            <span className="section-tag">RESEARCH - REAL-WORLD</span>
            <p className="description-text">
                Applied machine learning, thoughtful evaluation, and the infrastructure in between.
            </p>
        </div>
    );
}

// Main Introduction Component
function Introduction() {
    return (
        <section className="intro-container">
            <MainHeadline />
            <SideDescription />
        </section>
    );
}



export default Introduction
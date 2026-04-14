export default function Projects() {
    return (
        <div className={`projects`} id="portfolios">
            <h1>My Projects</h1>
            <div className="showcases">
                <div className="project">
                    <a href="">
                        <h2><b>Movie Listing Website</b></h2>
                        <p>A dynamic movie listing platform built using React and Node.js with API integration.</p>
                    </a>
                </div>
                <div className="project">
                    <a href="">
                        <h2><b>Portfolio Website</b></h2>
                        <p>A responsive portfolio website showcasing my skills and projects.</p>
                    </a>
                </div>
                <div className="project">
                    <a href="">
                        <h2><b>Weather App</b></h2>
                        <p>A simple weather application that displays current weather conditions and forecasts.</p>
                    </a>
                </div>
                <div className="project">
                    <a href="">
                        <h2><b>Landing Page Design</b></h2>
                        <p>A modern landing page design for a fictional startup company.</p>
                    </a>
                </div>
            </div>
        </div>
    );
}
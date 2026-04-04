import FrontEnd from '../Images/front-end.png';
import BackEnd from '../Images/backend.png';
import FullStack from '../Images/full-stack-developer.png';
import Customwebapps from '../Images/custom-web-app.png';
import Performopts from '../Images/performance-opt.png';
import UIUX from '../Images/ux-ui-basics.png';

export default function Service() {
    return (
        <>
            <div className="services" id="services">
                <h4>My Services</h4>
                <h1><b> Why Choose My Services?</b></h1>
                <div className="features">
                    <div className="servesection">
                        <img src={FrontEnd} alt="" />
                        <h2><b>Front-End Developement</b></h2>
                        <h4>Modern, responsive UI using HTML, CSS, and React.js with a focus on performance and user experience.</h4>
                    </div>
                    <div className="servesection">
                        <img src={BackEnd} alt="" />
                        <h2><b>Back-End Developement</b></h2>
                        <h4>Scalable backend systems using Node.js and Express with secure APIs and database integration.</h4>
                    </div>
                    <div className="servesection">
                        <img src={FullStack} alt="" />
                        <h2><b>Full Stack Projects</b></h2>
                        <h4>Complete web solutions from frontend to backend with seamless integration.</h4>
                    </div>
                    <div className="servesection">
                        <img src={Customwebapps} alt="" />
                        <h2><b>Custom Web Apps</b></h2>
                        <h4>Tailored applications based on your business needs and ideas.</h4>
                    </div>
                    <div className="servesection">
                        <img src={Performopts} alt="" />
                        <h2><b>Performance Optimization</b></h2>
                        <h4>Fast-loading, optimized websites with clean code and best practices.</h4>
                    </div>
                    <div className="servesection">
                        <img src={UIUX} alt="" />
                        <h2><b>UI/UX Improvements</b></h2>
                        <h4>Enhancing user experience with intuitive layouts and smooth interactions.</h4>
                    </div>
                </div>
            </div>
        </>
    )
}
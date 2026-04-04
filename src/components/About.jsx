import '../App.css'
import Image from '../Images/IMG1.png';

export default function About() {
    return (
        <>
            <div className="about" id="abouts">
                <div className="image">
                    <img src={Image} alt="Image" />
                </div>
                <div className="text">
                    <h4> About Us</h4>
                    <h1><b>Hi there, I’m Ankit Vishwakarma</b></h1>
                    <h5> I’m a passionate Full Stack Web Developer with hands-on experience in building responsive and dynamic web applications. I specialize in frontend development using React.js and backend development using Node.js.</h5>
                    <h5> I enjoy turning ideas into real-world applications and constantly improving my skills by working on new technologies and projects. My goal is to create websites that are not only visually appealing but also fast, functional, and user-friendly.</h5>
                </div>
            </div>
        </>
    );
}
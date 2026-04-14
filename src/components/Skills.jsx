export default function Skills() {
  const skills = [
    { name: "HTML & CSS", value: 95 },
    { name: "JavaScript", value: 90 },
    { name: "React.js", value: 85 },
    { name: "Node.js", value: 80 },
    { name: "MongoDB", value: 75 },
  ];

  return (
    <div className={`skills`} id="skills">
      <h4>Skills / Progress</h4>
      <h1><b>My Development Skills</b></h1>
      <h5>
        I continuously improve my skills by building real-world projects and exploring new technologies.
      </h5>

      <div className="progress">
        {skills.map((skill, index) => (
          <div className="progress-container" key={index}>
            <div
              className="progress-circle"
              style={{
                background: `conic-gradient(
                  #00c6ff 0%,
                  #0072ff ${skill.value}%,
                  #ffffff ${skill.value}%
                )`,
              }}
            >
              <span className="progress-value">{skill.value}%</span>
            </div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
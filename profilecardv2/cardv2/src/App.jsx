import "./App.css";
const Data = [
  {
    skill: "Javascript",
    color: "#FF6B6B",
    level: "intermediate",
  },
  {
    skill: "Html+css",
    color: "#4ECDC4",
    level: "advanced",
  },
  {
    skill: "Web design",
    color: "#FFE66D",
    level: "intermediate",
  },
  {
    skill: "Git and github",
    color: "#95E1D3",
    level: "intermediate",
  },
  {
    skill: "React",
    color: "#C7CEEA",
    level: "intermediate",
  },
  {
    skill: "python",
    color: "#FF8B94",
    level: "beginner",
  },
];
const getLevelIcon = (level) => {
  if (level === "beginner") return "💪";
  if (level === "intermediate") return "💪💪";
  if (level === "advanced") return "💪💪💪";
  return "";
};

const App = () => {
  return (
    <>
      <div className="box">
        <img src="pp.png" alt="Profile" />
        <div className="des">
          <h1>RK</h1>
          <p>
            Hi, I'm Rupok Saha, a passionate web developer with expertise in
            creating dynamic and user-friendly websites. I love coding and
            bringing ideas to life through technology.
          </p>

          <h2>Skills</h2>
          <div className="skills">
            {Data.map((data, index) => (
              <div
                key={index}
                className="skill"
                style={{ backgroundColor: data.color }}
              >
                <span className="skill-name">
                  {data.skill}
                  {getLevelIcon(data.level)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

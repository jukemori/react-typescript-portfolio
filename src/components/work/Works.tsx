import { projectsData, projectsNav } from "./Data";
import { useEffect, useState } from "react";
import WorkItems from "./WorkItems";

interface Project {
  id: number;
  image: string;
  title: string;
  category: string;
}

function Works() {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState<Project[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    index: number
  ) => {
    const targetText = (e.target as HTMLSpanElement).textContent; // Cast to HTMLSpanElement
    if (targetText) {
      setItem({ name: targetText.toLowerCase() });
    }
    setActive(index);
  };
  return (
    <div>
      <div className="work__filters">
        {projectsNav.map((item, index) => {
          return (
            <span
              onClick={(e) => {
                handleClick(e, index);
              }}
              className={`${active === index ? "active-work" : ""} work__item`}
              key={index}
            >
              {item.name}
            </span>
          );
        })}
      </div>

      <div className="work__container container grid">
        {projects.map((item) => {
          return <WorkItems item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
}

export default Works;

<span className="active-work work__item">web</span>;

import { projectsData, projectsNav } from "./Data";
import { useEffect, useState } from "react";
import WorkItems from "./WorkItems";

interface Project {
  id: number;
  title: string;
  image: {
    main: string;
    sub: string;
  };
  category: string;
  description: string;
  source: string;
  tags: string[];
  url?: string;
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
        {projects.map((item, index) => {
          return <WorkItems item={item} index={index} />;
        })}
      </div>
    </div>
  );
}

export default Works;

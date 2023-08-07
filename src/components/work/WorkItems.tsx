import { useState } from "react";
import { Slide } from "react-awesome-reveal";

interface WorkItem {
  item: {
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
  };
}

function WorkItems({ item }: WorkItem) {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (id: number) => {
    setToggleState(id);
  };

  const slideDirection = item.id % 2 === 0 ? "right" : "left";

  return (
    <>
      <Slide direction={slideDirection}>
        <div className="work__card" key={item.id}>
          <img src={item.image.main} alt="" className="work__img" />
          <div className="work__card--hover">
            <h3 className="work__title">{item.title}</h3>
            <span className="work__button" onClick={() => toggleTab(item.id)}>
              View More{" "}
              <i className="bx bx-right-arrow-alt work__button-icon"></i>
            </span>
          </div>
        </div>
      </Slide>
      <div
        className={
          toggleState === item.id ? "work__modal active-modal" : "work__modal"
        }
      >
        <div className="work__modal-content">
          <i
            onClick={() => toggleTab(0)}
            className="uil uil-times work__modal-close"
          ></i>
          <img src={item.image.sub} alt="" className="work__modal-img" />

          <h3 className="work__modal-title">{item.title}</h3>
          <p className="work__modal-description">{item.description}</p>

          <ul className="work__modal-skills">
            {item.tags.map((tag) => {
              return (
                <li className="work__modal-skill">
                  <i className={`${tag} work__modal-icon`}></i>
                </li>
              );
            })}
          </ul>
          <div className="work__modal-buttons">
            {item.url && (
              <a href={item.url} target="_blank">
                <button className="work__modal-button">
                  <i className="bx bx-link-external"></i> Demo
                </button>
              </a>
            )}
            <a href={item.source} target="_blank">
              <button className="work__modal-button">
                <i className="bx bxl-github"></i> Source
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default WorkItems;

import { useState } from "react";

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

  return (
    <>
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

          <h3 className="work__modal-title">{item.title}</h3>
          <p className="work__modal-description">
            Development of responsive web pages with React.js. Validate UX on
            Figma.
          </p>

          <ul className="work__modal-work grid">
            <li className="work__modal-skill">
              <i className="uil uil-check-circle work__modal-icon"></i>
              <p className="work__modal-info">HTML</p>
            </li>

            <li className="work__modal-skill">
              <i className="uil uil-check-circle work__modal-icon"></i>
              <p className="work__modal-info">CSS</p>
            </li>

            <li className="work__modal-skill">
              <i className="uil uil-check-circle work__modal-icon"></i>
              <p className="work__modal-info">Javascript</p>
            </li>

            <li className="work__modal-skill">
              <i className="uil uil-check-circle work__modal-icon"></i>
              <p className="work__modal-info">React</p>
            </li>

            <li className="work__modal-skill">
              <i className="uil uil-check-circle work__modal-icon"></i>
              <p className="work__modal-info">Figma</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default WorkItems;

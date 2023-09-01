import { useState } from "react";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import Modal from "./Modal";

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

const cld = new Cloudinary({
  cloud: {
    cloudName: "dg1bjmdp8",
  },
});

function WorkItems({ item }: WorkItem) {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (id: number) => {
    setToggleState(id);
  };

  return (
    <>
      <div className="work__card" key={item.id}>
        <AdvancedImage
          cldImg={cld.image(item.image.main)}
          alt=""
          className="work__img"
          loading="lazy"
        />
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
        <Modal
          title={item.title}
          description={item.description}
          imageUrl={item.image.sub} // Pass the image URL as a prop
          image={cld.image(item.image.sub)} // Pass the Cloudinary instance
          onClose={() => toggleTab(0)} // Define the close action
          tags={item.tags}
          url={item.url}
          source={item.source}
        />
      </div>
    </>
  );
}

export default WorkItems;

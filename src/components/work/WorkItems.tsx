interface WorkItemProps {
  item: {
    id: number;
    image: string;
    title: string;
    category: string;
  };
}

function WorkItems({ item }: WorkItemProps) {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <div className="work__card--hover">
        <h3 className="work__title">{item.title}</h3>
        <a href="#" className="work__button">
          Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
      </div>
    </div>
  );
}

export default WorkItems;

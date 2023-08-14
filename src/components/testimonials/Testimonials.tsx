import "./testimonials.css";

function Testimonials() {
  return (
    <section className="testimonial container section">
      <h2 className="section__title">Testimonial</h2>
      <span className="section__subtitle">Very reliable </span>

      <div className="testimonial__container container">
        <div className="testimonial__card">
          <h3 className="testimonial__title">
            <i className="bx bxs-quote-left"></i> He's the goat
          </h3>
          <div className="testimonial__box">
            <img
              src="https://res.cloudinary.com/dg1bjmdp8/image/upload/v1691982319/Portfolio/Public/xzaivar_nhfek8.jpg"
              alt=""
              className="testimonial__img"
            />
            <div className="testimonial__description">
              <div>
                <i className="bx bxs-star testimonial__icon"></i>
                <i className="bx bxs-star testimonial__icon"></i>
                <i className="bx bxs-star testimonial__icon"></i>
                <i className="bx bxs-star testimonial__icon"></i>
                <i className="bx bxs-star testimonial__icon"></i>
              </div>
              <p className="testimonial__name">X'Zaiver Wolfinbarger</p>
              <p className="testimonial__subtitle">Le Wagon</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

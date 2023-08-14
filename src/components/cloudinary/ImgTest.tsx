import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";

function ImgTest() {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "dg1bjmdp8",
    },
  });

  // const myImage = cld.image(
  //   "v1691980407/Portfolio/WolfMinute/main-5_apknbu.jpg"
  // );
  // The URL of the image is: https://res.cloudinary.com/demo/image/upload/v1683859383/cld-sample-5.jpg

  return (
    <section className="cloudinary container section">
      <h2 className="section__title">cloudinary</h2>
      <span className="section__subtitle">wassup </span>
      <AdvancedImage
        cldImg={cld.image("v1691980407/Portfolio/WolfMinute/main-5_apknbu.jpg")}
      />
      <AdvancedImage
        cldImg={cld.image("v1691980418/Portfolio/WolfMinute/sub-2_ztciqd.jpg")}
      />
      <div className="cloudinary__container container"></div>
    </section>
  );
}

export default ImgTest;

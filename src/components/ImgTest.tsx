import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";

function ImgTest() {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "dg1bjmdp8",
    },
  });

  const myImage = cld.image(
    "v1692051048/jezael-melgoza-3snKY0XMKwg-unsplash_ohsz5i.jpg"
  );
  // The URL of the image is:
  // https://res.cloudinary.com/dg1bjmdp8/image/upload/v1692051048/unsplash_ohsz5i.jpg

  return (
    <section className="Cloudinary container section">
      <h2 className="section__title">Cloudinary</h2>
      <AdvancedImage cldImg={myImage} />
    </section>
  );
}

export default ImgTest;

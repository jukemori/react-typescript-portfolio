// Modal.tsx

import { AdvancedImage } from "@cloudinary/react";
import { CloudinaryImage } from "@cloudinary/url-gen";

interface ModalProps {
  title: string;
  description: string;
  imageUrl: string;
  image: CloudinaryImage;
  onClose: () => void;
  tags: string[];
  url?: string;
  source: string; // Pass the Cloudinary instance as a prop
}

function Modal({
  title,
  description,
  image,
  onClose,
  tags,
  url,
  source,
}: ModalProps) {
  return (
    <div className="work__modal-content">
      <i onClick={onClose} className="uil uil-times work__modal-close"></i>
      <AdvancedImage
        cldImg={image}
        alt=""
        className="work__modal-img"
        loading="lazy"
      />

      <h3 className="work__modal-title">{title}</h3>
      <p className="work__modal-description">{description}</p>

      <ul className="work__modal-skills">
        {tags.map((tag, index) => {
          return (
            <li key={index} className="work__modal-skill">
              <i className={`${tag} work__modal-icon`}></i>
            </li>
          );
        })}
      </ul>
      <div className="work__modal-buttons">
        {url && (
          <a href={url} target="_blank">
            <button className="work__modal-button">
              <i className="bx bx-link-external"></i> Demo
            </button>
          </a>
        )}
        <a href={source} target="_blank">
          <button className="work__modal-button">
            <i className="bx bxl-github"></i> Source
          </button>
        </a>
      </div>
    </div>
  );
}

export default Modal;

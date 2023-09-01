// Modal.tsx

import { AdvancedImage } from "@cloudinary/react";
import { CloudinaryImage } from "@cloudinary/url-gen";

interface ModalProps {
  title: string;
  description: string;
  imageUrl: string;
  onClose: () => void;
  image: CloudinaryImage; // Pass the Cloudinary instance as a prop
}

function Modal({
  title,
  description,

  onClose,
  image,
}: ModalProps) {
  return (
    <div className="work__modal">
      {/* Close button */}
      <button onClick={onClose} className="modal-close-button">
        <i className="uil uil-times"></i>
      </button>

      {/* Image */}
      <AdvancedImage
        cldImg={image} // Use the provided imageUrl prop
        alt=""
        className="work__modal-img"
        loading="lazy"
      />

      {/* Title and description */}
      <h3 className="work__modal-title">{title}</h3>
      <p className="work__modal-description">{description}</p>

      {/* Rest of the modal content */}
    </div>
  );
}

export default Modal;

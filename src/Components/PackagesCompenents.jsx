import React from "react";
import imageBali1 from "assets/images/Bali.png";
import imageBali2 from "assets/images/Thecliffside.png";
import Location from "assets/images/Subtract.png";

export default function PackagesCompenents(props) {
  const { destination, title } = props;
  const image =
    destination === "Bali" && title === "Greatest Tower"
      ? imageBali1
      : destination === "Bali" && title === "The Cliffside Beach"
      ? imageBali2
      : null;

  return (
    <>
      {image && (
        <div className="col-md-6">
          <div className="components-images position-relative text-center p-2">
            <img src={image} alt={destination} className="img-fluid" />
            <div className="position-absolute star-position text-star">
              <span>
                <i className="fa fa-star text-warning"></i>
              </span>
              <span>
                <i className="fa fa-star text-warning"></i>
              </span>
              <span>
                <i className="fa fa-star text-warning"></i>
              </span>
              <span>
                <i className="fa fa-star text-warning"></i>
              </span>
              <span>
                <i className="fa fa-star text-warning"></i>
              </span>
              <p className="fw-bold text-white m-0">{title}</p>
              <p className="text-white">
                <img src={Location} alt="" className="img-fluid" /> Bali,
                Indonesia
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

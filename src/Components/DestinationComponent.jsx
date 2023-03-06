import React from "react";
// import Waterfall from "assets/images/Waterfall-Haven.png";

export default function DestinationComponent(props) {
  return (
    <>
      <div className="col-md-3 mt-3">
        <div className="card-destination position-relative">
          <div className="img-thumbnails">
            <img src={props.imgSrc} alt="water-fall" className="img-fluid" />
          </div>
          <div className="description-thumbnails p-3 position-relative mt-3">
            <h5 className="fw-bold">${props.title}</h5>
            <p className="text-subheader">
              <i class="fa-solid fa-location-dot"></i>
              {props.location}
            </p>
            <p className="fw-bold">
              {props.price}{" "}
              <span className="text-subheader fw-normal">/Person</span>
            </p>
            <button className="btn px-4 btn-primary-destination position-absolute">
              Book
            </button>
          </div>
          <span className="ranting p-2 text-white fw-bold position-absolute">
            <i className="fa fa-star text-warning"></i>
            {props.ranting}
          </span>
        </div>
      </div>
    </>
  );
}

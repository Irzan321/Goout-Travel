import React from "react";

export default function ServiceComponents(props) {
  return (
    <>
      <div className="col-md-6 mt-5">
        <div className="row">
          <div className="col-md-3">
            <img src={props.src} alt="" className="img-fluid" />
          </div>
          <div className="col-md-9">
            <h4 className="fw-bold">{props.title}</h4>
            <p className="text-subheader">{props.desc}</p>
          </div>
        </div>
      </div>
    </>
  );
}

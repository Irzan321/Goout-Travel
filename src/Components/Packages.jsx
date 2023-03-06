import React from "react";
import PackagesCompenents from "./PackagesCompenents";

export default function Packages() {
  return (
    <>
      <section id="packages">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="row">
                <PackagesCompenents destination="Bali" title="Greatest Tower" />
                <PackagesCompenents
                  destination="Bali"
                  title="The Cliffside Beach"
                />
              </div>
            </div>
            <div className="col-md-6 px-5">
              <h5 className="fw-bold text-primary">Our Packages</h5>
              <h1 className="fw-bold">Popular Trip Packages</h1>
              <p className="text-subheader">
                A new way to travel by air the easy and fast way. <br />
                Try it now by filling out the form below!
              </p>
              <div className="row">
                <div className="col-md-4">
                  <p className="fs-5 fw-bold m-0">120+</p>
                  <p className="text-subheader">Destination</p>
                </div>
                <div className="col-md-4">
                  <p className="fs-5 fw-bold m-0">560+</p>
                  <p className="text-subheader">Luxury Hotels</p>
                </div>
                <div className="col-md-4">
                  <p className="fs-5 fw-bold m-0">135+</p>
                  <p className="text-subheader">Happy Tourists</p>
                </div>
              </div>
              <div className="row">
                <div className="col-12 mt-3">
                  <button className="btn btn-primary fw-bold py-3 px-4">
                    Choose Packages
                  </button>
                  <button className="btn py-3 px-5 fw-bold text-secondary">
                    View More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

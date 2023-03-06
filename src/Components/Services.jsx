import React from "react";
import ServiceComponents from "./ServiceComponents";
import CloudIcon from "assets/images/Cloud.png";
import OfficeIcon from "assets/images/Office.png";
import FlightIcon from "assets/images/Flight.png";
import TouchIcon from "assets/images/Touch.png";

function Services() {
  const data = [
    {
      src: CloudIcon,
      title: "Calculated Weather",
      desc: "A new way to travel by air the easy and fast way.",
    },
    {
      src: FlightIcon,
      title: "Best Experience Flight",
      desc: "A new way to travel by air the easy and fast way.",
    },
    {
      src: OfficeIcon,
      title: "Best Place to Stay",
      desc: "A new way to travel by air the easy and fast way.",
    },
    {
      src: TouchIcon,
      title: "Easy-To-Use",
      desc: "A new way to travel by air the easy and fast way.",
    },
  ];
  return (
    <>
      <section id="services">
        <div className="container bg-row">
          <div className="row px-4 align-items-center">
            <div className="col-md-4">
              <h5 className="fw-bold text-primary"> Our Services</h5>
              <h1 className="fw-bold">
                WE Offer <br />
                Best Services
              </h1>
            </div>
            <div className="col-md-8">
              <div className="row">
                {data.map((data, index) => {
                  return (
                    <ServiceComponents
                      key={index}
                      src={data.src}
                      desc={data.desc}
                      title={data.title}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;

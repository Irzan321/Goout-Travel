import React from "react";
import ServiceComponents from "./ServiceComponents";

function Services() {
  const data = [
    {
      id: 1,
      Image: "cloud.png",
      title: "Calculated Weather",
      desc: "A new way to travel by air the easy and fast way.",
    },
    {
      id: 2,
      Image: "Office.png",
      title: "Best Place to Stay",
      desc: "A new way to travel by air the easy and fast way.",
    },
    {
      id: 3,
      Image: "Flight.png",
      title: "Best Experience Flight",
      desc: "A new way to travel by air the easy and fast way.",
    },
    {
      id: 4,
      Image: "Touch.png",
      title: "Easy-To-Use",
      desc: "A new way to travel by air the easy and fast way.",
    },
  ];
  console.log(data);
  return (
    <>
      <section id="Services">
        <div className="container bg-secondary bg-row">
          <div className="row px-4 align items-center">
            <div className="col-md-4">
              <h5 className="fw-bold text-primary"> Our Services</h5>
              <h1 className="fw-bold">
                WE Offer <br />
                Best Services
              </h1>
            </div>
            <div className="col-md-8">
              <div className="row">
                {data.map((item) => {
                  return <ServiceComponents key={item.title} desc={item.desc} title={item.title} />;
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

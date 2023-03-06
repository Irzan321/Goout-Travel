import React from "react";
import DestinationComponent from "./DestinationComponent";
import img1 from "assets/images/Waterfall-Haven.png";
import img2 from "assets/images/Greatest-Mountain.png";
import img3 from "assets/images/Coconut-Tree-River.png";
import img4 from "assets/images/Circle-Beach-Play.png";
import img5 from "assets/images/High-Ground.png";
import img6 from "assets/images/Dinosaur-Land.png";
import img7 from "assets/images/Turtle-Land.png";
import img8 from "assets/images/Thecliffside(2).png";

export default function Destination() {
  const dataWisata = [
    {
      title: "Watefall Haven",
      location: "Selajan, Iceland",
      price: "$9",
      ranting: "5.0",
      imgSrc: img1,
    },
    {
      title: "Greatest Mountain",
      location: "Canada, North Amerika",
      price: "$12",
      ranting: "5.0",
      imgSrc: img2,
    },
    {
      title: "Coconut Tree River",
      location: "Lombok, Indonesia",
      price: "$6",
      ranting: "5.0",
      imgSrc: img3,
    },
    {
      title: "Circle Beach Play",
      location: "Lombok, Indonesia",
      price: "$5",
      ranting: "5.0",
      imgSrc: img4,
    },
    {
      title: "High Ground",
      location: "Bali, Indonesia",
      price: "$49",
      ranting: "5.0",
      imgSrc: img5,
    },
    {
      title: "Dinosaur Land",
      location: "Bali, Indonesia",
      price: "$5",
      ranting: "5.0",
      imgSrc: img6,
    },
    {
      title: "Turtle Land",
      location: "Bali, Indonesia",
      price: "$5",
      ranting: "5.0",
      imgSrc: img7,
    },
    {
      title: "The Cliffside Beach",
      location: "Bali, Indonesia",
      price: "$5",
      ranting: "5.0",
      imgSrc: img8,
    },
  ];
  console.log(dataWisata);
  return (
    <>
      <section id="destination">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="fw bold">Explore Natural Destination</h1>
              <p className="text-subheader">
                A new way to travel by air the easy and fast way. <br /> Try it
                now by filling out the form below!
              </p>
            </div>
          </div>
          <div className="row">
            {dataWisata.map((item) => {
              return (
                <DestinationComponent
                  key={item.title}
                  title={item.title}
                  location={item.location}
                  price={item.price}
                  ranting={item.ranting}
                  imgSrc={item.imgSrc}
                />
              );
            })}
            <div className="col-md-12 text-subheader text-center">
              <button className="btn btn-outline-secondary">View More</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

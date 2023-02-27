import React from "react";
import imageJumbotron from "assets/images/picture-jumbotron.png";
import iconLocation from "assets/images/location.png";
import iconDate from "assets/images/date.png";
import iconClass from "assets/images/class.png";
import pinLocation from "assets/images/pin-location.png";

const Jumbotron = () => {
  return (
    <>
      <section id="jumbotron">
        <div className="container">
          <div className="row bg-row p-4 d-flex justify-content-center align-items-center">
            <div className="col-md-6">
              <h1 className="text-header">Find The Best Place to Stress Release</h1>
              <p className="text-subheader">
                A new way to travel by air the easy and fast way. <br />
                Try it now by filling out the form below!
              </p>
            </div>
            <div className="col-md-6">
              <img src={imageJumbotron} alt="Pantai" className="img-fluid" />
            </div>
            <div className="col-md-12">
              <div className="navtabs-booking">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link first active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">
                      Flight
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link second" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">
                      Hotel
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex={0}>
                    <div className="row p-3 bg-white d-flex align-items-center">
                      <div className="col-md-3">
                        <div className="row d-flex alig-items-center">
                          <div className="col-2">
                            <img src={iconLocation} alt="" className="img-fluid" />
                          </div>
                          <div className="col-8">
                            <input type="text" className="form-control" placeholder="NTB Lombok" aria-label="Username" aria-describedby="basic-addon1" />
                          </div>
                          <div className="col-2">
                            <img src={pinLocation} alt="Pin-location" className="" />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="row d-flex alig-items-center">
                          <div className="col-2">
                            <img src={iconDate} alt="" className="img-fluid" />
                          </div>
                          <div className="col-8">
                            <input type="date" className="form-control" aria-label="Username" aria-describedby="basic-addon1" />
                          </div>
                          <div className="col-2">
                            <img src={pinLocation} alt="Pin-location" className="" />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="row d-flex alig-item-center">
                          <div className="col-2">
                            <img src={iconClass} alt="" className="img-fluid" />
                          </div>
                          <div className="col-8">
                            <input type="text" className="form-control" placeholder="Economy" aria-label="Username" aria-describedby="basic-addon1" />
                          </div>
                          <div className="col-2">
                            <img src={pinLocation} alt="Pin-location" className="" />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="d-grid">
                          <button className="btn btn-primary">
                            <i class="fa-solid fa-magnifying-glass"></i>Search Flight
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex={0}>
                    <div className="row p-3 bg-white">
                      <div className="col-md-5">
                        <div className="row d-flex alig-item-center">
                          <div className="col-2">
                            <img src={iconLocation} alt="" className="img-fluid" />
                          </div>
                          <div className="col-8">
                            <input type="text" className="form-control" placeholder="NTB Lombok" aria-label="Username" aria-describedby="basic-addon1" />
                          </div>
                          <div className="col-2">
                            <img src={pinLocation} alt="Pin-location" className="" />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="row d-flex alig-item-center">
                          <div className="col-2">
                            <img src={iconDate} alt="" className="img-fluid" />
                          </div>
                          <div className="col-8">
                            <input type="date" className="form-control" aria-label="Username" aria-describedby="basic-addon1" />
                          </div>
                          <div className="col-2">
                            <img src={pinLocation} alt="Pin-location" className="" />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-2">
                        <div className="d-grid">
                          <button className="btn btn-primary">
                            <i class="fa-solid fa-magnifying-glass"></i>Book
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Jumbotron;

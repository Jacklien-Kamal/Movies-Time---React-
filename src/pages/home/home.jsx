import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import './home.css'
function ControlledCarousel() {
  const imgUrl = "./src/assets/m1.jpg";
  const imgUrl2 = "./src/assets/m4.jpg";
  const imgUrl3 = "./src/assets/m5.jpg";
  //////////////////////////////////////
  const card1 =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSKF8C3rF7HzVGCcEfCqITQZukcVH6A7HnNg&usqp=CAU";

  return (
    <><div className="container  m-auto">
      <div
        id="carouselExampleControlsNoTouching"
        className="carousel slide "
        data-bs-touch="false"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={imgUrl3} className="d-block w-100 h-50" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={imgUrl2} className="d-block w-100 h-50" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={imgUrl} className="d-block w-100 h-50" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div>
        

        <Tabs
          defaultActiveKey="Action"
          id="fill-tab-example"
          className="mb-3 bg-dark p-1 text-success fs-4 text-danger"
          fill
          
        >
          <Tab  eventKey="Action" title="Action">
            <div className="row row-cols-3 row-cols-md-3 g-4 text-danger">
              <div className="col-4">
                <div className="card">
                  <img src="https://hips.hearstapps.com/hmg-prod/images/best-action-movies-netflix-extraction-6494a25bb3835.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className=" ms-4 text-danger fw-2 fs-3 card-title">Card title</h5>
                    <button className="ms-4 btn btn-success p-2 rounded-3">Watch now</button>
                    
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img src="https://wwwimage-us.pplusstatic.com/thumbnails/photos/w370-q80/movie_asset/43/18/20/contr_salone_poster_1400x2100_nb_0.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                  <h5 className=" ms-4 text-danger fw-2 fs-3 card-title">Card title</h5>
                    <button className="ms-4 btn btn-success p-2 rounded-3">Watch now</button>
                    
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img src="https://wwwimage-us.pplusstatic.com/thumbnails/photos/w370-q80/movie_asset/29/51/10/jrngb_2016_salone_poster_1400x2100_nb.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                  <h5 className=" ms-4 text-danger fw-2 fs-3 card-title">Card title</h5>
                    <button className="ms-4 btn btn-success p-2 rounded-3">Watch now</button>
                    
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img src="https://imageservice.disco.peacocktv.com/uuid/ad0b7242-66ac-38b8-a33a-5d116d245b42/TITLE_ART_3_4/640/480?language=eng&territory=US&version=46c7ddb5-038e-3e73-9b5a-8768d74f55b3" className="card-img-top" alt="..." />
                  <div className="card-body">
                  <h5 className=" ms-4 text-danger fw-2 fs-3 card-title">Card title</h5>
                    <button className="ms-4 btn btn-success p-2 rounded-3">Watch now</button>
                    
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img src="https://m.media-amazon.com/images/M/MV5BNGViM2M4NmUtMmNkNy00MTQ5LTk5MDYtNmNhODAzODkwOTJlXkEyXkFqcGdeQXVyMTY1NDY4NTIw._V1_.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                  <h5 className=" ms-4 text-danger fw-2 fs-3 card-title">Card title</h5>
                    <button className="ms-4 btn btn-success p-2 rounded-3">Watch now</button>
                    
                  </div>
                </div>
              </div>  <div className="col">
                <div className="card">
                  <img src="https://hips.hearstapps.com/hmg-prod/images/best-action-movies-the-woman-king-1675183833.jpeg" className="card-img-top" alt="..." />
                  <div className="card-body">
                  <h5 className=" ms-4 text-danger fw-2 fs-3 card-title">Card title</h5>
                    <button className="ms-4 btn btn-success p-2 rounded-3">Watch now</button>
                    
                  </div>
                </div>
              </div>
            </div>
          </Tab>
          <Tab  eventKey="Animation" title="Animation">
          <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col">
                <div className="card">
                  <img src="https://m.media-amazon.com/images/M/MV5BYWQ4M2ZmODItNzZhYi00MzY1LTk2ZmItYTUwODI2NzJmN2JiXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                  <h5 className=" ms-4 text-danger fw-2 fs-3 card-title">Card title</h5>
                    <button className="ms-4 btn btn-success p-2 rounded-3">Watch now</button>
                    
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img src="https://lumiere-a.akamaihd.net/v1/images/p_disney_wish_799_v3_f9abb2f3.jpeg" className="card-img-top" alt="..." />
                  <div className="card-body">
                  <h5 className=" ms-4 text-danger fw-2 fs-3 card-title">Card title</h5>
                    <button className="ms-4 btn btn-success p-2 rounded-3">Watch now</button>
                    
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img src="https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1623690039982-E63Y1YB8S91Z3BX6P2MF/luca_poster.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                  <h5 className=" ms-4 text-danger fw-2 fs-3 card-title">Card title</h5>
                    <button className="ms-4 btn btn-success p-2 rounded-3">Watch now</button>
                    
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img src="https://lumiere-a.akamaihd.net/v1/images/p_toystory_19639_424d94a0.jpeg" className="card-img-top" alt="..." />
                  <div className="card-body">
                  <h5 className=" ms-4 text-danger fw-2 fs-3 card-title">Card title</h5>
                    <button className="ms-4 btn btn-success p-2 rounded-3">Watch now</button>
                    
                  </div>
                </div>
              </div>
            </div>
          </Tab>
          <Tab eventKey="Horror" title="Horror">
          <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col">
                <div className="card">
                  <img src="https://hips.hearstapps.com/hmg-prod/images/the-conjuring-2-1664690481.png?crop=1xw:1xh;center,top&resize=980:*" className="card-img-top" alt="..." />
                  <div className="card-body">
                  <h5 className=" ms-4 text-danger fw-2 fs-3 card-title">Card title</h5>
                    <button className="ms-4 btn btn-success p-2 rounded-3">Watch now</button>
                    
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img src="https://imageio.forbes.com/specials-images/imageserve/5db8823f1a84270007891eae/Official-poster-for-A24-s--Hereditary-/960x0.jpg?height=1053&width=711&fit=bounds" className="card-img-top" alt="..." />
                  <div className="card-body">
                  <h5 className=" ms-4 text-danger fw-2 fs-3 card-title">Card title</h5>
                    <button className="ms-4 btn btn-success p-2 rounded-3">Watch now</button>
                    
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img src="https://wwwimage-us.pplusstatic.com/thumbnails/photos/w370-q80/movie_asset/21/61/85/psbl_us_2023_sa_poster_1400x2100.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                  <h5 className=" ms-4 text-danger fw-2 fs-3 card-title">Card title</h5>
                    <button className="ms-4 btn btn-success p-2 rounded-3">Watch now</button>
                    
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img src="https://wwwimage-us.pplusstatic.com/thumbnails/photos/w370-q80/movie_asset/86/10/14/s6jo_us_2023_poster_1400x2100_nb.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                  <h5 className=" ms-4 text-danger fw-2 fs-3 card-title">Card title</h5>
                    <button className="ms-4 btn btn-success p-2 rounded-3">Watch now</button>
                    
                  </div>
                </div>
              </div>
            </div>
          </Tab>
          <Tab eventKey="contact" title="Contact" disabled>
            Tab content for Contact
          </Tab>
        </Tabs>
      </div>
      </div>
    </>
  );
}

export default ControlledCarousel;

import "../../style/Home/Testimonial.css";
import { Fade } from "react-reveal";

function Testimonial() {
  return (
    <div className="testimony-container">
      <Fade left>
        <div className="testimony-left">
          <h1>What students have to say</h1>
          <p>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              delectus illum hic, rerum reiciendis magnam consequuntur eveniet
              ex expedita maiores quo tempora perspiciatis, temporibus tempore.
            </span>
          </p>
        </div>
      </Fade>

      <Fade right>
        <div className="testimony-right-container">
          <div
            id="carouselExampleDark"
            className="carousel carousel-dark slide"
            data-bs-ride="carousel"
            // data-bs-interval="false"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval='1000'>
                <div className="testimony-right">
                  <p>
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Debitis maxime distinctio earum, architecto fugit officia
                    corporis laboriosam ipsum consequuntur nobis!"
                    <br />
                    <br />
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia accusamus quidem, nostrum quo nisi dignissimos
                    perspiciatis. Neque, similique consequatur. Quidem omnis,
                    sed quod nemo illo earum odit. Veritatis, ducimus
                    distinctio?"
                  </p>
                  <h4>-Ronaldo</h4>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval='1000'>
                <div className="testimony-right">
                  <p>
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Debitis maxime distinctio earum, architecto fugit officia
                    corporis laboriosam ipsum consequuntur nobis!"
                    <br />
                    <br />
                    "Lorem ipsum dolor, similique consequatur. Quidem omnis,
                    sed quod nemo illo earum odit. Veritatis, ducimus
                    distinctio?"
                  </p>
                  <h4>-Ronaldo</h4>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval='1000'>
                <div className="testimony-right">
                  <p>
                    "Lorem
                    <br />
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia accusamus quidem, nostrum quo nisi dignissimos
                    perspiciatis. Neque, similique consequatur. Quidem omnis,
                    sed quod nemo illo earum odit. Veritatis, ducimus
                    distinctio?"
                  </p>
                  <h4>-Ronaldo</h4>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval='1000'>
                <div className="testimony-right">
                  <p>
                    am ipsum consequuntur nobis!"
                    <br />
                    <br />
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia accusamus quidem, nostrum quo nisi dignissimos
                    perspiciatis. Neque, similique consequatur. Quidem omnis,
                    sed quod nemo illo earum odit. Veritatis, ducimus
                    distinctio?"
                  </p>
                  <h4>-Ronaldo</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default Testimonial;

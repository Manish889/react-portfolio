import React from "react";
import { NavLink } from "react-router-dom";
import "./art.css";

export default function Index() {
  return (
    <>
      <h1 className="heading">The Arts</h1>
      <section className="cardview">
        <div className="row">
          <div className="col">
          <NavLink exact to='courses'>
            <div className="card">
              <a href="https://tutorhere.in/learners/" target="_blank">
                <img
                  src="http://tutorhere.in/wp-content/uploads/2021/05/free-courses.png"
                  class="card-img-top"
                  alt="..."
                />
              </a>

              {/* <small  class="text-muted"><br/> “Learning never exhausts the mind”</small> */}
            </div>
          </NavLink>
          </div>
          
          <div class="col">
            <div class="card">
              <a href="https://www.youtube.com/playlist?list=PLD-VlNwmlX7ONmEqsTBIXwp2lz5EaX5l4" target="_blank">
                <img
                  src="http://tutorhere.in/wp-content/uploads/2021/05/Learners-Page-Art-Work-3.jpg"
                  class="card-img-top"
                  alt="..."
                />
              </a>

              {/* <small  class="text-muted"><br/> "You miss 100% of the shots you don't take"</small> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

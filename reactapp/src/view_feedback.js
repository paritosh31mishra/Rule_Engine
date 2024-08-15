import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Viewfeedback = () => {
  let [reviews, updatecategory] = useState([]);


  const getAllreview = () => {
    fetch("http://localhost:5556/getreviews?category=all")
      .then((response) => response.json())
      .then((reviewarray) => {
        updatecategory(reviewarray);
      });
  };


  const getfeature = () => {
    fetch("http://localhost:5556/getreviews?category=Feature")
    .then((response) => response.json())
    .then((reviewarray) => {
      updatecategory(reviewarray);
    });
  };

  const getpricing = () => {
    fetch("http://localhost:5556/getreviews?category=Pricing")
    .then((response) => response.json())
    .then((reviewarray) => {
      updatecategory(reviewarray);
    });
  };

  const getusability = () => {
    fetch("http://localhost:5556/getreviews?category=Usability")
    .then((response) => response.json())
    .then((reviewarray) => {
      updatecategory(reviewarray);
    });
  };

  useEffect(() => {
   getAllreview();
  }, [1]);

  return (
    <section>
      <div class="container ">
        <div className="row mt-5">
          <div className="col-lg-12 text-center fs-1 fw-bold menu text-dark" >  Rules & Eligibility </div>
        </div>
        <div className="row ">
          <div className="col-lg-12 p-5 text-center">
            <div className="btn-group  ">
              <button
                className="btn btn-outline-dark fw-bold" role="group"  
                style={{ padding: "4px 15px 4px" }}
                onClick={getAllreview}
              >
                Create Rule
              </button>
              <button
                className="btn btn-outline-dark fw-bold" role="group"
                style={{ padding: "4px 15px 4px" }}
                onClick={getfeature}
              >
                Combine Rules
              </button>
              <button
                className="btn btn-outline-dark fw-bold"
                style={{ padding: "4px 15px 4px" }}
                onClick={getpricing}
              >
              Evaluate Rules
              </button>
             
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="container p-5  feedback-box" >
            <div className="row">
              <u> {" "} <h3 className="text-center underlined">   {" "}   Total feedbacks : {reviews.length}{" "}</h3>{" "}   </u>
              </div>

              <div className="row">
              <div className="col-lg-3"> </div>
              <div className="col-lg-6">
                {reviews.map((review, index) => {
                  return (
                    <section className=" mt-5 shadow pt-3">
                      <div className="row  p-3">
                            <div className="col-lg-3 fw-bold fs-6 text-center"> Title </div>
                            <div className="col-lg-9 text"> {review.name} </div>
                            
                      </div>

                      <div className="row p-3">
                            <div className="col-lg-3 fw-bold fs-6 text-center"> Description </div>
                            <div className="col-lg-9 text"> {review.description} </div>
                      </div>

                      <div className="row p-3 pb-4">
                            <div className="col-lg-3 fw-bold fs-6 text-center"> category </div>
                            <div className="col-lg-3 text"> {review.topics} </div>
                            <div className="col-lg-3 fw-bold fs-6 text-center"> Rating </div>
                            <div className="col-lg-3 text">{review.rating} out of 5 </div>
                      </div>

                    

                      
                    </section>
                  );
                })}
              </div>
              <div className="col-lg-3"> </div>
            </div>
          </div> {/* container end*/}
        </div> {/* row end*/}
      </div> {/* container end*/}
    </section>
  );
};

export default Viewfeedback;

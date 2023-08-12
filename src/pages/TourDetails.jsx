import React, { useState } from "react";
import tourData from "../assets/data/tours";
import { useParams} from "react-router-dom";
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import calculateAvgRating from "../utils/avgRating";
import Avatar from "../assets/images/avatar.jpg"
import Booking from "../components/Booking/Booking";
import NewsLetter from "../shared/NewsLetter";

const TourDetails = () => {
  const { id } = useParams();

  //this is an static data later we will call our data from database

  const tour = tourData.find((tour) => tour.id === id);

  //destructure properties from our object

  const {
    title,
    photo,
    desc,
    price,
    reviews,
    city,
    distance,
    maxGroupSize,
    address,
  } = tour;

  const { totalRating, avgRating } = calculateAvgRating(reviews);

  //format date

  const options = {day:"numeric",month:"long",year:"numeric"}

  const [reviewText, setReviewText]= useState("");
  const [tourRating,setTourRating] = useState(null)

  const handleReviewText = (e)=>{
    setReviewText(e.target.value);
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    alert(`${reviewText},${tourRating}`)

    // setTourRating(null)
  }


  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <div className="tourContent">
                <img src={photo} alt="" />

                <div className="tourInfo">
                  <h2>{title}</h2>

                  <div className="d-flex align-items-center gap-5">
                    <span className="tourRating d-flex align-items-center gap-1">
                      <i class="ri-star-fill"
                        style={{color:"var(--secondary-color)"}}
                      ></i>
                      {avgRating === 0 ? null : avgRating}
                      {totalRating === 0 ? (
                        "Not Rated!"
                      ) : (
                        <span>{`(${reviews?.length})`}</span>
                      )}
                    </span>

                    <span>
                      <i class="ri-map-pin-user-fill"></i>{address}
                    </span>

                  </div>

                  <div className="tourExtraDetails">
                    <span>
                    <i class="ri-map-pin-2-line"></i>{city}
                    </span>
                    <span>
                    <i class="ri-money-dollar-circle-line"></i>${price} /per person
                    </span>
                    <span>
                    <i class="ri-map-pin-time-line"></i>{distance} km
                    </span>
                    <span>
                    <i class="ri-group-line"></i>{maxGroupSize} people
                    </span>
                  </div>

                  <h5>Description</h5>
                  <p>{desc}</p>
                </div>

                {/* *******tour reviews******* */}

                <div className="tourReviews">
                  <h4>Reviews ({reviews?.length} reviews)</h4>

                  <Form onSubmit={handleSubmit}>
                    <div className="d-flex align-items-center gap-3 mb-4 ratingGroup">
                      <span onClick={()=>setTourRating(1)}>1<i class="ri-star-s-fill"></i></span>
                      <span onClick={()=>setTourRating(2)}>2<i class="ri-star-s-fill"></i></span>
                      <span onClick={()=>setTourRating(3)}>3<i class="ri-star-s-fill"></i></span>
                      <span onClick={()=>setTourRating(4)}>4<i class="ri-star-s-fill"></i></span>
                      <span onClick={()=>setTourRating(5)}>5<i class="ri-star-s-fill"></i></span>
                    </div>

                    <div className="reviewInput">
                      <input type="text" placeholder="Share your thoughts" onChange={handleReviewText} required  />
                      <button className="btn primary__btn text-white" type="submit">
                        Submit
                      </button>
                    </div>
                  </Form>

                  <ListGroup className="userReviews">
                    {
                      reviews?.map((review)=>(
                        <div className="reviewItem">
                          <img src={Avatar} alt="" />
                          <div className="w-100">
                            <div className="d-flex align-items-center justify-content-between">
                              <div>
                                <h5>Somu</h5>
                                <p>
                                  {
                                    new Date("08-04-2023").toLocaleDateString("en-US",options)
                                  }
                                </p>
                              </div>

                              <span>
                                5<i class="ri-star-s-fill"></i>
                              </span>
                            </div>

                            <h6>Amazing Tour</h6>
                          </div>
                        </div>
                      ))
                    }
                  </ListGroup>
                </div>
              </div>
            </Col>

            <Col lg="4">
              <Booking tour={tour} avgRating={avgRating}/>
            </Col>
          </Row>
        </Container>
      </section>
      <NewsLetter/>
    </>
  );
};

export default TourDetails;

import React, { useState } from 'react'
import { Button, Form, FormGroup, ListGroup, ListGroupItem } from 'reactstrap'
import "./booking.scss"
import {useNavigate} from "react-router-dom"

const Booking = ({tour,avgRating}) => {

    const {price, reviews} = tour;
    const navigate = useNavigate()

    const [credentials, setCredentials] = useState({
        userId:"01",
        userEmail:"example2email.com",
        fullName:"",
        phone:"",
        guestSize:1,
        bookAt:""

    })
    const handleChange = (e)=>{
        setCredentials((prev)=>({...prev,[e.target.id]:e.target.value}))
    }

    const serviceFee = 10;

    const totalAmount = Number(price) * Number(credentials.guestSize)  + Number(serviceFee)
    
    
    //Send data to the server
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(credentials)

        navigate("/thankYou")
    }
  return (
    <div className="booking">
        <div className="bookingTop d-flex align-items-center justify-content-between">
            <h3>${price} <span>/per person</span></h3>
            <span className="tourRating d-flex align-items-center">
                <i class="ri-star-s-fill"></i>
                {
                    avgRating === 0 ? null : avgRating
                }({reviews?.length})
            </span>
        </div>

        {/* *****Bookin form****** */}

        <div className="bookingForm">
            <h5>Information</h5>
            <Form className="bookinInfoForm" onSubmit={handleSubmit}>
                <FormGroup>
                    <input type="text" id="fullName" placeholder='Full Name'
                       required onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <input type="number" id="phone" placeholder='Phone'
                       required onChange={handleChange}/>
                </FormGroup>
                <FormGroup className='d-flex align-items-center gap-3'>
                    <input type="date" id="bookAt" placeholder=''
                       required onChange={handleChange}/>

                    <input type="number" id="guestSize" placeholder=''
                       required onChange={handleChange}/>
                </FormGroup>
            </Form>
        </div>

        {/* *****booking bottom*** */}

        <div className="bookingBottom">
            <ListGroup>
                <ListGroupItem className='border-0 px-0'>
                    <h5 className='d-flex align-itms-center gap-1'>
                        ${price} <i class="ri-close-line"></i> 1 person
                    </h5>
                    <span>${price}</span>
                </ListGroupItem>
                <ListGroupItem className='border-0 px-0'>
                    <h5 >
                        Service Charge
                    </h5>
                    <span>${serviceFee}</span>
                </ListGroupItem>
                <ListGroupItem className='border-0 px-0 total'>
                    <h5 >
                        Total
                    </h5>
                    <span>${totalAmount}</span>
                </ListGroupItem>
            </ListGroup>

            <Button className='btn primary__btn w-100 mt-4' onClick={handleSubmit} >Book Now</Button>
        </div>
    </div>
  )
}

export default Booking

import React from 'react';
import {Card,Row,Col} from 'react-bootstrap';
import css from '../Courses/Courses.css';

const Courses = (props) => {

const {Name,Sponsor,Instructor,img,Price,Key} = props.course;
    return (
<div className='course col-md-4'>

   <Card className='course-card'>
    <Card.Img variant="top" src={img}/>
    <Card.Body>
    <Card.Title>{Name}</Card.Title>
    <h4>Sponsored By: {Sponsor}</h4>
    <h5>Instructor:{Instructor}</h5>
    </Card.Body>
     <h4>Price: ${Price}</h4>
    <button className='main-button' onClick={() => props.handleAddCourse(props.course)}>Buy Now</button>
  </Card>
   
        </div>
    );
};
export default Courses;
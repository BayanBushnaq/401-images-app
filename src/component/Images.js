import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Images(props) {
    let [NumberofLikes,setNumberofLikes] = useState(0)
    const IncrementNumberOfLikes = () =>{
        setNumberofLikes(NumberofLikes +1)
        props.totalLikes()
    }
  return (
    
      <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.imageURL}/>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        <p>Num of Likes: {NumberofLikes}</p>
                    </Card.Text>
                    <Button variant="primary" onClick={IncrementNumberOfLikes}>Like</Button>
                </Card.Body>
            </Card>

  );
}

export default Images;

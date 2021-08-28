import React from "react";
import { Card } from "react-bootstrap";

export const Movies = (props) => {
  return (
    <>
      {props.data.map((item) => (
        <div key={item.imdbID} className="mx-2 ">
          <div className="justify-content-between cardPek">
            <Card style={{ width: "14rem" }} className="my-4 border-primary card">
              <Card.Img variant="top" src={item.Poster} />
              <Card.Body className="textCard text-light">
                <Card.Title className="text-center">
                  {item.Title} <hr />
                </Card.Title>
                <Card.Text className="text-center textCard">
                <span className="text-light">
                  Creado en el año: {item.Year}
                </span>
                <br/>
                    <span className="text-muted">{item.Type}</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      ))}
    </>
  );
};

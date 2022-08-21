import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, Row, Col } from "reactstrap";

const Add = () => {
  const [enteredCity, setEnteredCity] = useState("");
  const [enteredAttraction, setEnteredAttraction] = useState("");
  const [enteredMonth, setEnteredMonth] = useState("");

  const baseUrl = "http://localhost:8080/toVisit/place/add";

  let history = useHistory();

  const submitHandler = (event) => {
    event.preventDefault();
    const placesData = {
      city: enteredCity,
      attraction: enteredAttraction,
      month: enteredMonth,
    };
    // console.log(" placesData " + JSON.stringify(placesData));
    setEnteredCity("");
    setEnteredAttraction("");
    setEnteredMonth("");
    axios.post(baseUrl, placesData).then(
      () => history.push("/places") 
      // console.log(" response " + JSON.stringify(response.data))
    );
  };

  const cityChangeHandler = (event) => {
    setEnteredCity(event.target.value);
  };

  const attractionChangeHandler = (event) => {
    setEnteredAttraction(event.target.value);
  };

  const monthChangeHandler = (event) => {
    setEnteredMonth(event.target.value);
  };

  return (
    <div className="container">
      <Form style={{ display: "block", padding: 20 }} onSubmit={submitHandler}>
        <Row>
          <Col md="3"></Col>
          <Col md="6">
            <FormGroup>
              <Label for="city">City</Label>
              <Input
                type="text"
                name="city"
                id="city"
                value={enteredCity}
                onChange={cityChangeHandler}
              />
            </FormGroup>
          </Col>
          <Col md="3"></Col>
        </Row>
        <Row>
          <Col md="3"></Col>
          <Col md="6">
            <FormGroup>
              <Label for="attraction">Attraction</Label>
              <Input
                type="text"
                name="attraction"
                id="attraction"
                value={enteredAttraction}
                onChange={attractionChangeHandler}
              />
            </FormGroup>
          </Col>
          <Col md="3"></Col>
        </Row>
        <Row>
          <Col md="3"></Col>
          <Col md="6">
            <FormGroup>
              <Label for="months">Month To Visit</Label>
              <Input
                type="text"
                name="month"
                id="month"
                value={enteredMonth}
                onChange={monthChangeHandler}
              />
            </FormGroup>
          </Col>
          <Col md="3"></Col>
        </Row>
        <br />
        <Row>
          <Col md="3"></Col>
          <Col md="6">
            <Button color="primary">Submit</Button>
          </Col>
          <Col md="3"></Col>
        </Row>
      </Form>
    </div>
  );
};
export default Add;

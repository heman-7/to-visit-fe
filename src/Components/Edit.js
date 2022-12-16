import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Form, FormGroup, Label, Input, Row, Col } from "reactstrap";
import { useHistory } from "react-router";
import React from "react";

const Edit = (props) => {
  const [enteredCity, setEnteredCity] = useState("");
  const [enteredAttraction, setEnteredAttraction] = useState("");
  const [enteredMonth, setEnteredMonth] = useState("");
  const [id, setId] = useState("");

  const queryParms = props.location.search;
  const baseReadUrl = "http://localhost:8080/toVisit/place/get" + queryParms;
  const baseUpdateUrl = "http://localhost:8080/toVisit/place/update";

  useEffect(() => {
    axios.get(baseReadUrl).then((response) => {
      setEnteredCity(response.data.city);
      setEnteredAttraction(response.data.attraction);
      setEnteredMonth(response.data.month);
      setId(response.data.id);
      // console.log(response.data);
    });
  }, []);

  let history = useHistory();

  const submitHandler = (event) => {
    event.preventDefault();
    const placesData = {
      city: enteredCity,
      attraction: enteredAttraction,
      month: enteredMonth,
      id: id,
    };
    // console.log(" placesData " + JSON.stringify(placesData));
    axios.put(baseUpdateUrl, placesData).then(() => history.push("/places"));
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
            <br />
            <Button color="primary">Submit</Button>
          </Col>
          <Col md="3"></Col>
        </Row>
      </Form>
    </div>
  );
};
export default Edit;

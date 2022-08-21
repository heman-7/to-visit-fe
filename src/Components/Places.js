import {
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Button,
  Row,
  Col,
} from "reactstrap";
import axios from "axios";
import { useHistory } from "react-router";

function Places(props) {
  const baseUrl = "http://localhost:8080/toVisit/place/remove/";
  let history = useHistory();

  const deleteHandler = (id) => {
    // console.log(" id " + id);
    axios.delete(baseUrl, { params: { id: id } }).then((response) => {
      // console.log(response.data);
      props.update();
    });
  };

  const updateHandler = (id) => {
    // console.log(" id " + id);
    const path = "/edit?id=" + id;
    history.push(path);
  };

  return (
    <div className="container">
      <Card className="text-center" style={{ display: "block", padding: 10 , border: 0}}>
        <CardBody>
          <CardTitle tag="h5">{props.city}</CardTitle>
          <CardSubtitle>
            <u>Attraction</u> &nbsp;
            <b>{props.attraction}</b>
          </CardSubtitle>
          <CardText>
            <u>Months to visit</u> &nbsp;
            <b>{props.month}</b>
          </CardText>
        </CardBody>
        <Row>
        <Col md="5"></Col>
          <Col md="1">
            <Button
              color="warning"
              style={{ width: 80 }}
              onClick={() => {
                updateHandler(props.id);
              }}
            >
              Update
            </Button>
          </Col>
          <Col md="1">
            <Button
              color="danger"
              style={{ width: 80 }}
              onClick={() => {
                deleteHandler(props.id);
              }}
            >
              Delete
            </Button>
          </Col>
          <Col md="5"></Col>
        </Row>
        <br />
      </Card>
    </div>
  );
}

export default Places;

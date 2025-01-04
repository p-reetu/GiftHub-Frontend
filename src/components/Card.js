import "./Card.css";
import Col from 'react-bootstrap/Col';

export default function Card(props) {
  return (
    <Col className="mb" lg={3}>
    <div className="card-backdrop mx-auto">
      <div className="card-main">
        <div className="card-receiver">{"@"+props.gift.receiver}</div>
        <div className="card-sender">{" from @"+props.gift.sender}</div>
        <br></br>
        <br></br>
        <div className="card-image">
          <img src={props.gift.image} alt="Gift Image"></img>
        </div>
        <div className="card-content">
          <h2>{props.gift.title}</h2>
          <p>{props.gift.description}</p>
        </div>
      </div>
    </div>
    </Col>
  );
}

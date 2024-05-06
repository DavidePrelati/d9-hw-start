import {
  Alert,
  Button,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaTrashCan } from "react-icons/fa6";

const Favourite = () => {
  const favouriteCompany = useSelector(
    (state) => state.favouriteCompany.content
  );

  const dispatch = useDispatch();

  return (
    <Container className="bg-dark text-white">
      <Row>
        <Col xs={12}>
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="display-4">Le tue Company preferite</h1>
            <Link className="btn btn-dark text-white" to="/">
              Home
            </Link>
          </div>
        </Col>
        <Col xs={12}>
          {favouriteCompany.length === 0 ? (
            <div className="d-flex justify-content-between align-items-center py-3">
              <Alert className="m-0" variant="danger">
                {" "}
                Non hai messo nessuna Company tra i preferiti
              </Alert>
              <Link className="btn btn-success" to="/">
                Aggiungi Company
              </Link>
            </div>
          ) : (
            <ListGroup className="py-2">
              {favouriteCompany.map((company) => (
                <ListGroupItem
                  key={company}
                  className="d-flex justify-content-between align-items-center"
                >
                  <Link to={`/${company}`} className="m-0">
                    {company}
                  </Link>
                  <Button
                    variant="danger"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_FAVOURITE",
                        payload: company,
                      })
                    }
                  >
                    <FaTrashCan />
                  </Button>
                </ListGroupItem>
              ))}
            </ListGroup>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Favourite;

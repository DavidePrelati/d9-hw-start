import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

const Job = ({ data }) => {
  const dispatch = useDispatch();
  const favouriteCompany = useSelector(
    (state) => state.favouriteCompany.content
  );

  return (
    <Row className="mx-0 mt-4 p-4">
      <Col xs={1}>
        {favouriteCompany.includes(data.company_name) ? (
          <FaStar
            className="text-warning"
            onClick={() =>
              dispatch({
                type: "REMOVE_FROM_FAVOURITE",
                payload: data.company_name,
              })
            }
          />
        ) : (
          <FaRegStar
            onClick={() =>
              dispatch({
                type: "ADD_TO_FAVOURITE",
                payload: data.company_name,
              })
            }
          />
        )}
      </Col>
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={9}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row>
  );
};

export default Job;

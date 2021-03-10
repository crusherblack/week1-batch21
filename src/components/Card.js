import { useHistory } from "react-router-dom";

const Card = ({ product }) => {
  const history = useHistory();

  const { id, title, img } = product;

  return (
    <div
      className="card mb-3"
      onClick={() => {
        history.push(`/product/${id}`);
      }}
      style={{
        cursor: "pointer",
      }}
    >
      <img
        src={img}
        alt={title}
        style={{
          height: "140px",
          objectFit: "cover",
        }}
      />
      <div className="card-body ">
        <p
          style={{
            height: "40px",
          }}
        >
          {title}
        </p>
        <div className="d-flex justify-content-center align-items-center">
          <small className="font-weight-bold">Rp 500.000</small>
        </div>
      </div>
    </div>
  );
};

export default Card;

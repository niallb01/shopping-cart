import { Card } from "react-bootstrap";
import FormatCurrency from "../utils/FormatCurrency";

type StoreItemProps = {
  id: string;
  price: number;
  name: string;
  imgUrl: string;
};

const StoreItem = ({ id, price, name, imgUrl }: StoreItemProps) => {
  return (
    <>
      <Card>
        <Card.Img
          variant="top"
          src={imgUrl}
          height="200px"
          style={{ objectFit: "cover" }} // fixes aspect ratio
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="d flex justify-content-between align-items-baseline mb-4">
            <span className="fs-2">{name}</span>
            <span className="ms-2 text-muted">{FormatCurrency(price)}</span>
          </Card.Title>
        </Card.Body>
      </Card>
    </>
  );
};

export default StoreItem;

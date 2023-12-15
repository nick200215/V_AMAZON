import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import AmazonChoice from "../../../assets/img/amazonChoice.png";
import StarRating from "./starRating";
import { Product } from "../../../types/products";

interface Props {
  data?: Product;
  isLoading: boolean;
}

const ProductInfo = ({ data, isLoading }: Props) => {
  const { name, description, brand, model, price } = data || {};

  if (!data || isLoading) {
    return null;
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3 border-b pb-3 mb-5">
        <h2 className="text-black text-2xl ">{name}</h2>

        <div>
          <StarRating />
        </div>

        <img src={AmazonChoice} alt="amazonChoice" className="w-32 " />
      </div>

      <h2 className="text-black text-2xl font-bold">
        <sup className="font-thin text-base">$</sup>
        {price}
      </h2>

      <div>
        <h3>
          <span className="font-bold">Brand: </span> {brand}
        </h3>
        <h3>
          <span className="font-bold">model: </span> {model}
        </h3>
      </div>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
        >
          <p>About this item</p>
        </AccordionSummary>
        <AccordionDetails>
          <p>{description}</p>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default ProductInfo;

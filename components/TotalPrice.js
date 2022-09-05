import { useContext } from "react";
import DataContext from "../contexts/DataContext";

function TotalPrice() {
  const { pushData } = useContext(DataContext);

  const sumOfPrices = () => {
    const subtotal = pushData.reduce((acc, product) => {
      return (
        acc +
        Number(
          product.productPrice.discountedPrice
            ? product.productPrice.discountedPrice
            : product.productPrice.orignalPrice
        )
      );
    }, 0);
    return `${subtotal}:-`;
  };

  return (
    <div>{!pushData.length ? "" : <p>Total Price: {sumOfPrices()}</p>}</div>
  );
}

export default TotalPrice;

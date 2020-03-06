import React from "react";
import ProductItem from "./ProductItem";

function ProductList({ products }) {
  const productItems = products.map(pr => <div key={pr.Variety} className="col-sm-3">
    <ProductItem {...pr} />
  </div>);

  return (
    <div className="container-fluid">
      <div className="row">
        {productItems}
      </div>
    </div>
  );
}

export default ProductList;

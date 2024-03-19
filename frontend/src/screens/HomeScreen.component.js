import React from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product.component";
import { useGetProductsQuery } from "../slices/productsSlice";
function HomeScreen() {
  const { data: products, isLoading, error } = useGetProductsQuery();
  return (
    <>
      {isLoading ? (
        <h2>isLoading</h2>
      ) : error ? (
        <div>{error.data?.message || error.error}</div>
      ) : (
        <>
          <h1>Latest Products</h1>
          <Row>
            {products.map((product) => {
              return (
                <Col key={product._id} sm={12} lg={4} xl={3}>
                  <Product product={product} />
                </Col>
              );
            })}
          </Row>
        </>
      )}
    </>
  );
}

export default HomeScreen;

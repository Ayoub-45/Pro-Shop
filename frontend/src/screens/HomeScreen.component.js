import React from "react";
import { Row, Col } from "react-bootstrap";
import Message from "../components/Message.component";
import Product from "../components/Product.component";
import Loader from "../components/Loader.component";
import { useGetProductsQuery } from "../slices/productsSlice";
function HomeScreen() {
  const { data: products, isLoading, error } = useGetProductsQuery();
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error.data?.message || error.error}</Message>
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

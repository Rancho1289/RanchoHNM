import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {

  let { id } = useParams()

  // const getProductDetail = async () => {
  //   let url = `http://localhost:3002/products/${id}`;
  //   let response = await fetch(url);
  //   let data = await response.json();
  //   console.log("test", data);
  // }


  const [product, setProduct] = useState(null)

  const getProductDetail = async () => {
    try {
      let url = `https://my-json-server.typicode.com/Rancho1289/RanchoHNM/products/${id}`;
      let response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      let data = await response.json();
      console.log("test", data);
      setProduct(data)
    } catch (e) {
      console.error("Fetching error:", e);
    }
  };


  useEffect(() => {
    getProductDetail()
  }, [])

  return (
    <>
      <Container>
        <Row>
          <Col className='product-img'>
            <img src={product?.img} alt="" />
          </Col>
          <Col>
            <div>{product?.title}</div>
            <div>{product?.price}</div>
          </Col>
        </Row>
      </Container>
    </>
    // <div>
    //   ProductDetail
    // </div>
  )
}

export default ProductDetail


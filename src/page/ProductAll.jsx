
import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import { useDebounce } from 'use-debounce'

const ProductAll = () => {

  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();
  const [debouncedQuery] = useDebounce(query, 500); // 500ms 디바운싱
  // const getProducts = async () => {
  //   let searchQuery = query.get('q')||"";
  //   console.log("searchQuery: ", searchQuery);
  //   let encodedQuery = encodeURIComponent(searchQuery);
  //   let url = `http://localhost:3002/products?q=${encodedQuery}`;
  //   console.log("testssss",url)
  //   let response = await fetch(url)
  //   let data = await response.json()
  //   // console.log(data)
  //   setProductList(data)
  // }

  // useEffect(() => {
  //   getProducts()
  // }, [query])


  const getProducts = async () => {
    const url = `https://my-json-server.typicode.com/Rancho1289/RanchoHNM`;
    // const url = `http://localhost:3001/products`;
    // const url = `http://localhost:3001/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
  
    // URL에서 받은 검색 쿼리
    let searchQuery = debouncedQuery.get('q') || "";
  
    // 데이터 필터링
    let filteredData = data.filter(item =>
      item.title.includes(searchQuery)
    );
  
    setProductList(filteredData);
  };
  
  useEffect(() => {
    getProducts();
  }, [debouncedQuery]); 


  return (

    <div className='product-List'>
      <Container>
        <Row>
          {productList.map((menu) => (<Col lg={3}><ProductCard item={menu} /></Col>))}
        </Row>
      </Container>
    </div>
  )
}

export default ProductAll

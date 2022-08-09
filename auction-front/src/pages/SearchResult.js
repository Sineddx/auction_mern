import styled from "styled-components";
import { useEffect, useState } from "react";
import { SearchItem, SearchFilter } from "../components";
import { useAppContext } from "../context/appContext";
const SearchResult = () => {
  const { isLoading, getProducts, page, products } = useAppContext();
  useEffect(() => {
    getProducts();
  }, []);
  return isLoading ? (
    <div>loading...</div>
  ) : (
    <Wrapper>
      <SearchFilter />
      {products.map((p, index) => {
        return <SearchItem key={index} />;
      })}
    </Wrapper>
  );
};
const Wrapper = styled.section``;
export default SearchResult;

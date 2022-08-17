import styled from "styled-components";
import { useEffect } from "react";
import {
  SearchItem,
  SearchFilter,
  Loading,
  PageBtnContainer,
} from "../components";
import { useAppContext } from "../context/appContext";
const SearchResult = () => {
  const {
    isLoading,
    products,
    totalProducts,
    numOfPages,
    page,
    searchCategory,
    searchStates,
    searchAuctionType,
    sort,
    search,
    refresh,
    getProducts,
  } = useAppContext();

  if (isLoading) {
    return (
      <Wrapper>
        <SearchFilter />
        <Loading />
      </Wrapper>
    );
  }
  if (products.length === 0) {
    return (
      <Wrapper>
        <SearchFilter />
        <h2>Brak produktów o podanych parametrach</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <SearchFilter />
      <div className="results-number">
        Znalezionych wyników: {totalProducts}
      </div>
      {products.map((auctionItem, index) => {
        return <SearchItem key={index} auctionItem={auctionItem} />;
      })}
      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .results-number {
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }
`;
export default SearchResult;

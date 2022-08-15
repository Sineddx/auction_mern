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
    getProducts,
    page,
    products,
    search,
    refresh,
    sort,
    searchStates,
    searchCategory,
    searchAuctionType,
    totalProducts,
    numOfPages,
  } = useAppContext();
  useEffect(() => {
    getProducts();
  }, [refresh, sort, searchStates, searchCategory, searchAuctionType, page]);

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

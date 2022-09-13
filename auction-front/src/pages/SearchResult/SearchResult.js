import {
  SearchItem,
  SearchFilter,
  Loading,
  PageBtnContainer,
} from "../../components";
import { useAppContext } from "../../context/appContext";
import Wrapper from "./SearchResult.styled";
const SearchResult = () => {
  const { isLoading, offers, totalOffers, numOfPages } = useAppContext();

  if (isLoading) {
    return (
      <Wrapper>
        <SearchFilter />
        <Loading />
      </Wrapper>
    );
  }
  if (offers.length === 0) {
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
      <div className="results-number">Znalezionych wyników: {totalOffers}</div>
      <div className="all-items">
        {offers.map((auctionItem, index) => {
          return <SearchItem key={index} auctionItem={auctionItem} />;
        })}
        {numOfPages > 1 && <PageBtnContainer />}
      </div>
    </Wrapper>
  );
};

export default SearchResult;

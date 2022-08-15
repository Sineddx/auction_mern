import styled from "styled-components";
import { FormRowSelect } from "./index";
import {
  categoriesList,
  sortList,
  typesList,
  statesList,
} from "../utils/arrays";
import { useAppContext } from "../context/appContext";

const SearchFilter = () => {
  const {
    searchCategory,
    searchStates,
    searchAuctionType,
    sort,
    handleChange,
    clearFilter,
  } = useAppContext();
  const handleSearch = (e) => {
    handleChange({ name: e.target.name, value: e.target.value });
  };
  const handleClear = () => {
    clearFilter();
  };
  return (
    <Wrapper>
      <div className="filter-area">
        <FormRowSelect
          labelText="Kategoria"
          name="searchCategory"
          value={searchCategory}
          handleChange={handleSearch}
          list={["Wszystkie", ...categoriesList]}
        />
        <FormRowSelect
          labelText="Województwa"
          name="searchStates"
          value={searchStates}
          handleChange={handleSearch}
          list={["Wszystkie", ...statesList]}
        />
        <FormRowSelect
          labelText="Rodzaj aukcji"
          name="searchAuctionType"
          value={searchAuctionType}
          handleChange={handleSearch}
          list={["Wszystkie", ...typesList]}
        />
        <FormRowSelect
          labelText="Sortuj według"
          name="sort"
          value={sort}
          handleChange={handleSearch}
          list={["Wszystkie", ...sortList]}
        />
        <div className="clear-values" onClick={handleClear}>
          Wyczyść
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 1rem auto 0 auto;
  width: 65%;
  min-height: 100%;
  .filter-area {
    width: 100%;
    background-color: #fff;
    display: grid;
    padding: 0.5rem;
    grid-template-columns: 1fr 1fr;
    column-gap: 2rem;
    row-gap: 0.5rem;
  }
  .clear-values {
    background-color: var(--green-dark);
    color: #fff;
    text-align: center;
    cursor: pointer;
  }
`;
export default SearchFilter;

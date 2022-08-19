import Wrapper from "../assets/wrappers/components/SearchFilter";
import { FormRowSelect } from "./index";
import {
  categoriesList,
  sortList,
  typesList,
  statesList,
} from "../utils/arrays";
import { useAppContext } from "../context/appContext";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

const SearchFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    searchCategory,
    searchStates,
    searchAuctionType,
    sort,
    handleChange,
    clearFilter,
    getOffers,
    prepareFilter,
  } = useAppContext();

  const handleSearch = (e) => {
    handleChange({ name: e.target.name, value: e.target.value });
    const { name, value } = e?.target;
    searchParams.set(name, value);
    searchParams.set("page", 1);
    setSearchParams(searchParams);
  };
  const handleClear = () => {
    clearFilter();
  };
  useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams]);
    prepareFilter(currentParams);
    getOffers(currentParams);
  }, [searchParams]);

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

export default SearchFilter;

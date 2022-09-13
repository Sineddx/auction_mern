import Wrapper from "./PageBtnContainer.styled";
import { useAppContext } from "../../context/appContext";
import { useSearchParams } from "react-router-dom";
const PageBtnContainer = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { numOfPages, page, changePage } = useAppContext();
  const prevPage = () => {
    let newPage = page - 1;
    if (newPage < 1) {
      newPage = 1;
    }
    changePage(newPage);

    searchParams.set("page", newPage);
    setSearchParams(searchParams);
  };
  const nextPage = () => {
    let newPage = page + 1;
    if (newPage > numOfPages) {
      newPage = numOfPages;
    }
    changePage(newPage);
    searchParams.set("page", newPage);
    setSearchParams(searchParams);
  };
  const handleChangePage = (page) => {
    changePage(page);
    searchParams.set("page", page);
    setSearchParams(searchParams);
  };
  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1;
  });
  return (
    <Wrapper>
      <button className="prev-btn" onClick={prevPage}>
        Poprzednia
      </button>
      <div className="btn-container">
        {pages.map((pageNumber) => {
          return (
            <button
              type="button"
              className={
                pageNumber === Number(searchParams.get("page"))
                  ? "pageBtn active"
                  : "pageBtn"
              }
              key={pageNumber}
              onClick={() => handleChangePage(pageNumber)}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>
      <button className="next-btn" onClick={nextPage}>
        Następna
      </button>
    </Wrapper>
  );
};

export default PageBtnContainer;

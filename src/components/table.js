import { React } from "react";
// import PropTypes from "prop-types";

const Table = ({
  list,
  pageInformation,
  tablePrevPage,
  tableNextPage,
  tablePages,
  addToCart,
}) => {
  function prevPage() {
    if (pageInformation.currentPage > 1) {
      const prev = {
        currentPage: pageInformation.currentPage - 1,
        startRange: pageInformation.startRange - 10,
        endRange: pageInformation.endRange - 10,
      };
      tablePrevPage(prev);
    }
  }
  function nextPage() {
    if (pageInformation.currentPage < 20) {
      const next = {
        currentPage: pageInformation.currentPage + 1,
        startRange: pageInformation.startRange + 10,
        endRange: pageInformation.endRange + 10,
      };
      tableNextPage(next);
    }
    // tableNextPage()
  }
  function calculatePages() {
    var pages = Math.ceil(tablePages / 10);
    return pages;
  }

  function addToCartHelper(p) {
    addToCart(p);
  }

  return (
    <div className="mx-4">
      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">PRODUCT NAME</th>
            <th scope="col">PRICE $</th>
            <th scope="col">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {list.map((p, i) => {
            return (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{p._name}</td>
                <td>{p._value}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      addToCartHelper(p);
                    }}
                  >
                    ADD
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <nav aria-label="Page navigation">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <button
              className="page-link"
              onClick={prevPage}
              aria-label="Previous"
            >
              <span aria-hidden="true">&laquo;</span>
            </button>
          </li>
          <li className="page-item">
            <button className="page-link">
              {pageInformation !== undefined ? pageInformation.currentPage : ""}
            </button>
          </li>

          <li className="page-item">
            <button className="page-link" onClick={nextPage} aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </button>
          </li>
          {/* <div className="" */}
          <div className="pt-2 mx-4">
            <span>
              {pageInformation.currentPage} of {calculatePages()}
            </span>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Table;

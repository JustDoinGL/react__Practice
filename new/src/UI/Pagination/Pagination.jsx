import React from "react";
import classes from "./Pagination.module.css";
import { getPagesArray } from "../../utils/page";

function Pagination({ changePage, totalPages, page }) {
  let pagesArray = getPagesArray(totalPages);

  return (
    <div className={classes.pages}>
      {pagesArray.map((e) => (
        <button
          onClick={() => changePage(e)}
          key={e}
          className={
            page === e ? `${classes.pagesItem}` : `${classes.pagesItemActive}`
          }
        >
          {e}
        </button>
      ))}
    </div>
  );
}

export default Pagination;

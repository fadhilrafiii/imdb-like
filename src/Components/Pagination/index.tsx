import React, { useMemo } from 'react';

import './index.css';
import { PaginationProps } from './Types';

const Pagination = ({ page, totalPages, onChangePage }: PaginationProps) => {
  const pages = useMemo(() => {
    const pageArr = [1];
    const startIndexDesktop = page - 4 > 2 ? page - 4 : 2;
    const startIndexMobile = page - 2 > 2 ? page - 2 : 2;
    const startIndex =
      window.innerWidth > 540 ? startIndexDesktop : startIndexMobile;
    const limitBtnNumber = window.innerWidth > 540 ? 10 : 4;

    for (let i = startIndex; i < totalPages; i += 1) {
      if (Math.abs(i - page) <= 2 || pageArr.length < limitBtnNumber) {
        pageArr.push(i);
      }
    }

    if (totalPages > 1) pageArr.push(totalPages);
    return pageArr;
  }, [totalPages, page]);

  return (
    <div className="pagination">
      <button
        type="button"
        className="page-btn prev"
        disabled={page === 1}
        onClick={() => onChangePage(page - 1)}
      >
        &lt;
      </button>
      <div className="pagination-btn">
        {pages.map((pg: number, idx: number) => {
          return (
            <>
              <button
                key={pg}
                type="button"
                className={pg === page ? 'page-btn active' : 'page-btn'}
                onClick={() => onChangePage(pg)}
              >
                {pg}
              </button>
              {pg + 1 < pages[idx + 1] && (
                <div className="dot-dot-dot">. . .</div>
              )}
            </>
          );
        })}
      </div>
      <button
        type="button"
        className="page-btn next"
        disabled={page === totalPages}
        onClick={() => onChangePage(page + 1)}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;

import React from "react";
import PropTypes from "prop-types";
import ReactPaginate from "react-paginate";
import { useRouter } from "next/router";

const Pagination = ({ meta }) => {
  const { push } = useRouter();

  const handleChangePage = ({ selected }) => {
    push(`/products?page=${selected + 1}`);
  };

  return (
    <>
      <div className="flex gap-3 text-xs text-gray-400 items-center justify-center">
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next"
          onPageChange={(e) => handleChangePage(e)}
          pageRangeDisplayed={5}
          marginPagesDisplayed={2}
          pageCount={Math.ceil(1600 / meta.per_page)}
          previousLabel="Previous"
          renderOnZeroPageCount={null}
          containerClassName="flex gap-4 text-xs text-gray-400 items-center justify-center"
          pageClassName="rounded border border-purple-200 text-center py-2 px-3 text-sm"
          activeClassName="bg-purple-100 border border-purple-200"
          disabledClassName="cursor-not-allowed"
        />
      </div>
      <div className="text-xs text-gray-400 text-center mt-4">
        {" "}
        Showing {meta.from}-{meta.to} of {meta.total} Items
      </div>
    </>
  );
};

Pagination.propTypes = {
  meta: PropTypes.object,
};
// currentPage, perPage,
export default Pagination;

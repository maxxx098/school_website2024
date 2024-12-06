import React from 'react';

const Pagination = ({ totalPosts, postsPerPage, setCurrentPage, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='pagination'>
      {pageNumbers.map((page, index) => (
        <button
          key={index}
          onClick={() => setCurrentPage(page)}
          className={`page-btn ${currentPage === page ? 'active' : ''}`}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;




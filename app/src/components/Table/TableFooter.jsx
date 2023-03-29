import { useEffect, useState } from 'react'

const TableFooter = ({ range, setPage, page, slice }) => {
    useEffect(() => {
      if (slice.length < 1 && page !== 1) {
        setPage(page - 1);
      }
    }, [slice, page, setPage]);
    return (
        <nav className="flex items-center justify-between pt-4" aria-label="Table navigation">
        <span className="text-sm font-normal text-gray-500 ">Showing <span className="font-semibold text-gray-900 ">1-10</span> of <span className="font-semibold text-gray-900 ">1000</span></span>
        <ul className="inline-flex items-center -space-x-px">
            {range.map((el, index) => (
            <li key={index}>
                    <a onClick={() => setPage(el)} className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-ghost-white hover:text-gray-700 ">{el}</a>
                </li>
            ))}
        </ul>
      </nav>
    );
  };
  
  export default TableFooter;
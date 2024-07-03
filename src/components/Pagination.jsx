import React from 'react'
import Icon from '@mdi/react';
import { mdiSkipNext, mdiSkipPrevious } from '@mdi/js';

export default function Pagination({currentPage = 1, itemsPerPage, length, onPageChange}) {

  const pageCont = Math.ceil(length / itemsPerPage) ;
  const pages = [];
  
  for(let i = 1; i <= pageCont; i++){
    pages?.push(i);
  }
  return (
    <div>
  {length && length > 0 &&
  <div className='row rowPaginate mx-2 my-2'>
    <div className='col-6'>
    <ul className="pagination pagination-sm">
  <li>
      <button 
          className="nextPrevieus" 
          onClick={() => onPageChange(currentPage - 1)}
          disabled={(currentPage === 1)}
          >
        <Icon path={mdiSkipPrevious} size={1} style={{color: currentPage === 1 ? "#9ea5b2" : "#E60012", fontSize: 30}}  /> 
        </button>
    </li>
  <li className="itemPaginate">
  <select name="paginate" className='selectPaginate'
           onChange={ v => onPageChange(v.currentTarget.value)}
           value={currentPage}
         >
          {
            pages?.map((page, index) =>           
            <option className="page-link" key={index} value={page}> page {page}</option>
            )
          }
         </select>
  </li>

     <li>
      <button 
           className="nextPrevieus"
           disabled={(currentPage && currentPage === pageCont)}
           onClick={() => onPageChange(currentPage + 1)}
           >
            <Icon path={mdiSkipNext} size={1} style={{color: (currentPage && currentPage === pageCont) ? "#9ea5b2" : "#E60012", fontSize: 30}} />
        
        
      </button>
    </li> 
  </ul>
    </div>

    <div className='col-6 text-end'>
     <span>page {currentPage} - sur {pageCont} pages</span>
    </div>

  </div>

   }
</div>
  )
};

Pagination.getData = (items, currentPage, itemsPerPage) => {
  const start = currentPage * itemsPerPage - itemsPerPage;
  return items?.slice(start, start + itemsPerPage);
}

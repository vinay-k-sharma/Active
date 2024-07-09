import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const goToNextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };

  const goToPrevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  return (
    nPages > 0 && (
      <div className="mt-6">
        <ul className="flex justify-center space-x-2">
          <li 
            className="grid place-items-center focus:outline-none hover:bg-[#34BF49] text-gray-500 hover:text-white" 
          >
            <button
              onClick={goToPrevPage}
              className="px-4 py-1" 
            >
              <GrPrevious />
            </button>
          </li>
          {pageNumbers.map((pgNumber) => (
            <li
              key={pgNumber}
              className={` grid place-items-center hover:bg-[#34BF49] hover:text-white cursor-pointer transition-all 
              ${
                currentPage === pgNumber
                  ? "bg-[#34BF49] text-white"
                  : " text-gray-500"
              }`}
            >
              <button
                className="text-center px-4 py-1"
                onClick={() => setCurrentPage(pgNumber)}
              >
                {pgNumber}
              </button>
            </li>
          ))}
          <li 
            className="grid place-items-center focus:outline-none hover:bg-[#34BF49] text-gray-500 hover:text-white" 
          >
            <button
              onClick={goToNextPage}
              className="px-4 py-1" 
            >
              <GrNext />
            </button>
          </li>
        </ul>
      </div>
    )
  );
};

export default Pagination;

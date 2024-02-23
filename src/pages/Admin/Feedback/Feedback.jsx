import React, { useState } from 'react';
import AdminHeader from '@/components/admin/AdminHeader';
import useGetAllFeedback from '@/hooks/FeedbackHook/useGetAllFeedback';
import { FaRegTrashCan } from 'react-icons/fa6';
import useDeleteFeedback from '@/hooks/FeedbackHook/useDeleteFeedback';
import Rating from '@mui/material/Rating';

const Feedback = () => {
  const pageSize = 20;
  const { data: feedback, isLoading, refetch } = useGetAllFeedback();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRating, setSelectedRating] = useState(null);

  const indexOfLastItem = currentPage * pageSize;
  const indexOfFirstItem = indexOfLastItem - pageSize;
  let filteredFeedback = feedback;

  if (selectedRating !== null) {
    filteredFeedback = feedback?.filter(item => item.rating === selectedRating);
  }

  const currentFeedback = filteredFeedback?.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredFeedback?.length / pageSize);

  const paginate = pageNumber => setCurrentPage(pageNumber);
  const { mutate: deleteFeedback } = useDeleteFeedback();

  const deleteOneFeedback = async id => {
    const status = window.confirm(`¿Estás seguro de eliminar el feedback?`);
    if (status) {
      deleteFeedback(id);
      refetch();
    }
  };

  const handleRatingChange = rating => {
    setSelectedRating(rating);
    setCurrentPage(1);
  };

  return (
    <>
      <AdminHeader
        title={`Feedback`}
        description="Aquí podrás leer el feedback de los encuestados"
      />
      <div className="relative overflow-x-auto rounded-lg p-3 m-3 mt-10 bg-white border-2 w-5/6 mx-auto">
        <div className="flex justify-center">
          <div className="mt-4 mb-2 flex items-center">
            <label htmlFor="ratingFilter" className="mr-2">
              Filtrar por rating:
            </label>
            <select
              id="ratingFilter"
              value={selectedRating || ''}
              onChange={e =>
                handleRatingChange(e.target.value !== '' ? parseInt(e.target.value) : null)
              }
              className="border border-gray-300 rounded-md p-1"
            >
              <option value="">Todos</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
        <table className="table-auto w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-900 border-y-3 border-black">
            <tr>
              <th scope="col" className="hidden sm:table-cell px-6 py-3"></th>
              <th scope="col" className="px-6 py-3">
                Feedback
              </th>
              <th scope="col" className="pr-12 py-3 text-end ">
                Rating
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Eliminar
              </th>
            </tr>
          </thead>
          <tbody className="text-#5C5E64 divide-y divide-slate-#5C5E64 px-6 border-t">
            {currentFeedback?.map((feedbackItem, index) => (
              <tr key={feedbackItem.id}>
                <th
                  scope="row"
                  className="hidden sm:table-cell px-2 py-2 font-medium whitespace-nowrap w-2 text-center"
                >
                  {(currentPage - 1) * pageSize + index + 1}.-
                </th>
                <th
                  scope="row"
                  className="px-2 py-2 font-medium whitespace-normal w-auto overflow-auto min-w-[10rem]"
                >
                  {feedbackItem.feedback}
                </th>
                <th
                  scope="row"
                  className="px-2 py-2 font-medium whitespace-normal w-auto overflow-auto min-w-[10rem] text-end"
                >
                  <Rating defaultValue={feedbackItem.rating} readOnly />
                </th>
                <td className="px-3 py-2 ms-2 font-medium whitespace-nowrap w-10 text-center">
                  <button
                    className="p-1 border hover:border-neutral-400 border-white rounded-md transition-all hover:scale-105"
                    onClick={() => deleteOneFeedback(feedbackItem.id)}
                  >
                    <FaRegTrashCan size={26} color="Crimson" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center mt-4">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => paginate(i + 1)}
              className={`px-3 py-1 mx-1 ${
                currentPage === i + 1 ? 'bg-gray-800 text-white' : 'bg-gray-300'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Feedback;

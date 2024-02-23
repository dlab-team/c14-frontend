import { useState } from 'react';
import AdminHeader from '@/components/admin/AdminHeader';
import useGetAllFeedback from '@/hooks/FeedbackHook/useGetAllFeedback';

const Feedback = () => {
  const pageSize = 20;
  const { data: feedback, isLoading, refetch } = useGetAllFeedback();
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * pageSize;
  const indexOfFirstItem = indexOfLastItem - pageSize;
  const currentFeedback = feedback?.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(feedback?.length / pageSize);
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <>
      <AdminHeader
        title={`Feedback`}
        description="Aquí podrás leer el feedback de los encuestados"
      />
      <div className="relative overflow-x-auto rounded-lg p-3 m-3 mt-10 bg-white border-2 w-5/6 mx-auto">
        <table className="table-auto w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-900 border-y-3 border-black">
            <tr>
              <th scope="col" className="hidden sm:table-cell px-6 py-3"></th>
              <th scope="col" className="px-6 py-3">
                Feedback
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Rating
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
                  className="px-2 py-2 font-medium whitespace-normal w-auto overflow-auto min-w-[10rem] text-center"
                >
                  {feedbackItem.rating}
                </th>
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

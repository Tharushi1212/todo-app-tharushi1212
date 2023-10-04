import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch } from 'react-redux';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { fetchTasks } from '../Actions/taskActions';
import { useSelector } from 'react-redux';
import moment from 'moment';

const Tasks = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const dispatch = useDispatch();
  const data = useSelector((state) => state?.user?.data);

  console.log(data);

  useEffect(() => {
    fetchTasks(dispatch);
  }, []);

  const itemsPerPage = 8; // Number of items to display per page
  const pageCount = Math.ceil(data?.length / itemsPerPage); // Calculate the total number of pages

  // Slice the data array to display only the items for the current page
  const displayedData = data?.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  // Handle page change
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th className="task-title-text">Tasks</th>
          </tr>
          <tr>
            <th>id</th>
            <th>todo</th>
            <th>priority</th>
            <th>createdBy</th>
            <th>completed</th>
          </tr>
        </thead>
        <tbody>
          {displayedData?.map((item, index) => (
            <tr key={index}>
              <td>bell</td>
              <td>{item.todo}</td>
              <td>{item.priority}</td>
              <td>{item.completed === false ? 'false' : 'true'}</td>
              <td>{moment(item.createdAt).format('MMM DD')}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination-container">
        {/* Pagination component */}
        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          breakLabel={null}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageChange}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />
      </div>
    </div>
  );
};

const TasksWrapper = () => {
  return (
    <Provider store={store}>
      <Tasks />
    </Provider>
  );
};

export default TasksWrapper;

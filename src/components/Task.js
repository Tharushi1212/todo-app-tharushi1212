import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch } from 'react-redux';
import { Provider } from 'react-redux';
import { useSelector } from 'react-redux';
import moment from 'moment';

import store from '../redux/store';
import { fetchTasks } from '../Actions/taskActions';
import bell from '../assets/images/bell-ringing-03.png';
import '../assets/css/styles.css';

const Tasks = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const dispatch = useDispatch();
  const data = useSelector((state) => state?.user?.data);
  const itemsPerPage = 8; // Number of items to display per page
  const pageCount = Math.ceil(data?.length / itemsPerPage); // Calculate the total number of pages

  //call fetchTsks function to get all the data from given API
  useEffect(() => {
    fetchTasks(dispatch);
  }, []);

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
    // task table wrapper
    <div className="component-wrapper">
      {/* task table */}
      <table>
        <thead>
          <th className="activity-title-text">Tasks</th>
        </thead>

        <tbody>
          {/* map data fetched from the fetchTasks function */}
          {displayedData?.map((item, index) => (
            <tr key={index}>
              <td className="icon-bell">
                {/* define bell icons with priority */}
                {item.priority === 'HIGH' ? (
                  <img
                    src={bell}
                    alt="bell"
                    className="High-priority-bell common-bell"
                  />
                ) : item.priority === 'MEDIUM' ? (
                  <img
                    src={bell}
                    alt="bell"
                    className="Medium-priority-bell common-bell"
                  ></img>
                ) : item.priority === 'LOW' ? (
                  <img
                    src={bell}
                    alt="bell"
                    className="Low-priority-bell common-bell"
                  ></img>
                ) : null}
              </td>

              {/* task */}
              <td className="task-grid-font-wrapper">
                <div className="grid-font">{item.todo}</div>

                <button className="link-button">
                  {item.completed === false ? <a>Mark as done</a> : <></>}
                </button>
              </td>

              {/* done or in-progress lable */}
              <td className="align-status-lable">
                {item.completed === false ? (
                  <label className="In-progress-lable status-button">
                    In-progress
                  </label>
                ) : (
                  <label className="done-lable status-button">Done</label>
                )}
              </td>

              {/* created date */}
              <td className="date">
                {moment(item.createdAt).format('MMM DD')}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* pagination wrapper */}
      <div className="pagination-container">
        {/* Pagination component */}
        <ReactPaginate
          previousLabel={'<'}
          nextLabel={'>'}
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

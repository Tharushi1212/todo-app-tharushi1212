//Task priority chart component
import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDispatch } from 'react-redux';
import { fetchTasks } from '../Actions/taskActions';
import { useSelector } from 'react-redux';

//importing assets
import '../assets/css/styles.css';
import blue from '../assets/images/blue.png';
import red from '../assets/images/red.png';
import yellow from '../assets/images/yellow.png';

const TasksPriorities = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state?.user?.data);

  //call fetchTasks function to get all the taks data by given API
  React.useEffect(() => {
    fetchTasks(dispatch);
  }, []);

  //pie chart size
  const size = {
    width: 300,
    height: 200,
  };

  // Create pie chart data
  const pieChartData = [
    {
      name: 'High',
      value: data.filter((task) => task.priority === 'HIGH').length,
      color: '#EB5757',
    },
    {
      name: 'Medium',
      value: data.filter((task) => task.priority === 'MEDIUM').length,
      color: '#F2C94C',
    },
    {
      name: 'Low',
      value: data.filter((task) => task.priority === 'LOW').length,
      color: '#2F80ED',
    },
  ];

  return (
    <div>
      <div className="task-priority-title">
        <text>Tasks Priorities</text>
      </div>

      <div class="divider"></div>

      {/* pie chart component wrapper and the MUI pie chart */}
      <div className="pie-chart-and-description-wrapper">
        <PieChart
          series={[
            {
              data: pieChartData,
              innerRadius: 50,
              colors: pieChartData.map((data) => data.color),
            },
          ]}
          {...size}
        ></PieChart>

        {/* task priority legend section */}
        <div className="task-priority-legend">
          <div className="legend-series">
            <img src={red} alt="colors" className="legend-series-color" />
            <text className="task-priority-levels">High</text>
          </div>

          <div className="legend-series">
            <img src={yellow} alt="colors" className="legend-series-color" />
            <text className="task-priority-levels">Medium</text>
          </div>

          <div className="legend-series">
            <img src={blue} alt="colors" className="legend-series-color" />
            <text className="task-priority-levels">Low</text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TasksPriorities;

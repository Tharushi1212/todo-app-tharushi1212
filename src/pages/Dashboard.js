import React, { Fragment } from 'react';

import bellOff from '../assets/images/Bell-off.png';
import profileImage from '../assets/images/Ellipse 6.png';
import profileExpandArrow from '../assets/images/Chevron-down.png';
import closeIcon from '../assets/images/Close.png';
import welocmeSectionImage from '../assets/images/Group 1770.png';
import dashboardIcon from '../assets/images/Dashboard.png';
import '../assets/css/styles.css';
import TasksWrapper from '../components/Task';
import ActivityFeed from '../components/ActivityFeed';
import TasksPriorities from '../components/TasksPriorities';

//the main dashboard page wich renders all the components.
const Dashboard = () => {
  return (
    <Fragment>
      {/* full dashboard wrapper */}
      <div className="dashboard-wrapper">
        {/* left acmy solution section */}
        <div className="acmy-sloution-section">
          <div className="acmy-sloutions-header">
            <text className="acmy-sloutions">Acmy Solutions</text>
          </div>

          {/* left side dashboard column layout */}
          <div className="dashboard-column-wrapper">
            <div className="acmy-solutions-body">
              <img
                src={dashboardIcon}
                alt="dashboard-icon"
                className="dashboard-icon"
              />
              <text className="acmy-solutions-body-text">Dashboard</text>
            </div>
          </div>
        </div>

        {/* right side dashboard section */}
        <div className="dashboard-section">
          {/* dashboard header */}
          <div className="dashboard-header">
            {/* dashboard header */}
            <text className="dashboard-text">Dashboard</text>

            <div className="dashboard-header-profile">
              <img src={bellOff} alt="belloff" className="bellOff"></img>
              <img src={profileImage} alt="profileImage"></img>
              <img src={profileExpandArrow} alt="profileExpandArrow"></img>
            </div>
          </div>

          {/* dashboard body section */}
          <div className="dashboard-body">
            {/* dashboard welcome text section */}
            <div className="dashboard-wellcome-wrapper">
              <div className="wellcome-text-wrapper">
                <text className="welcome-text">Welcome back, John Doe</text>

                <text className="welcome-sub-tex">
                  The end of the year is coming. Are you planning your
                  performance interviews? You can do this super efficiently with
                  Acmy.
                </text>

                <text className="welcome-underline-text">
                  Look here for more information
                </text>
              </div>

              <img
                src={welocmeSectionImage}
                alt="welocmeSectionImage"
                className="welocmeSectionImage"
              />
              <img src={closeIcon} alt="closeIcon" className="closeIcon" />
            </div>

            {/* dashboard grid section - all the grids are impoted as components*/}
            <div className="grid-components-wrapper">
              {/* task section */}
              <div className="task-grid-wrapper">
                <TasksWrapper />
              </div>

              {/* activity feed section */}
              <div className="grid-components-right-wrapper">
                <div className="activity-feed-grid">
                  <ActivityFeed />
                </div>

                {/* task priority section */}
                <div className="task-priority-wrapper">
                  <TasksPriorities />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Dashboard;

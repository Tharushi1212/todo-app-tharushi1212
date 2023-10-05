//This component is Activity feed section with dummy data
import * as React from 'react';

//importing assets need for this component
import avatar1 from '../assets/images/Ellipse 9.png';
import avatar2 from '../assets/images/Ellipse 10.png';
import '../assets/css/styles.css';

//created data functiob to return dummy data
function createData(description, avatar, date) {
  return { description, avatar, date };
}

//Created dummy data array
const rows = [
  createData(
    '<span class="bold-text">Kushantha Charuka</span><span class="normal-text"> created</span> <span class="pink-text">Contract #00124 need John Beige’s signature</span>',
    avatar1,
    'Sep 16, 2022 at 11:30 AM'
  ),
  createData(
    'Lorem ipsum <span class="bold-text">dolor sit amet,</span> consectetur adipiscing elit. <span class="bold-text">Maecenas</span> pretium neque',
    avatar2,
    'Sep 16, 2022 at 11:45 AM'
  ),
  createData(
    'Lorem ipsum <span class="bold-text">dolor sit amet,</span> consectetur adipiscing elit. <span class="bold-text">Maecenas</span> pretium neque',
    avatar2,
    'Sep 16, 2022 at 11:45 AM'
  ),
];

export default function BasicTable() {
  return (
    //Activity feed table with created dummy data
    <table className="activity-feed-table">
      <thead>
        <th className="activity-title-text">Activity Feed</th>
      </thead>
      <tbody>
        {rows?.map((item, index) => (
          <tr key={index}>
            <td className="activity-feed-body">
              {/* avatar */}
              <div className="activity-feed-avatar">
                <img src={item.avatar} alt="avatar" />
              </div>

              {/* description */}
              <div>
                <div
                  key={index}
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />

                {/* date */}
                <div className="activity-feed-date">{item.date}</div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

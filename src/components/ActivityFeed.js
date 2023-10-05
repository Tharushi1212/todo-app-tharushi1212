import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import avatar1 from '../assets/images/Ellipse 9.png';
import avatar2 from '../assets/images/Ellipse 10.png';
import '../assets/css/styles.css';

function createData(name, avatar, date) {
  return { name, avatar, date };
}

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
    <table className="activity-feed-table">
      <thead>
        <th className="activity-title-text">Activity Feed</th>
      </thead>
      <tbody>
        {rows?.map((item, index) => (
          <tr key={index}>
            <td className="activity-feed-body">
              <div className="activity-feed-avatar">
                <img src={item.avatar} alt="avatar" />
              </div>
              <div>
                <div
                  key={index}
                  dangerouslySetInnerHTML={{ __html: item.name }}
                />
                <div className="activity-feed-date">{item.date}</div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

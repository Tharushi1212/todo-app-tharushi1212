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

// const tableContainerStyle = {
//   width: '440px', // Set the desired width
//   height: '363px', // Set the desired height
//   flexShrink: 0, // Prevent shrinking
//   overflowX: 'hidden', // Hide horizontal scroll
// };

export default function BasicTable() {
  return (
    // <TableContainer style={tableContainerStyle}>
    //   <Table sx={{ minWidth: 650 }} aria-label="simple table">
    //     <TableHead>
    //       <TableRow>
    //         <TableCell>Activity Feed</TableCell>
    //       </TableRow>
    //     </TableHead>
    //     <TableBody>
    //       {rows.map((row) => (
    //         <TableRow
    //           key={row.name}
    //           sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    //         >
    //           <TableCell component="th" scope="row" sx={{ width: '10%' }}>
    //             <img className="avatar" src={row.avatar} alt="avatar"></img>
    //             {row.name}
    //           </TableCell>
    //         </TableRow>
    //       ))}
    //     </TableBody>
    //   </Table>
    // </TableContainer>
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

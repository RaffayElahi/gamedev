'use client'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { collection, getDocs } from "firebase/firestore";
import { database } from '../../../../firebase/config';
import { useState, useEffect 

} from 'react';




function createData(name, calories, fat, carbs) {
  return { name, calories, fat, carbs, };
}

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24),
//   createData('Ice cream sandwich', 237, 9.0, 37),
//   createData('Eclair', 262, 16.0, 24 ),
//   createData('Cupcake', 305, 3.7, 67 ),
//   createData('Gingerbread', 356, 16.0, 49),
// ];

export default function BasicTable() {
  const [rows, setrows] = useState([])
  const dbData = async ()=>{
    await getDocs(collection(database, "gamesgen")).then((query)=>{
      const newData = query.docs.map((doc) => ({...doc.data(), id:doc.id }));
      setrows(newData);                
    })
    
  }
  useEffect(()=>{
    dbData()
  }, [])
  
  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='font-semibold text-xl'>Game Name</TableCell>
            <TableCell align="right"  className='font-semibold text-xl '>Game Icon</TableCell>
            <TableCell align="center" className='font-semibold text-xl'>Game Backgound</TableCell>
            <TableCell align="left" className='font-semibold text-xl'>Desc</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.gameName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" className='font-semibold text-lg'>
                {row.gameName}
              </TableCell>
              <TableCell className='flex justify-end ml-8' align="left"><img className='w-[81px] h-[81-px] object-cover bg-no-repeat rounded-full' src={row.gameIcon}/></TableCell>
              <TableCell align="center" className=''><img src={row.mainBg} className='object-cover h-[8vh] m-auto'></img></TableCell>
              <TableCell align="left" className='font-semibold text-lg'>{row.text}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
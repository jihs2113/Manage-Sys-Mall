import React from 'react';
import Customer from './components/Customer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
import './App.scss';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root:{
    width: '100%',
    marginTop: theme.spacing.unit *3,
    overflowX: 'auto'
  },
  table: {
    minWidth: 1080
  }
})

const customer =[
  {
  'id':1,
  'image':'https://placeimg.com/64/64/1',
  'name':"홍길동",
  'birthday': '928313',
  'gender':'남자',
  'job':'대학생'
  },
  {
    'id':2,
    'image':'https://placeimg.com/64/64/2',
    'name':"남화영",
    'birthday': '938313',
    'gender':'여자',
    'job':'대학생'
  },
  {
      'id':3,
      'image':'https://placeimg.com/64/64/3',
      'name':"홍우원",
      'birthday': '828313',
      'gender':'남자',
      'job':'대학생'
  }
]


function App() {

  const {classes} = this.props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {customer.map((list, i) => {
          return(
            <Customer
            key={list.id}
            id={list.id}
            img={list.image}
            name={list.name}
            birthday={list.birthday}
            gender={list.gender}
            job={list.job}
          
          />
          );
        })}
      </TableBody>
      </Table>
    
    </Paper>
  );
}

export default App;

import React from 'react';
import Customer from './components/Customer';
import CustomerAdd from './components/CustomerAdd';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth: 1080
  },
  progress: {
    margin: theme.spacing.unit * 2
  }
});
/* 
**********React lifeCycle*********

1) constructor()

2) componentWillMount()
->Mount 되기 전
3)render()
->Mount 까지 화면에 뿌려줌
4)componentDidMount()
->Mount 되고 나서 로딩
props or state => shouldComponentUpdate()
*/




class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      customer: '',
      completed: 0
    }
  }

  stateRefresh = () =>{
    this.setState({
      customer: '',
      completed: 0
    });
    this.callApi()
    .then(res => this.setState({customer: res}))
    .catch(err => console.log(err));
  }

  // state = {
  //   customer: "",
  //   completed: 0
  //   //로딩 게이지가 0~100까지
  // }

  componentDidMount(){
    //api를 비동기적으로 불러온다
    this.timer = setInterval(this.progress, 5000);
    this.callApi()
    .then(res => this.setState({customer: res}))
    .catch(err => console.log(err));
  }

  callApi = async () =>{
    const response = await fetch('/api/customer');
    const body = await response.json();
    return body;
  }

  progress = () =>{
    const { completed} = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1});
  }


  render(){
  const { classes } = this.props;

  return (
    <div>
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
            <TableCell>설정</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {this.state.customer ? this.state.customer.map((list, i) => {
          return(
            <Customer
            key={list.id}
            id={list.id}
            img={list.image}
            name={list.name}
            birthday={list.birthday}
            gender={list.gender}
            job={list.job}
            stateRefresh={this.stateRefresh}
          />
          );
        }) : 
          <TableRow>
              <TableCell colSpan="6" align="center">
                <CircularProgress className={classes.progress} variant="dterminate" value={this.state.completed}/>
              </TableCell>
          </TableRow>
        }
      </TableBody>
      </Table>
    
      </Paper>
    <CustomerAdd stateRefresh={this.stateRefresh}/>
    </div>
    );
  }
}

export default withStyles(styles)(App);

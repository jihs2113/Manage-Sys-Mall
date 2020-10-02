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

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

const styles = theme => ({
  root: {
    width: '100%',
    minWidth: 1080
  },
  menu: {
    marginTop: 15,
    marginBottom: 15,
    display: 'flex',
    justifyContent: 'center'
  },
  paper: {
    marginleft: 18,
    marginRight: 18
  },
  progress: {
    margin: theme.spacing.unit * 2
  },
  grow: {
    flexGrow: 1,
  },
  tableHead: {
    fontSize: '1.0rem'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
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
      completed: 0,
      searchKeyword: ''
    }
  }

  stateRefresh = () =>{
    this.setState({
      customer: '',
      completed: 0,
      searchKeyword: ''
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

  handleValueChange = (e) =>{
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }


  render(){
  const filteredComponents = (data) => {
    data = data.filter((c) => {
      return c.name.indexOf(this.state.searchKeyword) > -1;
    });
    return data.map((c) => {
      return <Customer stateRefresh={this.stateRefresh} 
      key={c.id} id={c.id} img={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/>
    });
  }
  const { classes } = this.props;
  const cellList = ["번호", "프로필 이미지", "이름", "생년월일", "성별", "직업"," 설정"];

  return (
    <div className={classes.root}>
       <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            고객 관리 시스템
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="검색하기"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              name="searchKeyword"
              value={this.state.searchKeyword}
              onChange={this.handleValueChange}
            />
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.menu}>
        <CustomerAdd stateRefresh={this.stateRefresh}/>
      </div>
    <Paper className={classes.paper}>
      <Table className={classes.table}>
        <TableHead> 
          <TableRow>
            { cellList.map((c, i) => {
              return <TableCell className={classes.tableHead}>{c}</TableCell>
            })}
          </TableRow>
        </TableHead>
        <TableBody>
        {this.state.customer ? 
          filteredComponents(this.state.customer)
        // this.state.customer.map((list, i) => {
        //   return(
        //     <Customer
        //     key={list.id}
        //     id={list.id}
        //     img={list.image}
        //     name={list.name}
        //     birthday={list.birthday}
        //     gender={list.gender}
        //     job={list.job}
        //     stateRefresh={this.stateRefresh}
        //   />
        //   );
        // }) 
          : 
          <TableRow>
              <TableCell colSpan="6" align="center">
                <CircularProgress className={classes.progress} variant="dterminate" value={this.state.completed}/>
              </TableCell>
          </TableRow>
        }
      </TableBody>
      </Table>
    
      </Paper>
    
    </div>
    );
  }
}

export default withStyles(styles)(App);

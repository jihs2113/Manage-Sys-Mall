import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';


class Customer extends React.Component {
    // eslint-disable-next-line react/require-render-return
    render(){
        const {id,img, name,birthday,gender,job} = this.props;
         return(
           <TableRow>
               <TableCell>{id}</TableCell>
               <TableCell><img src={img} alt=""/></TableCell>
               <TableCell>{name}</TableCell>
               <TableCell>{birthday}</TableCell>
               <TableCell>{gender}</TableCell>
               <TableCell>{job}</TableCell>
           </TableRow>
         );
    }
}


export default Customer;
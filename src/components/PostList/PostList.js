import React from "react";
import {List, Datagrid, TextField, EditButton, DeleteButton, Pagination} from 'react-admin'

const PostPagination = props => <Pagination rowsPerPageOptions={[5, 10, 25, 50, 100]} {...props} />;

const PostList = (props) =>{
  return (
    <List {...props} pagination={<PostPagination />}>
      <Datagrid>
        <TextField source="id"/>
        <TextField source="name"/>
        <TextField source="price" />
        <TextField source="color" />
        <EditButton basePath="/posts"/>
        <DeleteButton basePath="/posts"/>
      </Datagrid>
    </List>
  )
}

export default PostList
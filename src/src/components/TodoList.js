import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Delete from '@mui/icons-material/Delete'

import { useProxy } from "valtio/macro"
import store from "../store";

export default function CheckboxListSecondary() {
  useProxy(store);
  console.log('re rendered todo list')

  return (
    <List dense sx={{ width: '100%', bgcolor: 'background.paper', marginTop: '15px' }}>
      {store.todos.map((todo) => {
        const labelId = `checkbox-list-secondary-label-${todo.id}`;
        return (
          <ListItem
            key={todo.id}
            secondaryAction={
              <IconButton color="default" aria-label="upload picture" component="span" onClick={() => store.removeTodo(todo.id)} >
                <Delete />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemText id={labelId} primary={todo.text} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
import * as React from 'react';
import FormControl from '@mui/material/FormControl'
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import IconButton from '@mui/material/IconButton';
import AddCircle from '@mui/icons-material/AddCircle'
import Cached from '@mui/icons-material/Cached'

import { useProxy } from "valtio/macro";
import store from "../store";

export default function BasicTextFields() {
  useProxy(store);

  return (
    <div className="content"> 
      <FormControl variant="standard">
        <InputLabel htmlFor="standard-adornment-amount">Add Todo</InputLabel>
        <Input
          id="standard-adornment-amount"
          value={store.newTodo}
          onChange={(evt) => (store.newTodo = evt.target.value)}
          endAdornment={
            <IconButton 
              color="default" 
              aria-label="upload picture" 
              component="span"
              onClick={() => store.addTodo()}
            >
              <AddCircle />
            </IconButton>
          }
        />
      </FormControl>
      <FormControl variant="standard">
        <InputLabel htmlFor="standard-adornment-amount">Change title</InputLabel>
        <Input
          id="standard-adornment-amount"
          value={store.newAppTitle}
          onChange={(evt) => (store.newAppTitle = evt.target.value)}
          endAdornment={
            <IconButton 
              color="default" 
              aria-label="upload picture" 
              component="span"
              onClick={() => store.updateTitle(store.newAppTitle)}
            >
              <Cached />
            </IconButton>
          }
        />
      </FormControl>
    </div>
  );
}
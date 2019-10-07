import React from 'react';
import { Link } from 'react-router-dom';

// import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';

export default function Nav({ usuario, logout }) {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Krowdy Quiz
          </Typography>
          <TextField></TextField>
          <Button>Buscar</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

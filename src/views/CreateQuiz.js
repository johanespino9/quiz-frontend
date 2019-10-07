import React, { useState } from 'react';
import Axios from 'axios';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function CrearProducto() {
  const [newQuiz, setnewQuiz] = useState({ 
    
    createdBy: '',
    title: '',
    option1: '',
    option2: '',
    option3: '',
  });
  

  function handleChange(event) {
    setnewQuiz({
      ...newQuiz,
      [event.target.name]: event.target.value
    });
  }

  async function submitProducto() {
    const { data } = await Axios.post('https://rocky-fjord-76906.herokuapp.com/quiz/create', { 
      createdBy: newQuiz.createdBy,
      title: newQuiz.title,
      options: [{ title: newQuiz.option1, count: 0 }, 
                { title: newQuiz.option2, count: 0 }, 
                { title: newQuiz.option3, count: 0 }]
    });
    console.log(data);
  }

  return (
    <>
      <Typography variant="h3" gutterBottom>
        Crear Encuesta
      </Typography>
      <TextField
        id="outlined-name"
        label="Título"
        name='title'
        value={newQuiz.title}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="outlined-name"
        label="Creado por"
        name='createdBy'
        value={newQuiz.createdBy}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
      />
      
      <TextField
        id="outlined-name"
        label="Option"
        name='option1'
        value={newQuiz.option1}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="outlined-name"
        label="Option"
        name='option2'
        value={newQuiz.option2}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
      />

<TextField
        id="outlined-name"
        label="Option"
        name='option3'
        value={newQuiz.option3}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
      />
      
      
      <div style={{ margin: '20px 0' }}>
        <Button variant="contained" onClick={submitProducto} color="primary">
          Crear
        </Button>
      </div>
    </>
  )
}
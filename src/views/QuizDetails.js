/* import React, { useState, useEffect } from './node_modules/react';
import Axios from './node_modules/axios';
import { withRouter } from './node_modules/react-router';

import TextField from './node_modules/@material-ui/core/TextField';
import Button from './node_modules/@material-ui/core/Button';

function ProductoDetailView(props) {
  const [producto, setearProducto] = useState({
    title: '',
    options: [],
    createdBy: ''
  });
  const [loading, setLoading] = useState(false);

  const idProducto = props.location.state.id;
  useEffect(() => {
    
    async function traerDetalles() {
      const { data } = await Axios.get(`https://rocky-fjord-76906.herokuapp.com/quiz/${idProducto}`);
      setearProducto(data);
    }
    traerDetalles();
  }, [idProducto]) 

  async function saveProducto(id) {
    try {
      setLoading(true);
      const { data } = await Axios.put(`/productos/${id}`, {
        title: producto.title,
        options: producto.options,
        createdBy: producto.createdBy,
      });
      console.log(data)
      setLoading(false);
    } catch(e) {
      setLoading(false);
    }
  }


  const handleChange = (e) => {
    setearProducto({
      ...producto,
      [e.target.name]: e.target.value,
    });
  };


  return (
    <div style={{height: 500, width: 500}}>
      <div style={{ margin: '30px 0' }}>
        <TextField 
          style={{width: 450}} 
          label='Titulo' 
          name='titulo' 
          value={producto.titulo}
          onChange={handleChange}
          />
      </div>
      <div style={{ margin: '30px 0' }}>
        <TextField onChange={handleChange} style={{width: 250}} label='Precio' name='precio' value={producto.precio}/>
      </div>
      <div style={{ margin: '30px 0' }}>
        <TextField onChange={handleChange} style={{width: 150}} label='Moneda' name='moneda' value={producto.moneda}/>
      </div>
      <div style={{margin: '20px 0'}}>
        <Button variant='contained' color='primary'>
          {!loading ? <span onClick={() => saveProducto(producto._id)}>Guardar</span> : 'Loading' }
        </Button>
      </div>
    </div>
  )
}

export default withRouter(ProductoDetailView); */
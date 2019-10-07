/* import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import Edit from '@material-ui/icons/Edit';

import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

export default function ProductoList({ ListProducts }) {
  const classes = useStyles();
  const defaultImage = 'https://5.imimg.com/data5/OM/QD/MY-40592083/courier-corrugated-box-500x500.jpg';


  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Lista de Productos</ListSubheader>
        </GridListTile>
        {ListProducts.map(product => (
          <GridListTile key={product._id}>
            <img src={product.img ? product.img : defaultImage } alt={product.titulo} />
            <GridListTileBar
              title={product.titulo}
              subtitle={<span>by: {product.owner}</span>}
              subtitle2={<span>mon: {product.moneda}</span>}
              subtitle3={<span>price: {product.precio}</span>}
              actionIcon={
                <Link to={{
                  pathname: `/producto/${product._id}`,
                  state: {id: product._id}
                  }}>
                  <IconButton 
                    aria-label={`info about ${product.titulo}`} 
                    className={classes.icon}
                    >
                    <Edit/>
                  </IconButton>
                </Link>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
} */
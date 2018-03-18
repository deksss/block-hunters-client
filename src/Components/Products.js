import React from 'react';
import { withStyles } from 'material-ui/styles';
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import Subheader from 'material-ui/List/ListSubheader';
import IconButton from 'material-ui/IconButton';
import InfoIcon from 'material-ui-icons/Info';
import products from '../Data/products.json';

const MARGIN_SIDE = 40;
const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: `cacl(100vw - ${MARGIN_SIDE * 2}px)`,
    padding: `${MARGIN_SIDE * 2}px`,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

function Products(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={260} className={classes.gridList} cols={6} spacing = {20}>
        <GridListTile key="Subheader" cols={6} style={{ height: 'auto' }} >
          <Subheader component="div">Products list</Subheader>
        </GridListTile>
        {products.map(product => (
          <GridListTile key={product.image}>
            <img src={product.image} alt={product.title} />
            <GridListTileBar
              title={product.title}
              subtitle={<span>by: {product.brand}</span>}
              actionIcon={
                <IconButton className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}


export default withStyles(styles)(Products);
import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import SwipeableViews from "react-swipeable-views";
import AppBar from "material-ui/AppBar";
import Tabs, { Tab } from "material-ui/Tabs";
import Typography from "material-ui/Typography";
import Paper from "material-ui/Paper";
import Grid from "material-ui/Grid";
import TextField from "material-ui/TextField";
import Button from "material-ui/Button";
import { FormControl, FormHelperText } from "material-ui/Form";
import Select from "material-ui/Select";
import { MenuItem } from "material-ui/Menu";
import FileUpload from "material-ui-icons/FileUpload";
import Input, { InputLabel } from "material-ui/Input";
import addProduct from "../Data/addProduct";
import { CircularProgress } from "material-ui/Progress";
import Snackbar from "material-ui/Snackbar";

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
    maxWidth: '100%',
    marginTop: "32px"
  },
  rootOnePruduct: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "80%"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  }
});

class Adding extends React.Component {
  state = {
    value: 0,
    price: 0,
    url: "",
    brand: "",
    title: "",
    id: "",
    image: "",
    salePrice: 0,
    type: "",
    sending: false,
    openHint: false,
    hintText: ""
  };

  handleChangeInput = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  handleChangeType = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleAddProduct = async event => {
    this.setState({ sending: true });
    const { url, brand, title, image, price, salePrice } = this.state;
    const sended = await addProduct({
      url,
      brand,
      title,
      image,
      price,
      salePrice
    });

    this.setState({ sending: false });
    if (sended.done) {
      this.setState({
        price: 0,
        url: "",
        brand: "",
        title: "",
        id: "",
        image: "",
        salePrice: 0,
          hintText: "Product Added",
          openHint: true
      });
    } else {
      this.setState({
        hintText: "Product adding error",
        openHint: true
      });
    }
  };

  handleClose = () => {
    this.setState({
      openHint: false,
      hintText: ""
    });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
          >
            <Tab label="Add Pruduct" />
            <Tab label="Bulk upload" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>
            <div className={classes.rootOnePruduct}>
              <Grid container spacing={24}>
                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                    <TextField
                      id="id"
                      label="Id"
                      className={classes.textField}
                      value={this.state.id}
                      onChange={this.handleChangeInput("id")}
                      margin="normal"
                      required
                    />
                    <TextField
                      id="title"
                      label="Title"
                      className={classes.textField}
                      value={this.state.title}
                      onChange={this.handleChangeInput("title")}
                      margin="normal"
                      required
                    />
                    <TextField
                      id="image"
                      label="Image"
                      className={classes.textField}
                      value={this.state.image}
                      onChange={this.handleChangeInput("image")}
                      margin="normal"
                      required
                    />
                    <TextField
                      id="url"
                      label="Url"
                      className={classes.textField}
                      value={this.state.url}
                      onChange={this.handleChangeInput("url")}
                      margin="normal"
                      required
                    />
                    <TextField
                      id="price"
                      label=" Price"
                      className={classes.textField}
                      value={this.state.price}
                      onChange={this.handleChangeInput("price")}
                      margin="normal"
                      type="number"
                    />
                    <TextField
                      id="salePrice"
                      label="Sale Price"
                      className={classes.textField}
                      value={this.state.salePrice}
                      onChange={this.handleChangeInput("salePrice")}
                      margin="normal"
                      type="number"
                    />
                    <div style={{ justifyContent: "center", marginTop: 10 }}>
                      <Button
                        className={classes.button}
                        variant="raised"
                        color="primary"
                        onClick={this.handleAddProduct}
                      >
                        Add{this.state.sending && (
                          <CircularProgress className={classes.progress} />
                        )}
                      </Button>
                    </div>
                  </Paper>
                </Grid>
              </Grid>
            </div>
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <Paper className={classes.paper}>
              <form autoComplete="off">
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="type-simple">Type</InputLabel>
                  <Select
                    value={this.state.type}
                    onChange={this.handleChangeType}
                    inputProps={{
                      name: "type",
                      id: "type-simple"
                    }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"csv"}>.csv</MenuItem>
                    <MenuItem value={"json"}>.json</MenuItem>
                    <MenuItem value={"url"}>url</MenuItem>
                  </Select>
                </FormControl>
              </form>
              {this.state.type === "url" && (
                <TextField
                  id="url"
                  label="Url"
                  className={classes.textField}
                  value={this.state.url}
                  onChange={this.handleChangeInput("url")}
                  margin="normal"
                  required
                />
              )}
              <div style={{ justifyContent: "center", marginTop: 10 }}>
                <Button
                  className={classes.button}
                  variant="raised"
                  color="primary"
                >
                  Upload
                  <FileUpload className={classes.rightIcon} />
                </Button>
              </div>
            </Paper>
          </TabContainer>
        </SwipeableViews>
        <Snackbar
          open={this.state.openHint}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          onClose={this.handleClose}
          autoHideDuration={4000}
          SnackbarContentProps={{
            "aria-describedby": "message-id"
          }}
          message={<span id="message-id">{this.state.hintText}</span>}
        />
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Adding);

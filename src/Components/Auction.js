import React from "react";
import { withStyles } from "material-ui/styles";
import classnames from "classnames";
import Card, { CardContent, CardActions } from "material-ui/Card";
import Collapse from "material-ui/transitions/Collapse";
import IconButton from "material-ui/IconButton";
import Typography from "material-ui/Typography";
import ExpandMoreIcon from "material-ui-icons/ExpandMore";
import Button from "material-ui/Button";
import TextField from "material-ui/TextField";
import sendBet from "../Data/bet";
import { CircularProgress } from "material-ui/Progress";
import Snackbar from "material-ui/Snackbar";
import { FormControl, FormHelperText } from "material-ui/Form";
import Select from "material-ui/Select";
import { MenuItem } from "material-ui/Menu";
import Input, { InputLabel } from "material-ui/Input";

const styles = theme => ({
  card: {
    maxWidth: "500px",
    minWidth: "280px",
    marginTop: "32px",
    textAlign: "center"
  },
  media: {
    height: 194
  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    }),
    marginLeft: "auto"
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  details: {
    width: "100%",
    textAlign: "right"
  },
  bet: {
    display: "flex",
    alignItems: "flex-end",
    flexDirection: "column",
    justifyContent: "space-around",
    flexDirection: "row",
    width: "100%",
    flexWrap: "wrap"
  },
  logo: {
    width: "106px",
    height: "21.19px"
  },
  header: {
    padding: "24px",
    textAlign: "center"
  },
  headerText: {
    fontSize: "30px",
    textAlign: "center",
    lineHeight: "22px",
    fontWeight: "bold",
    paddingLeft: "5px",
    textAlign: "center"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 110
  }
});

class Auction extends React.Component {
  state = {
    category: "",
    tokens: 1,
    openHint: false,
    hintText: ""
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleBet = async event => {
    this.setState({ sending: true });
    const { tokens, category } = this.state;
    const sended = await sendBet({
      tokens,
      category
    });

    this.setState({ sending: false });
    if (sended.done) {
      this.setState({
        hintText: `Bid ${this.state.tokens} tokens successfully`,
        tokens: 1,
        openHint: true
      });
    } else {
      this.setState({
        hintText: "Error",
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

  handleChangeType = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Card className={classes.card}>
          <CardContent>
            <Typography component="p" variant="display1">
              Place bid for chance to take first place in category
            </Typography>
            <div className={classes.bet}>
              <form autoComplete="off">
                <FormControl style={{ width: "200px" }}>
                  <InputLabel htmlFor="type-simple">Select category</InputLabel>
                  <Select
                    value={this.state.category}
                    onChange={this.handleChangeType}
                    inputProps={{
                      name: "category",
                      id: "category"
                    }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"W1"}>Women</MenuItem>
                    <MenuItem value={"M1"}>Man</MenuItem>
                    <MenuItem value={"H1"}>Home</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  id="tokens"
                  label="Token"
                  value={this.state.tokens}
                  onChange={this.handleChange("tokens")}
                  type="number"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true
                  }}
                  margin="normal"
                />
              </form>

              <Button
                size="large"
                variant="raised"
                color="primary"
                onClick={this.handleBet}
                style={{alignSelf: 'center', marginTop: 15}}
              >
                Bid
                {this.state.sending && (
                  <CircularProgress className={classes.progress} />
                )}
              </Button>
            </div>
            <Typography component="p" variant="display1">
              Current owner: 
            </Typography>
            <p >
             Some Fake Retailer
          </p>
          </CardContent>
        </Card>
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

export default withStyles(styles, { withTheme: true })(Auction);

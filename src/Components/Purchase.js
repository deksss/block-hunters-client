import React from "react";
import { withStyles } from "material-ui/styles";
import classnames from "classnames";
import Card, {  
  CardContent,
  CardActions
} from "material-ui/Card";
import Collapse from "material-ui/transitions/Collapse";
import IconButton from "material-ui/IconButton";
import Typography from "material-ui/Typography";
import ExpandMoreIcon from "material-ui-icons/ExpandMore";
import MoreVertIcon from "material-ui-icons/MoreVert";
import Button from "material-ui/Button";
import TextField from "material-ui/TextField";

const styles = theme => ({
  card: {
    maxWidth: "1000px",
    minWidth: "380px",
    marginTop: "64px"
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
  buy: {
    marginTop: "32px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center"
  },
  logo: {
    width: "106px",
    height: "21.19px"
  },
  header: {
    width: "100%",
    padding: "24px"
  },
  headerText: {
    fontSize: "30px",
    textAlign: "center",
    lineHeight: "22px",
    fontWeight: "bold",
    paddingLeft: "5px"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 110
  }
});

class Purchase extends React.Component {
  state = { expanded: false, tokens: 1 };

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Card className={classes.card}>
          <div className={classes.header}>
            <img
              className={classes.logo}
              src="https://s3.amazonaws.com/thecools/client/coolslogo.svg"
            />
            <span className={classes.headerText}>Token</span>
          </div>
          <CardContent>
            <Typography component="p" variant="display1">
              CoolsToken is a new cryptocurrency, which will raise the position
              of your product in product listings on cools.com
            </Typography>
            <div className={classes.buy}>
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
              <Button
                size="large"
                variant="raised"
                size="large"
                color="primary"
              >
                BUY NOW
              </Button>
            </div>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <div className={classes.details}>Details</div>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph variant="body2">
                Info:
              </Typography>

              <Typography paragraph>Bla Bla Bla</Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(Purchase);

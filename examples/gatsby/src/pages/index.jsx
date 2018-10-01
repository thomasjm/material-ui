import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';

import TextField from "@material-ui/core/TextField";

// You can also repro the issue by uncommenting this line, since tachyons includes input[type="password"] { box-sizing: border-box; }
// import "tachyons/css/tachyons.css";

import Helmet from "react-helmet";


const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
});

class Index extends React.Component {
  state = {
    open: false
  };

  handleClose = () => {
    this.setState({...this.state, open: false});
  };

  handleClick = () => {
    this.setState({...this.state, open: true});
  };

  componentDidMount() {
    this.setState({...this.state});
  }

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
          <Helmet>
              <style type="text/css">{`input[type="password"] { box-sizing: border-box; }`}</style>
          </Helmet>

          <Dialog open={open} onClose={this.handleClose}>
              <DialogTitle>Super Secret Password</DialogTitle>
              <DialogContent>
                  <DialogContentText>1-2-3-4-5</DialogContentText>
              </DialogContent>
              <DialogActions>
                  <Button color="primary" onClick={this.handleClose}>
                      OK
                  </Button>
              </DialogActions>
          </Dialog>
          <Typography variant="display1" gutterBottom>
              Material-UI
          </Typography>
          <Typography variant="subheading" gutterBottom>
              example project
          </Typography>
          <Button variant="contained" color="secondary" onClick={this.handleClick}>
              Super Secret Password
          </Button>
          <br />
          <form>
              <TextField label="Normal text field" />
              <br />
              <TextField label="Password field" type="password" />
          </form>
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));

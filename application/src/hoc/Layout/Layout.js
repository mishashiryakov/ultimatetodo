import React, {Component} from 'react';
import withHocs from './LayoutHoc';


class Layout extends Component {

  render() {

    const { classes } = this.props

    return (
      <div className={classes.layout}>

        <main className={classes.main}>
          { this.props.children }
        </main>
      </div>
    )
  }
};

export default withHocs(Layout);
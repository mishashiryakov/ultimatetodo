import React from 'react';
import withHocs from './LayoutHoc';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import EventOutlinedIcon from '@material-ui/icons/EventOutlined';
import TimerOutlinedIcon from '@material-ui/icons/TimerOutlined';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';


const Layout = ({ classes, theme, children }) => {

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const anchor = 'left';

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button key={'My day'}>
            <ListItemIcon><HomeOutlinedIcon/></ListItemIcon>
            <ListItemText primary={'My day'}/>
        </ListItem>

        <ListItem button key={'Calendar'}>
            <ListItemIcon><EventOutlinedIcon/></ListItemIcon>
            <ListItemText primary={'Calendar'}/>
        </ListItem>

        <ListItem button key={'Tomato Timer'}>
            <ListItemIcon><TimerOutlinedIcon/></ListItemIcon>
            <ListItemText primary={'Tomato Timer'}/>
        </ListItem>

        <ListItem button key={'Starred'}>
            <ListItemIcon><StarBorderOutlinedIcon/></ListItemIcon>
            <ListItemText primary={'Starred'}/>
        </ListItem>


      </List>
      
      
    </div>
  );

    return (
      <div className={classes.layout}>

      <div>
        
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
            <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        
      </div>

        <main className={classes.main}>
          { children }
        </main>
      </div>
    )
  
};

export default withHocs(Layout);
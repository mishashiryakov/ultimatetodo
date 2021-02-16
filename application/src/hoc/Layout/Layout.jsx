import React from 'react';
import withHocs from './LayoutHoc';
import clsx from 'clsx';
import { Drawer, Button, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { ExitToAppOutlined,StarBorderOutlined, TimerOutlined, EventOutlined, HomeOutlined  } from '@material-ui/icons';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/actions/auth';
import { Link } from 'react-router-dom'


const Layout = ({ classes, theme, children }) => {
  const dispatch = useDispatch();
  const { isLogged } = useSelector(store => store.auth)

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
        <Link to='/tasks/myday' className={classes.link}>
          <ListItem button key={'My day'}>
              <ListItemIcon><HomeOutlined/></ListItemIcon>
              <ListItemText primary={'My day'}/>
          </ListItem>
        </Link>

        <Link to='/tasks/calendar' className={classes.link}>
          <ListItem button key={'Calendar'}>
              <ListItemIcon><EventOutlined/></ListItemIcon>
              <ListItemText primary={'Calendar'}/>
          </ListItem>
        </Link>
        
        <Link to='/tasks/tomatotimer' className={classes.link}>
          <ListItem button key={'Tomato Timer'}>
              <ListItemIcon><TimerOutlined/></ListItemIcon>
              <ListItemText primary={'Tomato Timer'}/>
          </ListItem>
        </Link>

        <Link to='/tasks/starred' className={classes.link}>
          <ListItem button key={'Starred'}>
              <ListItemIcon><StarBorderOutlined/></ListItemIcon>
              <ListItemText primary={'Starred'}/>
          </ListItem>
        </Link>

        <Link to='/login' className={classes.link}>
          <ListItem button key={'Logout'} onClick={() => dispatch(logout())}>
            <ListItemIcon><ExitToAppOutlined/></ListItemIcon>
            <ListItemText primary={'Logout'}/>
          </ListItem>
        </Link>



      </List>
    </div>
  );

    return (
      <div className={classes.layout}>


      {
      isLogged &&
      
        <div className={classes.header}>
          
          <Button onClick={toggleDrawer(anchor, true)}><MenuOutlinedIcon/></Button>
        </div>

      }

      {
        isLogged &&
          <div>

            <React.Fragment key={anchor}>
              
              <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                {list(anchor)}
              </Drawer>
            </React.Fragment>

          </div>
      }
        <main className={classes.main}>
          { children }
        </main>
      </div>
    )

};

export default withHocs(Layout);

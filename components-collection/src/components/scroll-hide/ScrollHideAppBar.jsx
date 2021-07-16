import { 
    makeStyles,   
    AppBar, Toolbar, 
    IconButton, Button
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import { Grow } from '@material-ui/core';
import { useState, useEffect } from 'react';


const useStyles = makeStyles((theme) => ({

    root: {
        flexGrow: 1
    },
    flex: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -(theme.spacing(4)),
        marginRight: theme.spacing(2)
    },
    toolbarMargin: theme.mixins.toolbar
}));



const ScrollHideAppBar = () => { 
    
    const classes = useStyles();

          
    

    const [scroll, setScroll] = useState({scrolling: false, scrollTop: 0});
    const {scrolling, scrollTop} = scroll;
     


    useEffect(() => {

        const onScroll = event => {
            setScroll({
                scrollTop: event.target.documentElement.scrollTop,
                scrolling: event.target.documentElement.scrollTop > scrollTop
            });
        };

        window.addEventListener('scroll', onScroll);
        
        return () => window.removeEventListener('scroll', onScroll)
        

    },[scrolling, scrollTop]);

    

    return (

    <div className={classes.root}>
     <Grow  in={!scrolling} >
      <AppBar>
       <Toolbar>
         <IconButton 
          className={classes.menuButton}
          color="inherit"
          aria-label="Menu"
         >
             <MenuIcon/>
         </IconButton>
         <Typography
              variant="h5"
              color="inherit"
              className={classes.flex}
             >
               Title
         </Typography>
         <Button color="inherit">Login</Button>
       </Toolbar>
      </AppBar>
     </Grow > 
      <div className={classes.toolbarMargin} />
      <ul>
        {new Array(100).fill(null).map((v, i) => (
            <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
)};


export default ScrollHideAppBar;
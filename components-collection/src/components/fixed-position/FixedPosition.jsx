import { 
    makeStyles, Paper,  
    AppBar, Toolbar, 
    IconButton, Button
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';


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

const FixedPosition = () => { 
    
    const classes = useStyles();

    return (

    <div className={classes.root}>
      <AppBar position="fixed">
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
      <div className={classes.toolbarMargin} />
      <ul>
        {new Array(100).fill(null).map((v, i) => (
            <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
)};


export default FixedPosition;
import { makeStyles, Paper, Grid } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
    }
}));


function Breakpoint() {

    const classes  = useStyles();
 
    return (
        
    <div className={classes.root}>
        <Grid container spacing={4}>
            <Grid item  xs={12} sm={6} md={3}>
                <Paper className={classes.paper}>xs=12 sm=6 md=3</Paper>
            </Grid>
            <Grid item  xs={12} sm={6} md={3}>
                <Paper className={classes.paper}>xs=12 sm=6 md=3</Paper>
            </Grid>
            <Grid item  xs={12} sm={6} md={3}>
                <Paper className={classes.paper}>xs=12 sm=6 md=3</Paper>
            </Grid>
            <Grid item  xs={12} sm={6} md={3}>
                <Paper className={classes.paper}>xs=12 sm=6 md=3</Paper>
            </Grid>
        </Grid>
    </div>
    )
};

export default Breakpoint;
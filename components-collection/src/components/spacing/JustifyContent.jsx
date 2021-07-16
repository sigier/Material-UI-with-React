import { 
    makeStyles, Paper, Grid, Chip 
} from '@material-ui/core';



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

const JustifyContent = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
          <Grid container spacing={10}>
              <Grid item xs={12} sm={6} md={3}>
                <Paper className={classes.paper}>
                  <Grid container justify="space-between">
                      <Grid item>
                        <Chip label="xs=12" />
                      </Grid>
                      <Grid item>
                        <Chip label="sm=6" />
                      </Grid>
                      <Grid item>
                        <Chip label="md=3" />
                      </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Paper className={classes.paper}>
                  <Grid container justify="space-between">
                      <Grid item>
                        <Chip label="xs=12" />
                      </Grid>
                      <Grid item>
                        <Chip label="sm=6" />
                      </Grid>
                      <Grid item>
                        <Chip label="md=3" />
                      </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Paper className={classes.paper}>
                  <Grid container justify="space-between">
                      <Grid item>
                        <Chip label="xs=12" />
                      </Grid>
                      <Grid item>
                        <Chip label="sm=6" />
                      </Grid>
                      <Grid item>
                        <Chip label="md=3" />
                      </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Paper className={classes.paper}>
                  <Grid container justify="space-between">
                      <Grid item>
                        <Chip label="xs=12" />
                      </Grid>
                      <Grid item>
                        <Chip label="sm=6" />
                      </Grid>
                      <Grid item>
                        <Chip label="md=3" />
                      </Grid>
                  </Grid>
                </Paper>
              </Grid>
          </Grid>
        </div>

    )

};


export default JustifyContent;
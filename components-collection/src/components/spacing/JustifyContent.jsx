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

    const Item = props => <Grid item {...props}/>;

    const Container = props => <Grid container {...props}/>;

    return (
        <div className={classes.root}>
          <Container spacing={10}>
              <Item xs={12} sm={6} md={3}>
                <Paper className={classes.paper}>
                  <Container justify="space-between">
                      <Item>
                        <Chip label="xs=12" />
                      </Item>
                      <Item>
                        <Chip label="sm=6" />
                      </Item>
                      <Item>
                        <Chip label="md=3" />
                      </Item>
                  </Container>
                </Paper>
              </Item>
              <Item xs={12} sm={6} md={3}>
                <Paper className={classes.paper}>
                  <Container justify="space-between">
                      <Item>
                        <Chip label="xs=12" />
                      </Item>
                      <Item>
                        <Chip label="sm=6" />
                      </Item>
                      <Item>
                        <Chip label="md=3" />
                      </Item>
                  </Container>
                </Paper>
              </Item>
              <Item xs={12} sm={6} md={3}>
                <Paper className={classes.paper}>
                  <Container justify="space-between">
                      <Item>
                        <Chip label="xs=12" />
                      </Item>
                      <Item>
                        <Chip label="sm=6" />
                      </Item>
                      <Item>
                        <Chip label="md=3" />
                      </Item>
                  </Container>
                </Paper>
              </Item>
              <Item xs={12} sm={6} md={3}>
                <Paper className={classes.paper}>
                  <Container justify="space-between">
                      <Item>
                        <Chip label="xs=12" />
                      </Item>
                      <Item>
                        <Chip label="sm=6" />
                      </Item>
                      <Item>
                        <Chip label="md=3" />
                      </Item>
                  </Container>
                </Paper>
              </Item>
          </Container>
        </div>

    )

};


export default JustifyContent;
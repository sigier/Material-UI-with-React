import { Button, } from '@material-ui/core';
import { Link  } from 'react-router-dom';

const style = {
    'textDecoration': 'none'
}

const Major = () => (
     <Button  
      variant="outlined" 
      color="primary"
     >
        <Link style={style} to="/breakpoint">Breakpoint</Link>
    </Button>

    
    
);


export default Major;
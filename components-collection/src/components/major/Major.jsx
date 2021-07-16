import { Button, } from '@material-ui/core';
import { Link  } from 'react-router-dom';

const style = {
    'textDecoration': 'none'
}

const elements = [
    "breakpoint",
    "spacing"
];
 

const Major = () => (

    elements.map((element,  i) => (
        <Button key={i} 
            variant="outlined" 
            color="primary"
        >
        <Link style={style} to={`/${element}`}>
            {`${element.toUpperCase()}`}
        </Link>
        </Button>
    ))

);


export default Major;
import React from 'react';
import Button from '@material-ui/core/Button';

const button = (props) => {

    const posicionName = (props.posicion ? props.posicion : "primary");

    return (
        <Button variant="contained" color={posicionName} onClick={props.fncOnclick}>{props.name}</Button>
    );
};

export default button;
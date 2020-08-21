import React from 'react';
import Wrapper from '../hoc/Wrapper/Wrapper';
import Button from './UI/Button/Button';
import ElementoRegistro from './ElementoRegistro';

const UserForm = (props) => {

    return (
        <Wrapper>
                <ElementoRegistro label={'Name: '} name={"name"} defaultValue={props.defaultName} ref={props.nameRef} />
                <ElementoRegistro label={'Username: '} name={"username"} defaultValue={props.defaultUsername} ref={props.usernameRef} />
                <Button fncOnclick={props.fncButton} name={props.nombreBoton} />
        </Wrapper>
    )
}

export default UserForm;
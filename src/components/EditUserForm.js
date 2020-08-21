import React, { createRef } from 'react';
import Wrapper from '../hoc/Wrapper/Wrapper';
import UserForm from './UserForm';
import Button from './UI/Button/Button';

const EditUseForm = (props) => {

    const nameRef = createRef();
    const usernameRef = createRef();

    return (
        <Wrapper>
            <UserForm
                fncButton={props.fncButton}
                nombreBoton={'Editar'}
                nameRef={nameRef}
                defaultName={props.defaultName}
                usernameRef={usernameRef}
                defaultUsername={props.defaultUsername} />
            <Button fncOnclick={props.fncButtonCancel} posicion={"secondary"} name="Cancelar" />
        </Wrapper>
    )
}

export default EditUseForm;
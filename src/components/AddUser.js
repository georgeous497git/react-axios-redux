import React, { createRef } from 'react';
import Wrapper from '../hoc/Wrapper/Wrapper';
import UserForm from './UserForm';

const AddUser = (props) => {

    const user = { id: null, name: '', username: '' };

    /** Constantes usadas con la directiva "Componentes no controlados", se debe declarar
     *  en el elemento el atributo ref={nombreElemento} **/
    const nameRef = createRef();
    const usernameRef = createRef();

    const addHandle = () => {

        const nameAux = nameRef.current.value;
        const usernameAux = usernameRef.current.value;
        
        if(nameAux !== '' && usernameAux !== '') {
            console.log('Datos asignados');
            
            user.name = nameAux;
            user.username = usernameAux;

            console.log("addUser user:", user);

            props.fncAddUser(user);

            nameRef.current.value = "";
            usernameRef.current.value = "";
        } else {
            console.log('Datos en blanco');
        }
    }

    return (
        <Wrapper>
            <UserForm 
                fncButton = {addHandle}
                nombreBoton = {'Agregar'}
                nameRef = {nameRef}
                defaultName = {''}
                usernameRef = {usernameRef}
                defualtUsername = {''}
                />
        </Wrapper>
    )
}

export default AddUser;
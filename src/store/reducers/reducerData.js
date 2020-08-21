import * as actionTypes from '../actions/actionTypes';

const initialState = {
    data: null,
    error: false
};

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case actionTypes.SET_DATA:

            return {
                ...state,
                data: action.payload.data,
                error: action.payload.error
            };

        case actionTypes.ADD_DATA:

            return {
                //...state is to copy all the properties of state
                ...state,
                data: [action.payload.newData, ...state.data]
            };

        case actionTypes.EDIT_DATA:

            const idEdit = action.payload.data.id;
            
            //Busca el indice del ID del objeto que se desea actualizar
            const index = state.data.findIndex((obj => obj.id === idEdit));

            //Se actualizan los valores del objeto 1 a 1 
            /*
            state.data[index].name = action.payload.data.name;
            state.data[index].username = action.payload.data.username;
            state.data[index].age = action.payload.data.age;
            */

            //Se actualizan todos los valores del objeto en conjunto
            state.data[index] = action.payload.data;

            return {
                ...state,
                data: [
                    ...state.data
                ]
            };

        case actionTypes.REMOVE_DATA:
            const idDelete = action.payload.data.id;
            
            //Busca el indice del ID del objeto que se desea eliminar
            const indexDelete = state.data.findIndex((obj => obj.id === idDelete));
            state.data.splice(indexDelete, 1);
            
            return {
                ...state,
                data: [
                    ...state.data
                ]
            };

        case actionTypes.LOAD_DATA_BD:
            return {
                ...state,
                data: action.data,
                error: true
            };

        case actionTypes.LOAD_DATA_BD_FAILED:
            return {
                ...state,
                error: true
            };

        default:
            return state;
    }
};

export default reducer;
import * as actionTypes from './actionTypes';
import instanceAxios from '../../calls/axios';
import DataDTO from '../../hooks/DataDTO';


export const addData = (newData, loadSuccess) => {
    return {
        type: actionTypes.ADD_DATA,
        payload: {
            newData: newData,
            loadSuccess: loadSuccess
        }
    };
};

export const editData = (data) => {
    return {
        type: actionTypes.EDIT_DATA,
        payload: {
            data: data
        }

    };
};

export const setData = (data, loadSuccess) => {
    console.log('setData:', data);
    console.log('loadSuccess:', loadSuccess);

    return {
        type: actionTypes.SET_DATA,
        payload: {
            data: data,
            loadSuccess: loadSuccess
        }
    };
};

export const deleteData = (dataRemoved) => {
    console.log('data to delete: ', dataRemoved);

    return {
        type: actionTypes.REMOVE_DATA,
        payload: {
            data: dataRemoved
        }
    }
};

export const loadDataBDFailed = () => {
    return {
        type: actionTypes.LOAD_DATA_BD_FAILED
    }
};

export const loadDataBD = () => {
    return dispatch => {

        instanceAxios.get('/usuarios.json')
            .then(response => {
                let datos = [];
                let loadSuccess = false;

                if (response.data !== null && response.status === 200) {

                    loadSuccess = true;
                    const usuariosBD = [response.data];

                    usuariosBD.forEach(usuario => {

                        datos = Object.keys(usuario).map(key => {
                            return (
                                DataDTO({
                                    id: key,
                                    ...usuario[key]
                                })
                            );
                        });
                    });
                }

                dispatch(setData(datos, loadSuccess));

            }).catch(error => {
                console.log("Error: Dispatch Redux: Axios:", error);
                dispatch(loadDataBDFailed());
            })
    };
};

export const saveDataBD = (newData) => {

    return dispatch => {
        instanceAxios.post('/usuarios.json', newData)
            .then(response => {
                console.log('response save', response);

                let successSave = false;

                if (response.status === 200) {
                    successSave = true;
                    newData.id = response.data.name;

                    console.log('newData:', newData);
                    dispatch(addData(newData, successSave));
                }

            }).catch(error => {
                console.log('ERROR: Algo esta jodido con el save:', error);
            })
    };
};

export const updateDataBD = (newData) => {

    const urlUser = '/usuarios/' + newData.id + '.json';
    const { id, ...datos } = newData;

    return dispatch => {
        instanceAxios.put(urlUser, datos)
            .then(response => {
                console.log('Response update:', response);

                if (response.status === 200) {
                    dispatch(editData(newData));
                }
            }).catch(error => {
                console.log('ERROR: Algo esta jodido con el update:', error);
            })
    };
};

export const removeData = (data) => {

    const urlUser = '/usuarios/' + data.id + '.json';

    return dispatch => {
        instanceAxios.delete(urlUser)
            .then(response => {
                console.log('Response remove:', response);

                if(response.status === 200) {
                    dispatch(deleteData(data));
                }
            })
            .catch(error => {
                console.log('ERROR: Algo esta jodido con el remove:', error);
            })
    };
};

import React from 'react';
import MaterialTable from 'material-table';
import tableIcons from '../utils/TableIcons';
import Wrapper from '../hoc/Wrapper/Wrapper';
import DataDTO from '../hooks/DataDTO';


const Table = (props) => {

    /** Asignacion de valor de funciones remotas desde 'props' a funciones locales */
    const fncRemove = props.fncRemove;
    const fncUpdate = props.fncUpdate;
    const fncSaveBD = props.fncSaveBD;

    /** Orden: 1 Inicilizacion de objeto MaterialTable  */
    const titleTable = props.title === null || props.title === undefined ? "Tabla de datos" : props.title;
    const dataProps = props.data === null || props.data === undefined ? [] : props.data;

    const columnas = [
        { title: 'ID', field: 'id' },
        { title: 'Name', field: 'name' },
        { title: 'Username', field: 'username' },
        { title: 'Age', field: 'age', width: 0 }
    ];

    const data = dataProps.map((item) => {
        return (
            DataDTO(item)
        );
    })

    const addHandler = (newData) => {

        return new Promise(resolve => {

            /* From 'newData' object: ignore 'tableData' element then 
            asign the remaining elements into 'datosNuevos' */
            const { tableData, ...datosNuevos } = newData;
            fncSaveBD(datosNuevos);

            setTimeout(() => {
                resolve();
            }, 600);
        })
    }

    const updateHandler = (newData, oldData) => {

        return new Promise(resolve => {
            if (oldData) {
                console.log('data upd:', newData);
                const { tableData, ...datosNuevos } = newData;
                fncUpdate(datosNuevos);
            }

            setTimeout(() => {
                resolve();
            }, 600);
        })
    }

    const deleteHandler = (oldData) => {

        return new Promise(resolve => {
            /** Uso de la funcion remota para Redux */
            fncRemove(oldData);

            setTimeout(() => {
                resolve();
            }, 600);
        })
    }

    return (
        <Wrapper>
            <MaterialTable
                title={titleTable}
                columns={columnas}
                data={data}
                icons={tableIcons}
                editable={
                    {
                        onRowAdd: (newData) => addHandler(newData),
                        onRowUpdate: (newData, oldData) => updateHandler(newData, oldData),
                        onRowDelete: (oldData) => deleteHandler(oldData)
                    }
                }
            />
        </Wrapper>
    )
}

export default Table;
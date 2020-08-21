import { useState, useEffect } from 'react';
import instanceAxios from '../calls/Axios';

const GetUsuarios = () => {

    const [data, setData] = useState([null]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        instanceAxios.get('https://react-crud-f7b92.firebaseio.com/usuarios.json')
            .then(response => {

                const datos = [response.data];

                setData(datos);
                setLoading(true);

                console.info("Se obtuvieron %d usuarios de BD Firebase.", datos.length);

            }).catch(error => {
                //this.setState({error: true})
                //return error;
                console.error("No se pudo obtener los usuarios de BD Firebase");

                setLoading(false);
            })
    }, [data]);

    return [data];
}

export default GetUsuarios;
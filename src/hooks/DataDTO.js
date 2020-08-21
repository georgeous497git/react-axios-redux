const DataDTO = data => {

    return {
        id: data.id === undefined || data.id === '' ? '-' : data.id,
        name: data.name,
        username: data.username,
        age: data.age === undefined || data.age === '' ? '-' : data.age
    };

}

export default DataDTO;
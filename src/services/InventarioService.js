import { axiosConfig } from "../configuration/axiosConfig"

const obtenerInventario = (estado = true) => {
    return axiosConfig.get('inventarios?inventario='+estado, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

const crearInventario = (data) => {
    return axiosConfig.post('inventarios', data, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

const editarInventarioPorID = (estadoId, data) => {
    return axiosConfig.put('inventarios/'+estadoId, data, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

 const borrarInventarioPorID = (tipoId) => {
    return axiosConfig.delete('inventarios/'+tipoId, {}, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

 const obtenerInventarioPorID = (tipoId) => {
    return axiosConfig.get('inventarios/'+tipoId, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

export {
    obtenerInventario,
    crearInventario,
    editarInventarioPorID,
    borrarInventarioPorID,
    obtenerInventarioPorID
}
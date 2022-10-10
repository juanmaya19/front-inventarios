import { axiosConfig } from "../configuration/axiosConfig"

const obtenerEstados = (estado = true) => {
    return axiosConfig.get('estados?estado='+estado, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

const crearEstado = (data) => {
    return axiosConfig.post('estados', data, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

const editarEstadoPorID = (estadoId, data) => {
    return axiosConfig.put('estados/'+estadoId, data, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

 const borrarEstadoPorID = (tipoId) => {
    return axiosConfig.delete('estados/'+tipoId, {}, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

 const obtenerEstadoPorID = (tipoId) => {
    return axiosConfig.get('estados/'+tipoId, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

export {
    obtenerEstados,
    crearEstado,
    editarEstadoPorID,
    borrarEstadoPorID,
    obtenerEstadoPorID
}
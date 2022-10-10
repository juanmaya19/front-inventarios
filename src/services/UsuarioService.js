import { axiosConfig } from "../configuration/axiosConfig"

const obtenerUsuarios = (estado = true) => {
    return axiosConfig.get('usuarios?estado='+estado, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

const crearUsuario = (data) => {
    return axiosConfig.post('usuarios', data, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

const editarUsuarioPorID = (usuarioId, data) => {
    return axiosConfig.put('usuarios/'+usuarioId, data, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

 const borrarUsuarioPorID = (usuarioId) => {
    return axiosConfig.delete('usuarios/'+usuarioId, {}, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

 const obtenerUsuarioPorID = (usuarioId) => {
    return axiosConfig.get('usuarios/'+usuarioId, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

export {
    obtenerUsuarios,
    crearUsuario,
    editarUsuarioPorID,
    borrarUsuarioPorID,
    obtenerUsuarioPorID
}
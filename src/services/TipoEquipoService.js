import { axiosConfig } from "../configuration/axiosConfig"

const obtenerTiposEquipos = (estado = true) => {
    return axiosConfig.get('tipoequipos?estado='+estado, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

const crearTipoEquipo = (data) => {
    return axiosConfig.post('tipoequipos', data, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

const editarTipoEquipoPorID = (tipoId, data) => {
    return axiosConfig.put('tipoequipos/'+tipoId, data, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

 const borrarTipoEquipoPorID = (tipoId) => {
    return axiosConfig.delete('tipoequipos/'+tipoId, {}, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

 const obtenerTipoEquipoPorID = (tipoId) => {
    return axiosConfig.get('tipoequipos/'+tipoId, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

export {
    obtenerTiposEquipos,
    crearTipoEquipo,
    editarTipoEquipoPorID,
    borrarTipoEquipoPorID,
    obtenerTipoEquipoPorID
}
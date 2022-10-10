import { axiosConfig } from "../configuration/axiosConfig"

const obtenerMarcas = (estado = true) => {
    return axiosConfig.get('marcas?estado='+estado, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

const crearMarca = (data) => {
    return axiosConfig.post('marcas', data, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

const editarMarcaPorID = (estadoId, data) => {
    return axiosConfig.put('marcas/'+estadoId, data, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

 const borrarMarcaPorID = (tipoId) => {
    return axiosConfig.delete('marcas/'+tipoId, {}, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

 const obtenerMarcaPorID = (tipoId) => {
    return axiosConfig.get('marcas/'+tipoId, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

export {
    obtenerMarcas,
    crearMarca,
    editarMarcaPorID,
    borrarMarcaPorID,
    obtenerMarcaPorID
}
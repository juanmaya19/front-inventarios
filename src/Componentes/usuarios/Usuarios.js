import dayjs from 'dayjs'
import React, { useEffect, useState } from 'react'
import { obtenerUsuarios, crearUsuario, editarUsuarioPorID, borrarUsuarioPorID } from '../../services/UsuarioService'
import ModalUsuario from './ModalUsuario'

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([])
  const [loading, setLoading] = useState(false)
  const [query, setQuery] = useState(true)
  const [error, setError] = useState(false)
  const [estado, setEstado] = useState({
    nombre: '',
    email: '',
    estado: true
  })
  const [errorSend, setErrorSend] = useState({
    status: false,
    msg: ''
  })

  const listUsuarios = async () => {
    setLoading(true)
    try {
      setError(false)
      const { data } = await obtenerUsuarios(query)
      setUsuarios(data)
      setLoading(false)
    } catch (e) {
      console.log(e)
      setError(true)
      setLoading(false)
    }
  }

  useEffect(() => {
    listUsuarios();
  }, [query])

  const cambiarSwitche = () => {
    setQuery(!query)
  }

  const guardarUsuarios = async () => {
    setErrorSend({ status: false, msg: '' })
    setLoading(true)
    try {
      const res = await crearUsuario(estado)
      console.log(res)
      setLoading(true)
      setEstado({ nombre: '' , email: ''})
      listUsuarios()
    } catch (e) {
      const { status, data } = e.response;
      setErrorSend({ status: true, msg: data.msg })
      console.log(e)
      setLoading(false)
    }

  }

  const handleChange = e => {
    setEstado({
      ...estado,
      [e.target.name]: e.target.value
    })
  }

  const borrarUsuarios = async (e) => {
    setLoading(true)
    try {
      setError(false)
      const id = e.target.id
      console.log(id)
      const res = await borrarUsuarioPorID(id)
      console.log(res)
      listUsuarios();
      setLoading(false)
    } catch (e) {
      console.log(e)
      setError(true)
      setLoading(false)
    }
  }

  const editarUsuarios = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      setError(false)
      const resp = await editarUsuarioPorID(estado._id, estado);
      console.log(resp)
      resetEstado()
      listUsuarios()
    } catch (e) {
      setLoading(false)
      console.log(e)
      setError(true)
    }

  }

  const setUsuarioPorId = (e) => {
    console.log(e.target.id)
    const estadosFilter = usuarios.filter(t => t._id == e.target.id);
    const est = estadosFilter[0];
    console.log(est)
    setEstado(est)
  }

  const resetEstado = () => {
    setEstado({
      nombre: '',
      estado: true
    })
  }

  return (
    <div>
      <div className="modal fade" id="exampleModal2" tabIndex={-1} aria-labelledby="exampleModal2Label" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModal2Label">Editar Usuario</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={resetEstado}
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={editarUsuarios}>
                <div className="mb-3">
                  <label for="recipient-name" className="col-form-label">Nombre:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    onChange={handleChange}
                    value={estado.nombre}
                    name="nombre"
                  />
                  <label for="recipient-name" className="col-form-label">Email:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    onChange={handleChange}
                    value={estado.email}
                    name="email"
                  />
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    name="estado"
                    value={estado.estado}
                    onChange={handleChange}
                  >
                    <option value={false}>Inactivo</option>
                    <option value={true}>Activo</option>
                  </select>
                </div>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={resetEstado}
                >
                  Cerrar
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={estado.nombre.length <= 0}
                  data-bs-dismiss="modal"
                >
                  Enviar
                </button>
              </form>
            </div>
            <div className="modal-footer">
            </div>
          </div>
        </div>
      </div>
      <ModalUsuario
        titulo={'Usuario'}
        guardar={guardarUsuarios}
        element={estado}
        change={handleChange}
      />
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Nuevo
      </button>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckChecked"
          checked={query}
          onChange={cambiarSwitche}
        />
        <label className="form-check-label" hmtlFor="flexSwitchCheckChecked">( Inactivo / Activo )</label>
      </div>
      {
        loading &&
        (<div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>)
      }
      {errorSend.status && (
        <div className="alert alert-danger" role="alert">
          {errorSend.msg}
        </div>)
      }
      {
        error && (
          <div className="alert alert-danger" role="alert">
            Error al cargar datos
          </div>)
      }
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Email</th>
            <th scope="col">Estado</th>
            <th scope="col">Creado</th>
            <th scope="col">Actualizado</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {
            usuarios.map((estado, index) => {
              return (
                <tr key={estado._id}>
                  <th scope="row">{index + 1}</th>
                  <td>{estado.nombre}</td>
                  <td>{estado.email}</td>
                  <td>{estado.estado ? 'Activo' : 'Inactivo'}</td>
                  <td>{dayjs(estado.fechaCreacion).format('YYYY-MM-DD')}</td>
                  <td>{dayjs(estado.fechaActualizacion).format('YYYY-MM-DD')}</td>
                  <td>
                    <button
                      id={estado._id}
                      type="button"
                      className="btn btn-success"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal2"
                      onClick={setUsuarioPorId}
                    >
                      Editar
                    </button>
                    <button
                      id={estado._id}
                      type="button"
                      className="btn btn-danger"
                      onClick={borrarUsuarios}
                    >
                      Borrar
                    </button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}
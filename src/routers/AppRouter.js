import React from 'react'
import NavBar from '../Componentes/ui/NavBar'
import { Routes, Route } from 'react-router-dom'
import TipoEquipos from '../Componentes/tiposequipos/TiposEquipos'
import Estados from '../Componentes/estados/Estados'
import Marcas from '../Componentes/marcas/Marcas'
import Usuarios from '../Componentes/usuarios/Usuarios'
import Inventarios from '../Componentes/inventarios/Inventarios'
import NotFound from '../Componentes/ui/NotFound'

export default function AppRouter() {
  return (
    <div>
        <NavBar title={'IUD'}/>
        <main className='container'>
            <Routes >
                <Route path='/' element={<TipoEquipos />} />
                <Route path='/estados' element={<Estados />} />
                <Route path='/marcas' element={<Marcas />} />
                <Route path='/usuarios' element={<Usuarios />} />
                <Route path='/inventarios' element={<Inventarios />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </main>
    </div>
  )
}
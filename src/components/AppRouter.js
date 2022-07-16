import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { publicRoutes } from '../Routes'
import Calculator from './Calculator'

const AppRouter = () => {
    return (
        <Routes>
            {publicRoutes.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />} exact />
            ))}

            <Route path='*' element={<Calculator />} />
        </Routes>
    )
}

export default AppRouter

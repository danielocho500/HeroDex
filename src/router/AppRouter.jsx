import React from 'react'

import {
    BrowserRouter,
    Routes,
    Route,
    useNavigate
  } from "react-router-dom"
import { SearchScreen } from '../components/search/SearchScreen'

export const AppRouter = () => {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<SearchScreen/>} />
                </Routes>
            </BrowserRouter>
        </>

    )
}


import React from 'react'

import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom"
import { HeroInfo } from '../components/heroInfo/HeroInfo'

import { SearchScreen } from '../components/search/SearchScreen'

export const AppRouter = () => {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<SearchScreen/>} />
                    <Route path='/herodex' element={<SearchScreen/>} />
                    <Route path='/hero/:heroId' element={<HeroInfo/>}/>
                </Routes>
            </BrowserRouter>
        </>

    )
}


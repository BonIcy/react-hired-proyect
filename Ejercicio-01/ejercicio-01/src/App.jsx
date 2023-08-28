import React from 'react'
import './App.css'
import {useState, useEffect} from 'react' 
import icono from './buscador.svg'
import Card from './components/Card'
// a535cfbb
let url = 'http://www.omdbapi.com/?apikey=a535cfbb'
let App = () =>{
    let [movies, setMovies]= useState([])
    let [busquedaChang, setBusquedaChang]= useState('')
    let buscador = async(titulo)=>{
    let response = await fetch(`${url}&s=${titulo}`)
    let data = await response.json();
    setMovies(data.Search);
}
    useEffect(()=>{
        buscador('scream')
    },{})
    return (
        <div className='app'>
            <h1>Cine Artemis</h1>
            <div className= 'busqueda'>
                <input placeholder ="Buscar" value = {busquedaChang} onChange = {(e)=>setBusquedaChang(e.target.value)} />
                <img src={icono} alt="Icono de lupa para buscador" onClick = {()=>buscador(busquedaChang)} />
            </div>

            {movies?.length >0 ? (
                <div className='contenedor'>
                    {
                        movies.map((movie)=>(
                            <Card movie1 = {movie}/>
                        ))
                    }
                     </div>
            ): (
                <div className='empty'>
                    <h2>Peliculas no encontradas</h2>
                </div>
            )

}
        </div>
    )
}

export default App
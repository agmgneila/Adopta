import React, { useState, useEffect } from 'react';
import FiltroMascotas from './FiltroMascotas';
import ListaMascotas from './ListaMascotas';
import FormularioSolicitud from './FormularioSolicitud';
import './App.css';


function App() {
    const [filtros, setFiltros] = useState({
        tipo: '',
        edad: '',
        genero: '',
        region: '',
        comuna: ''
    });
    const [mascotas, setMascotas] = useState([]);
    const [mascotasFiltradas, setMascotasFiltradas] = useState([]);
    const [mascotaSeleccionada, setMascotaSeleccionada] = useState(null);

    // API
    useEffect(() => {
        fetch('https://huachitos.cl/api/animales')
            .then(response => response.json())
            .then(data => {
                setMascotas(data.data);
                setMascotasFiltradas(data.data);
            })
            .catch(error => console.error('Error al obtener mascotas:', error));
    }, []);

    const actualizarFiltros = (nuevoFiltro) => {
        const nuevosFiltros = { ...filtros, ...nuevoFiltro };
        setFiltros(nuevosFiltros);

        const resultado = mascotas.filter(mascota => {
            return (
                (nuevosFiltros.tipo === '' || mascota.tipo.toLowerCase() === nuevosFiltros.tipo.toLowerCase()) &&
                (nuevosFiltros.edad === '' || mascota.edad.toLowerCase() === nuevosFiltros.edad.toLowerCase()) &&
                (nuevosFiltros.genero === '' || mascota.genero.toLowerCase() === nuevosFiltros.genero.toLowerCase()) &&
                (nuevosFiltros.region === '' || mascota.region.toLowerCase() === nuevosFiltros.region.toLowerCase()) &&
                (nuevosFiltros.comuna === '' || mascota.comuna.toLowerCase() === nuevosFiltros.comuna.toLowerCase())
            );
        });
        setMascotasFiltradas(resultado);
    };

    const seleccionarMascota = (mascota) => {
        setMascotaSeleccionada(mascota);
    };

    const enviarSolicitudAdopcion = (datosSolicitud) => {
        console.log('Datos de la solicitud de adopción:', datosSolicitud);
        alert('Solicitud de adopción enviada con éxito, esperamos que puedas vivir con tu nuevo amigo lo antes posible!');
    };

    return (
        <div className="App">
            <h1>Adopta un nuevo amigo peludo!!</h1>
            <FiltroMascotas filtros={filtros} manejarCambioFiltros={actualizarFiltros} />
            <ListaMascotas 
                mascotas={mascotasFiltradas} 
                seleccionarMascota={seleccionarMascota} 
            />
            {mascotaSeleccionada && (
                <FormularioSolicitud 
                    mascota={mascotaSeleccionada} 
                    enviarSolicitud={enviarSolicitudAdopcion} 
                />
            )}
        </div>
    );
}

export default App;

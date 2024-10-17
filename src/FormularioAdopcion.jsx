import React, { useState, useEffect } from 'react';
import FiltroMascotas from './FiltroMascotas';
import ListaMascotas from './ListaMascotas';
import FormularioSolicitud from './FormularioSolicitud';

const FormularioAdopcion = () => {
    const [mascotas, setMascotas] = useState([]);
    const [mascotasFiltradas, setMascotasFiltradas] = useState([]);
    const [mascotaSeleccionada, setMascotaSeleccionada] = useState(null);
    const [filtros, setFiltros] = useState({
        tipo: '',
        edad: '',
        genero: '',
        esterilizado: null,
        vacunas: null,
        region: '',
        comuna: ''
    });

    // API
    useEffect(() => {
        const obtenerMascotas = async () => {
            try {
                const respuesta = await fetch('https://huachitos.cl/api/animales');
                const datos = await respuesta.json();
                setMascotas(datos.data);
                setMascotasFiltradas(datos.data); // Inicialmente todas las mascotas son mostradas
            } catch (error) {
                console.error('Error al obtener la lista de mascotas:', error);
            }
        };
        obtenerMascotas();
    }, []);

    // filtro de caracteristicas
    const filtrarMascotas = () => {
        const resultado = mascotas.filter(mascota => {
            return (
                (filtros.tipo === '' || mascota.tipo.toLowerCase() === filtros.tipo.toLowerCase()) &&
                (filtros.edad === '' || mascota.edad.toLowerCase() === filtros.edad.toLowerCase()) &&
                (filtros.genero === '' || mascota.genero.toLowerCase() === filtros.genero.toLowerCase()) &&
                (filtros.esterilizado === null || mascota.esterilizado === filtros.esterilizado) &&
                (filtros.vacunas === null || mascota.vacunas === filtros.vacunas) &&
                (filtros.region === '' || mascota.region.toLowerCase() === filtros.region.toLowerCase()) &&
                (filtros.comuna === '' || mascota.comuna.toLowerCase() === filtros.comuna.toLowerCase())
            );
        });
        setMascotasFiltradas(resultado);
    };

    // cambio filtros
    const manejarCambioFiltros = (nuevosFiltros) => {
        setFiltros(nuevosFiltros);
        filtrarMascotas();
    };

    // simular que se ha adoptado
    const enviarSolicitudAdopcion = (datosSolicitud) => {
        console.log('Datos de la solicitud de adopción:', datosSolicitud);
        alert('Solicitud de adopción enviada!');
    };

    return (
        <div>
            <h1>Formulario de Adopción</h1>
            <FiltroMascotas filtros={filtros} manejarCambioFiltros={manejarCambioFiltros} />
            <ListaMascotas mascotas={mascotasFiltradas} seleccionarMascota={setMascotaSeleccionada} />
            {mascotaSeleccionada && (
                <FormularioSolicitud mascota={mascotaSeleccionada} enviarSolicitud={enviarSolicitudAdopcion} />
            )}
        </div>
    );
};

export default FormularioAdopcion;

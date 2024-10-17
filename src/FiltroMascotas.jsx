import React from 'react';

const FiltroMascotas = ({ filtros, manejarCambioFiltros }) => {
    const manejarCambio = (e) => {
        const { name, value } = e.target;
        manejarCambioFiltros({
            ...filtros,
            [name]: value
        });
    };

    return (
        <div>
            <h2>Filtrar Mascotas</h2>
            <input
                type="text"
                name="tipo"
                placeholder="Tipo de mascota"
                value={filtros.tipo}
                onChange={manejarCambio}
            />
            <input
                type="text"
                name="edad"
                placeholder="Edad"
                value={filtros.edad}
                onChange={manejarCambio}
            />
            <input
                type="text"
                name="genero"
                placeholder="Género"
                value={filtros.genero}
                onChange={manejarCambio}
            />
            <input
                type="text"
                name="region"
                placeholder="Región"
                value={filtros.region}
                onChange={manejarCambio}
            />
            <input
                type="text"
                name="comuna"
                placeholder="Comuna"
                value={filtros.comuna}
                onChange={manejarCambio}
            />
        </div>
    );
};

export default FiltroMascotas;

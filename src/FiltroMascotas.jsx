import React from 'react';

function FiltroMascotas({ filtros, manejarCambioFiltros }) {
    function manejarCambio(e) {
        const { name, value } = e.target;
        manejarCambioFiltros({
            ...filtros,
            [name]: value
        });
    }

    return (
        <div className="filtro-mascotas">
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
}

export default FiltroMascotas;

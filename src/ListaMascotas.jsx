import React from 'react';

function ListaMascotas({ mascotas, seleccionarMascota }) {

    // he añadido una función para limpiar la descripción porque me salía con <p></p>, creo que hay formas más faciles de hacerlo
    const limpiarDescripcion = (descripcion) => {
        return descripcion.replace(/<\/?p>/g, '');
    };

    return (
        <div className="lista-mascotas">
            {mascotas.map(mascota => (
                <div key={mascota.id} className="tarjeta-mascota" onClick={() => seleccionarMascota(mascota)}>
                    <img src={mascota.imagen} alt={mascota.nombre} className="imagen-mascota" />
                    <h3>{mascota.nombre}</h3>
                    <p><strong>Tipo:</strong> {mascota.tipo}</p>
                    <p><strong>Edad:</strong> {mascota.edad}</p>
                    <p><strong>Descripción Física:</strong> {limpiarDescripcion(mascota.desc_fisica)}</p>
                    <p><strong>Descripción Personalidad:</strong> {limpiarDescripcion(mascota.desc_personalidad)}</p>
                </div>
            ))}
        </div>
    );
}

export default ListaMascotas;

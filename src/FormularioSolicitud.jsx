import React, { useState } from 'react';

function FormularioSolicitud({ mascota, enviarSolicitud }) {
    const [datos, setDatos] = useState({
        nombre: '',
        email: '',
        telefono: '',
        direccion: '',
        comentario: ''
    });

    function manejarCambio(e) {
        const { name, value } = e.target;
        setDatos({
            ...datos,
            [name]: value
        });
    }

    function manejarEnvio(e) {
        e.preventDefault();
        enviarSolicitud({
            ...datos,
            mascotaId: mascota.id
        });
    }

    return (
        <form className="formulario-solicitud" onSubmit={manejarEnvio}>
            <h2>Solicitud de Adopción para {mascota.nombre}</h2>
            <input
                type="text"
                name="nombre"
                placeholder="Tu nombre"
                value={datos.nombre}
                onChange={manejarCambio}
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Tu correo electrónico"
                value={datos.email}
                onChange={manejarCambio}
                required
            />
            <input
                type="tel"
                name="telefono"
                placeholder="Tu teléfono"
                value={datos.telefono}
                onChange={manejarCambio}
                required
            />
            <input
                type="text"
                name="direccion"
                placeholder="Tu dirección"
                value={datos.direccion}
                onChange={manejarCambio}
                required
            />
            <textarea
                name="comentario"
                placeholder="Comentario adicional"
                value={datos.comentario}
                onChange={manejarCambio}
            />
            <button type="submit">Enviar Solicitud</button>
        </form>
    );
}

export default FormularioSolicitud;

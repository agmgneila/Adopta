import React, { useState } from 'react';

const FormularioSolicitud = ({ mascota, enviarSolicitud }) => {
    const [datos, setDatos] = useState({
        nombre: '',
        email: '',
        telefono: '',
        direccion: '',
        comentario: ''
    });

    const manejarCambio = (e) => {
        const { name, value } = e.target;
        setDatos({
            ...datos,
            [name]: value
        });
    };

    const manejarEnvio = (e) => {
        e.preventDefault();
        enviarSolicitud({
            ...datos,
            mascotaId: mascota.id
        });
    };

    return (
        <form onSubmit={manejarEnvio}>
            <h2>Solicitud de Adopción para {mascota.nombre}</h2>
            <input
                type="text"
                name="nombre"
                placeholder="Tu nombre"
                value={datos.nombre}
                onChange={manejarCambio}
            />
            <input
                type="email"
                name="email"
                placeholder="Tu correo electrónico"
                value={datos.email}
                onChange={manejarCambio}
            />
            <input
                type="tel"
                name="telefono"
                placeholder="Tu teléfono"
                value={datos.telefono}
                onChange={manejarCambio}
            />
            <input
                type="text"
                name="direccion"
                placeholder="Tu dirección"
                value={datos.direccion}
                onChange={manejarCambio}
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
};

export default FormularioSolicitud;

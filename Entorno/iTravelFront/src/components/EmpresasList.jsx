import { useEffect, useState } from 'react';
import { getAllEmpresas } from '../api/Empresas.api';

export function EmpresasList() {
    const [empresas, setEmpresas] = useState([]);

    useEffect(() => {
        async function loadEmpresas() {
            try {
                const response = await getAllEmpresas();
                console.log(response.data);
                setEmpresas(response.data);
            } catch (error) {
                console.error('Error al cargar empresas:', error);
            }
        }

        loadEmpresas();
    }, []);

    return (
        <div>
            <h1>Lista de Empresas</h1>
            <ul>
                {empresas.map((empresa) => (
                    <li key={empresa.id}>
                        <strong>{empresa.nombre}</strong> - {empresa.direccion}
                    </li>
                ))}
            </ul>
        </div>
    );
}
function cargarDatosDeAirtable(apiKey, baseId, tableName, callback) {
    const apiUrl = `https://api.airtable.com/v0/${baseId}/${tableName}`;

    fetch(apiUrl, {
        headers: {
            Authorization: `Bearer ${apiKey}`
        }
    })
        .then(response => response.json())
        .then(data => callback(data))
        .catch(error => console.error('Error:', error));
}

// Para mantener el comportamiento actual cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    const apiKey = 'TU_API_KEY'; // Reemplaza con tu API key real
    const baseId = 'apphA4dkXJZdMjb68'; // Reemplaza con tu Base ID real
    const tableName = 'Life Journey'; // Reemplaza con tu Table Name real

    cargarDatosDeAirtable(apiKey, baseId, tableName, (data) => {
        const datosElement = document.getElementById('datos');
        data.records.forEach(record => {
            const listItem = document.createElement('li');
            listItem.textContent = record.fields.Nombre; // Asumiendo que 'Nombre' es uno de los campos en tu tabla de Airtable
            datosElement.appendChild(listItem);
        });
    });
});

// Exportar para pruebas
if (typeof module !== 'undefined' && module.exports) {
    module.exports = cargarDatosDeAirtable;
}

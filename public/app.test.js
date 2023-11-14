const cargarDatosDeAirtable = require('./app');

// Simular fetch
global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve({ records: [{ fields: { Nombre: 'Amigo 1' } }] })
    })
);

test('cargarDatosDeAirtable carga correctamente los datos de Airtable', done => {
    function callback(datos) {
        try {
            expect(datos.records[0].fields.Nombre).toBe('Javier');
            done();
        } catch (error) {
            done(error);
        }
    }

    cargarDatosDeAirtable('FAKE_API_KEY', 'FAKE_BASE_ID', 'FAKE_TABLE_NAME', callback);
});

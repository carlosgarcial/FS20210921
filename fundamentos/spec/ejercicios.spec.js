describe('Datos de las pruebas', function() {
    xdescribe('ejer6',() => {
        it('palinOK', () => {
            let caso = 'La ruta nos aporto otro paso natural';

            expect(ejer6(caso)).toBeTrue()
        })

        xit('palinNo', () => {
            let caso = 'prueba';

            expect(ejer6(caso)).toBeFalse();
        })
        
    })

    describe('ejer5',() => {
       
        
    })
    
})
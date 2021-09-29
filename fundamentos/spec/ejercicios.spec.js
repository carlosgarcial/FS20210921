describe('Datos de las pruebas', function() {

    xdescribe('ejer5',() => {
        it('dniOK', () => {
            let caso = '23467838E';

            expect(ejer5(caso)).toBeTrue()
        })


        it('dniNo', () => {
            let caso = '234677838E';

            expect(ejer5(caso)).toBeFalse() 
        })
    })

    describe('ejer6',() => {
        it('palinOK', () => {
            let caso = 'ana';

            expect(ejer6(caso)).toBeTrue()
        })

        xit('palinNo', () => {
            let caso = 'prueba';

            expect(ejer6(caso)).toBeFalse();
        })
        
    })
    
})
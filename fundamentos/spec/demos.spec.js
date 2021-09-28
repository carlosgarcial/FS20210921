/* eslint-disable no-undef */
describe('Datos de las pruebas', function() {
    describe('Calculos',function() {
        it('suma 2 + 2', function() {
            let a = 2, b = 2;
            let reslt;

            reslt = suma(a, b)

            expect(reslt).toBe(4);
        })

        it('suma negativa', function() {
            let a = 2, b = -2;
            let reslt;

            reslt = suma(a, b)

            expect(reslt).toBe(0);
        })
    })

    it('Este funciona siempre', function() {
        expect(true).toBeTrue()
    })

    it('Este falla siempre', function() {
        expect(true).not.toBeFalse()
    })
})

describe('Otra Suite',function() {
        
})
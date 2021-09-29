describe('Datos de las pruebas', function() {

    xdescribe('ejer2',() => {
        let num = 99;
        let nrondas = 10;
        let rndnum = Math.floor(Math.random() * 100) + 1;


        it('mayornum',() =>{
            expect(ejer2(num)).toBeGreaterThan(rndnum);
        })

        it('menornum',() =>{
            expect(ejer2(num)).toBeLessThan(rndnum);
        })

        it('igualnum',() =>{
            expect(ejer2(num)).toEqual(rndnum);
        })

        xit('numvueltas',() =>{
            expect(ejer2(nrondas)).toEqual(10);
        })
    })

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

    xdescribe('ejer6',() => {
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
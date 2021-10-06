import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraComponent } from './calculadora.component';

describe('CalculadoraComponent', () => {
  let component: CalculadoraComponent;
  let fixture: ComponentFixture<CalculadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculadoraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('Calculadora',()=>{
  describe('Calculos',()=>{
      it('poner_digito', () => {
          let c = new CalculadoraComponent();
          c.ponerdigito('1');
          expect(c.pantalla).toBe('1');
          c.ponerdigito('0');
          expect(c.pantalla).toBe('10');
      });

      it('sumar', () => {
          let c = new CalculadoraComponent();
          c.ponerdigito('10');
          c.calcular('+');
          c.ponerdigito('5');
          c.calcular('=');
          expect(c.pantalla).toBe('15');
      });

      it('restar', () => {
          let c = new CalculadoraComponent();
          c.ponerdigito('20');
          c.calcular('-');
          c.ponerdigito('14')
          c.calcular('=');
          expect(c.pantalla).toBe('6');
      });

      it('multiplicar', () => {
          let c = new CalculadoraComponent();
          c.ponerdigito('6');
          c.calcular('*');
          c.ponerdigito('2')
          c.calcular('=');
          expect(c.pantalla).toBe('12');
      });

      it('dividir', () => {
          let c = new CalculadoraComponent();
          c.ponerdigito('12');
          c.calcular('/');
          c.ponerdigito('6')
          c.calcular('=');
          expect(c.pantalla).toBe('2');
      });

  })

  describe('Operaciones_Borrar',()=>{
      it('borrar_digito_positivo', () => {
          let c = new CalculadoraComponent();
          c.ponerdigito('3234');
          c.borrar_digito();
          expect(c.pantalla).toBe('323');
          c.borrar_digito();
          expect(c.pantalla).toBe('32');
          c.borrar_digito();
          expect(c.pantalla).toBe('3');
          c.borrar_digito();
          expect(c.pantalla).toBe('0');
      });

      it('borrar_digito_negativo', () => {
          let c = new CalculadoraComponent();
          c.ponerdigito('-3234');
          c.borrar_digito();
          expect(c.pantalla).toBe('-323');
          c.borrar_digito();
          expect(c.pantalla).toBe('-32');
          c.borrar_digito();
          expect(c.pantalla).toBe('-3');
          c.borrar_digito();
          expect(c.pantalla).toBe('0');
      });

  })

  describe('Operaciones_Cambiar_signos',()=>{
      it('cambiar_signo', () => {
          let c = new CalculadoraComponent();
          c.ponerdigito('3');
          c.cambiar_signo();
          expect(c.pantalla).toBe('-3');
      });
  })

  describe('Operaciones_Coma',()=>{
      it('poner_coma_positivo', () => {
          let c = new CalculadoraComponent();
          c.ponerdigito('3');
          c.poner_coma();
          c.ponerdigito('4');
          expect(c.pantalla).toBe('3.4');
      });

      it('poner_coma_negativo', () => {
          let c = new CalculadoraComponent();
          c.ponerdigito('-3');
          c.poner_coma();
          c.ponerdigito('4');
          expect(c.pantalla).toBe('-3.4');
      });

      it('empezar_coma', () => {
          let c = new CalculadoraComponent();
          c.poner_coma();
          c.ponerdigito('2');
          expect(c.pantalla).toBe('0.2');
      });
  })

})

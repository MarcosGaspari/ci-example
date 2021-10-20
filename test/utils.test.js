const { gerarNumeroAleatorio, acharCaracter } = require('../lib/utils');

describe('Utils', () => {
    describe('gerarNumeroAleatorio', () => {
        test('fim nao pode ser negativo', () => {
            expect(gerarNumeroAleatorio(20, -5))
                .toBe(-1);
        });
    });
    describe('Inicio menor que zero', () => {
        test('inicio menor que zero', () => {
            expect(gerarNumeroAleatorio(-1, 3))
                .toBe(-1);
        });
    });
    describe('Gera numero aleatorio', () => {
        test('Gera numero aleatorio', () => {
            expect(gerarNumeroAleatorio(0, 3))
                .toBe(0||1||2||3);
        });
    });

    describe('acharCaracter', () => {
        test('comprimento invalido', () => {
            expect(acharCaracter(-4, 'abcde', 'c'))
                .toBe('comprimento invalido');
        });
    });
    describe('acharCaracter', () => {
        test('valor encontrado', () => {
            expect(acharCaracter(5, 'abcde', 'c'))
                .toBe(2);
        });
    });   
    describe('acharCaracter', () => {
        test('valor não encontrado', () => {
            expect(acharCaracter(5, 'abcde', 'g'))
                .toBe('caracter não encontrado');
        });
    });  
});
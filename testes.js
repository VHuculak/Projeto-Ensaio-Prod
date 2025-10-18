
/* Tentar utilizar o "case" no projeto para nao ficar em "else if" infinitos 
Pegar o resultado de uma variavel, provavelmente utilizando document e declarando a variavel
e nisso passar no case para retornar a lista de ensaios, PORÉM, preciso arrumar um jeito para que na variavel
a pessoa possa digitar de formas diferentes na caixa de texto e não algo em especifico, mas nao sei se o CASE
permite o uso de varios paramentros de comparação*/


var diaSem = '1 Sexta'

switch(diaSem) {
    
        case 'Domingo':
        console.log('Domingo')
            break
        case 'Segunda':
        console.log('Segunda')
            break
        case 'Terça':
        console.log('Terça')
            break
        case 'Quarta':
        console.log('Quarta')
            break
        case 'Quinta':
        console.log('Quinta')
            break
        case '1 Sexta':
        console.log("Jd.Liberdade,\nJd.Nova Aliança (SDI)")
            break
        case 'Sabado':
        console.log('Sabado')
            break
        default:
            console.log('[ERRO] Dia Invalido')
        break
}
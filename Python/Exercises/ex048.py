'''  Faça um programa que calcule a soma entre todos os números impares que são múltiplos de três e
    que se encontram no intervalo de 1 até 500.'''

print('*=' * 35)
numero = int(input('Digite um numero para saber a soma entre todos os multiplos de tres  entre 0 e o numero digitado: '))
print('*=' * 35)

print ('Os numeros impares e multiplos de tres entre 0 e {} são: '.format(numero))
soma = 0
cont = 0
for numero in range (1, numero+1, 2):
    if numero % 3 == 0:
        print(numero, end=' ')
        soma = soma + numero
        cont = cont + 1

print('E neste intervalo existem {} valores e a soma destes numeros é {}'.format(cont,soma))


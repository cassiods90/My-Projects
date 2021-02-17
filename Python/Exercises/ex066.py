''' Crie um programa que leia números inteiros pelo teclado. O programa só vai parar quando o usuário digitar
    o valor 999, que é a condição de parada. No final, mostre quantos números foram digitados e qual foi a soma
    entre elas (desconsiderando o flag).'''

cont = soma = 0
while True:
    numero = int(input('Digite um numero qualquer. [999 para sair]: '))
    if numero == 999:
        break
    cont += 1
    soma += numero

print(f'Você digitou {cont} numeros e a soma deles é {soma}')

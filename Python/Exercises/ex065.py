''' Crie um programa que leia vários números inteiros pelo teclado. No final da execução, mostre a média entre
    todos os valores e qual foi o maior e o menor valores lidos. O programa deve perguntar ao usuário se ele
    quer ou não continuar a digitar valores.'''


print('__' * 25)
numero = cont = media = maior = menor = soma = 0
opcao = '1'

while opcao == '1':
    numero = int(input('Digite um numero qualquer: '))
    cont += 1
    soma += numero
    if cont == 1:
        maior = numero
        menor = numero
    else:
        if numero > maior:
            maior = numero
        else:
            menor = numero



    opcao = str(input('''Você quer digitar mais numeros? 
[ 1 ] Sim 
[ 2 ] Não
_________________________
Qual opção: '''))
    print('')

media = soma / cont

print('Foram lidos {} valores e a media entre eles é {:.2f}'.format(cont, media))
print('O maior numero digitado foi {} e o menor foi {}.'.format(maior, menor))





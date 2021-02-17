# Faça um programa que leia um numero inteiro e mostre na tela o seu sucessor e antecessor.

n1= int(input('Digite um numero para saber seu sucessor e seu antecessor:'))
sucessor = n1 + 1
antecessor = n1 - 1

print('O numero digitado foi {}, o seu sucessor é {} e o seu antecessor é {}'.format(n1, sucessor, antecessor))

# Outra maneira de fazer, sem declarar as variaveis.

print('O numero digitado foi {}, o seu sucessor é {} e o seu antecessor é {}' .format(n1, (n1+1), (n1-1)))



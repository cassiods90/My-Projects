''' Escreva um programa que leia um número N inteiro qualquer e mostre
    na tela os N primeiros elementos de uma Sequência de Fibonacci.  '''

print('__' * 32)
print("Bem vindo a SEQUENCIA DE FIBONACCI !!!")
print('__' * 32)
numero = int(input('Digite o numero de elementos que voce quer ver da segquencia: '))
print('--' * 32)

t1 = 0
t2 = 1

print('{} -> {}'.format(t1, t2), end = '')
cont = 3
while cont <= numero:
    t3 = t1 + t2
    print(' -> {}'.format(t3), end = '')
    t1 = t2
    t2 = t3
    cont += 1
print(' -> Fim')


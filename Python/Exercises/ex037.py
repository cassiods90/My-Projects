''' Escreva um programa em Python que leia um número inteiro qualquer e peça para o usuário escolher qual
será a base de conversão: 1 para binário, 2 para octal e 3 para hexadecimal.'''

num = int(input('Digite um numero inteiro: '))
print('''Escolha uma das bases para conversão:
[ 1 ] -> Converter para BINARIO
[ 2 ] -> Converter para OCTAL
[ 3 ] -> Converter para HEXADECIMAL''')
opcao = int(input('Digite sua opção: '))

if opcao == 1:
    print('{} convertido para binario é equivalente a {}'.format(num, bin(num)[2:]))

elif opcao == 2:
    print('{} convertido para octal é equivalente a {}'.format(num, oct(num)[2:]))

elif opcao == 3:
    print('{} convertido para hexadecimal é equivalente a {}'.format(num, hex(num)[2:]))

else:
    print('Opção invalida, tente novamente.')

''' Exercício Python 059: Crie um programa que leia dois valores e mostre um menu na tela:
[ 1 ] somar
[ 2 ] multiplicar
[ 3 ] maior
[ 4 ] novos números
[ 5 ] sair do programa
Seu programa deverá realizar a operação solicitada em cada caso.'''

print('__' * 15)
print('Vamos brincar de calcular ')
print('__' * 15)

print('Primeiro, digite dois numeros: ')
n1 = int(input('Digite o primeiro numero: '))
n2 = int(input('Digite o segundo numero: '))
opcao = 0
print(''' ____________________
[ 1 ] somar
[ 2 ] multiplicar
[ 3 ] maior
[ 4 ] novos números
[ 5 ] sair do programa
____________________''')
opcao = str(input('Qual opção você escolheu ?'))


while opcao != '5':
    print(''' ____________________
    [ 1 ] somar
    [ 2 ] multiplicar
    [ 3 ] maior
    [ 4 ] novos números
    [ 5 ] sair do programa
    ____________________''')
    opcao = str(input('Qual opção você escolheu ?'))

    if opcao == '1':
        print('{} + {} = {}'.format(n1, n2, (n1+n2)))

    elif opcao == '2':
        print('{} * {} = {}'.format(n1, n2, (n1*n2)))

    elif opcao == '3':
        if n1 > n2:
            print('{} é maior que {}.'.format(n1, n2))
        else:
            print('{} é menor que {}.'.format(n1,n2))

    elif opcao == '4':
        n1 = int(input('Digite o primeiro numero: '))
        n2 = int(input('Digite o segundo numero: '))
    else:
        print('Opção invalida, Digite a opção novamente.')
print('Fim do Programa.')


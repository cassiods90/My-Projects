''' Faça um programa que mostre a tabuada de vários números, um de cada vez, para cada valor digitado pelo usuário.
    O programa será interrompido quando o número solicitado for negativo.'''




while True:
    print('__' * 32)
    numero = int(input('Digite um numero para ver a sua tabuada. para sair digite 0: '))
    print('__' * 32)
    cont = 1
    if numero == 0:
        break
    while cont <=10:
        tabuada = cont * numero
        print(f'{numero} X {cont} = {tabuada}')
        cont += 1

print('Obrigado, volte sempre.')


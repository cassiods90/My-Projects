def escreva(msg):
    tam = len(msg) + 4
    print('-' * tam)
    print(f' {msg}')
    print('-' * tam)

while True:
    frase = str(input('Digite uma palavra ou frase qualquer: '))
    escreva(frase)


    while True:
        opcao = str(input('Você quer continuar? [S ou N]: ')).upper()[0]
        if opcao in 'SN':
            break
        print('ERRO ! Tente novamente digitando apenas S ou N.')
    if opcao == 'N':
        break

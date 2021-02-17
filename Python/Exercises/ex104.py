''' Crie um programa que tenha a função leiaInt(), que vai funcionar de forma semelhante 'a função
    input() do Python, só que fazendo a validação para aceitar apenas um valor numérico.
    Ex: n = leiaInt('Digite um n: ') '''

def LeiaInt(msg):
    ok = False
    valor = 0
    while True:
        n = str(input(msg))
        if n.isnumeric():
            valor = int(n)
            ok = True
        else:
            print('\033[0;31mERRO !!! Você digitou um valor invalido, tente novamente.\033[m\n')
        if ok:
            break
    return valor


n = LeiaInt('Digite um numero: ')
print(f'Você acabou de digitar o numero {n}')


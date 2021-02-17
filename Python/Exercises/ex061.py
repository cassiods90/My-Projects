''' Refaça o DESAFIO 051, lendo o primeiro termo e a razão de uma PA, mostrando os
    10 primeiros termos da progressão usando a estrutura while.'''


print('__' * 15)
print('!!! Termos de uma P.A. !!!')
print('__' * 15)

termo = int(input("Digite o termo desta PA: "))
razao = int(input("Digite a razão desta PA: "))
numero = int(input("Digite a progressão desta PA: "))

progressao = termo + (numero-1) * razao



while termo <= progressao:
    print(termo, end = ' -> ')
    termo = termo + razao

print('Acabou')

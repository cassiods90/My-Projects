''' Desenvolva um programa que leia o primeiro termo e a razão de uma PA. No final,
    mostre os 10 primeiros termos dessa progressão.'''

print('__' * 15)
print('!!! Termos de uma P.A. !!!')
print('__' * 15)

termo = int(input("Digite o termo desta PA: "))
razao = int(input("Digite a razão desta PA: "))
numero = int(input("Digite a progressão desta PA: "))

progressao = termo + (numero-1) * razao

cont = 0
for termo in range(termo, progressao + razao, razao):
    print(termo, end = ' -> ')
    cont = cont +1
print('Acabou')
print('Esta foi a PA digitada e apareceram {} numeros dentro deste intervalo.'.format(cont))





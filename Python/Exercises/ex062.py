''' Melhore o DESAFIO 061, perguntando para o usuário se ele  quer mostrar mais alguns termos.
    O programa encerrará quando ele disser que quer mostrar 0 termos.'''


print('__' * 15)
print('!!! Termos de uma P.A. !!!')
print('__' * 15)

primeiro = int(input("Digite o termo desta PA: "))
razao = int(input("Digite a razão desta PA: "))
termo = primeiro
cont = 1
total = 0
mais = 10

while mais != 0:
    total = total + mais

    while cont <= total:
        print(termo, end = ' -> ')
        termo += razao
        cont += 1
    print('STOP')
    mais = int(input('Voce quer mostrar mais termos ? Digite um valor ou 0 sair: '))
print('Progressão finalizado com {} termos mostrados.'.format(total))





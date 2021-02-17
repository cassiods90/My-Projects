''' Aprimore o desafio 93 para que ele funcione com vários jogadores, incluindo um sistema de visualização de
    detalhes do aproveitamento de cada jogador.'''

time = list()
jogador = dict()
partidas = list()

while True:
    jogador.clear()
    jogador['nome'] = str(input('Digite o nome do jogador: '))
    total = int(input(f'Quantas partidas {jogador["nome"]} jogou: '))
    partidas.clear()
    for c in range(1, total+1):
        partidas.append(int(input(f'Quantos gols na {c}º partida: ')))
    jogador['gols'] = partidas[:]
    jogador['total'] = sum(partidas)
    time.append(jogador.copy())

    while True:
        opcao = str(input('Você quer continuar? [S ou N]: ')).upper()[0]
        if opcao in 'SN':
            break
        print('ERRO ! Tente novamente digitando apenas S ou N.')
    if opcao == 'N':
        break
print('_' * 55)

print('cod ', end = '')
for i in jogador.keys():
    print(f'{i:<20}', end = '')
print()

print('_' * 55)
for k, v in enumerate(time):
    print(f'{k:>3} ', end = '')
    for d in v.values():
        print(f'{str(d):<20}', end = '')
    print()
print('_' * 55)

while True:
    busca = int(input('Mostrar dados de qual jogador? (999 para parar): '))
    if busca == 999:
        break
    if busca >= len(time):
        print(f'Erro ! Não existe jogador com este codigo, digite um cod valido.')
    else:
        print(f' === Levatamento do jogador {time[busca]["nome"]}: ')
        for i, g in enumerate(time[busca]['gols']):
            print(f'   -> No jogo {i+1} fez {g} gols.')
    print('_' * 55)


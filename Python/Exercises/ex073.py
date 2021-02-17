''' Crie uma tupla preenchida com os 20 primeiros colocados da Tabela do Campeonato Brasileiro de Futebol de 2020,
    na ordem de colocação. Depois mostre:
    a) Os 5 primeiros times.
    b) Os últimos 4 colocados.
    c) Times em ordem alfabética.
    d) Em que posição está o time do Gremio.'''

tabela = ('Flamengo', 'Santos', 'Palmeiras', 'Grêmio', 'Athletico-PR', 'São Paulo', 'Internacional',
            'Corinthians', 'Fortaleza', 'Goiás', 'Bahia', 'Vasco', 'Atletico-MG', 'Fluminense', 'Botafoo',
            'Ceará', 'Cruzeiro', 'CSA', 'Chapecoense', 'Avaí')

print('_' * 40)
print('TABELA BRASILEIRÃO 2019')
print('_' * 40)
print(f'A colocação dos clubes foi {tabela}')
print('_' * 40)
print(f'Os cinco primeiros colocados são {tabela[:5]}.')
print('_' * 40)
print(f'Os times na Zona de rebaixamento são {tabela[-4:]}.')
print('_' * 40)
print(f'A ordem alfabetica dos clubes é: {sorted(tabela)}')
print('_' * 40)
print(f'O time do Grêmio está na {tabela.index("Grêmio")+1}ª posição.')

clube = str(input('Digite o seu clube para saber em que posição ele esta: '))
print(f'O time do {clube} está na {tabela.index(clube)+1}ª posição.')

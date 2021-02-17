''' Faça um programa que leia a velocidade de um carro. Se ele ultrapassar 80km/h, mostre uma mensagem dizendo
    que ele foi multado. A multa vai custar R$ 7,00 para cada km acima do limite de velocidade.'''

velocidade = int(input('Digite em qual velocidade você passou no radar: '))

if (velocidade <= 80):
    print('Parabens, voce passou  a {}km/h e esta dentro do limite de velocidade.'.format(velocidade))
else:
    multa = (velocidade - 80)*7
    print('Infelizmente, voce passou a {}Km/h e esta acima do limite de velocidade.'.format(velocidade))
    print('Sera multado em R${}'.format(multa))

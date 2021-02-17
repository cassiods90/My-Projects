''' Desenvolva uma lógica que leia o peso e a altura de uma pessoa, calcule seu Índice de Massa Corporal (IMC) e mostre seu status, de acordo com a tabela abaixo:
- IMC abaixo de 18,5: Abaixo do Peso
- Entre 18,5 e 25: Peso Ideal
- 25 até 30: Sobrepeso
- 30 até 40: Obesidade
- Acima de 40: Obesidade Mórbida '''

peso = float(input('Digite qual é o seu peso: '))
altura = float(input('Digite qual é a sua altura: '))

imc = peso / (altura ** 2)
print('O seu IMC é de {:.1f}'.format(imc))

if imc > 40:
    print('Você esta com OBESIDADE MÓRBIDA')

elif imc < 40 and imc > 30:
    print('Você esta com OBESIDADE')

elif imc <30 and imc > 25:
    print('Você esta com SOBREPESO')

elif imc <25 and imc > 18.5:
    print('Você esta com o seu PESO IDEAL')

else:
    print('Você esta ABAIXO DO PESO')
    


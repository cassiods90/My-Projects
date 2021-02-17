# Escreva um programa que leia um valor em metros e o exiba convertido em centrimetros, milimetros e kilometros.


valor = float(input('Digite um valor em metros: '))
cm = valor * 100
mm = valor * 1000
print('Você escolheu converter {}m que corresponde a {}centimetros e {}milimetros'.format(valor, cm, mm))


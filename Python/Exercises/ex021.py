''' Faça um programa em python que abra e reproduza o audio de um arquivo em mp3.'''

from pygame import

mixer.init()
mixer.music.load('ex021.mp3')
mixer.music.play()

while mixer.music.get_busy():
    time.Clock().tick(10)
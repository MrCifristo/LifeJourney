import random
hola = []

for i in range(1,30):

    hola2 = [i]
    
    for j in range(6):
        hola2.append(0)
    hola.append(hola2)

# print (hola)

x1 = random.randint(20,300)
x2 = random.randint(20,300)
x3 = random.randint(20,300)
x4 = random.randint(20,300)
x5 = random.randint(20,300)
x6 = random.randint(20,300)

hola[0][1] = x1
hola[0][2] = x2
hola[0][3] = x3
hola[0][4] = x4
hola[0][5] = x5
hola[0][6] = x6
# print (hola)


for i in range (1,29):
    for j in range(1,7):
        hola[i][j]=hola[i-1][j]
        rand=random.randint(-5,10)
        nuev = hola[i][j] +rand
        hola[i][j]=nuev

print (hola)






# hola = [x0,x1,x2,x3,x4,x5,x6]
# for i in range(1,30):

#     # hola2 = [i]
#     for j in range(6):
#         ran = random.randint(-5,5)
#         hola2 = hola[j][i]
#         calcul = hola2 +ran
#     hola.append(hola2)

# print(hola)





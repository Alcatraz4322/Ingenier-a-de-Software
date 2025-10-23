c = [0, 2, 3, 1, 5, 7, 6, 21, 7, 11, 9, 0, 2]

c[11] += c[3]
c[5] = c[1] + c[c[9]]

while True:
     c[12] *= c[12]
     if c[5] == c[10]:
        break
     c[12] -= 2
     c[5] += c[2]

c[8] = c[7] - c[5]
c[6] = c[12] + c[8]

print("Casilla 6:", c[6])
print(f"Arreglo final: {c}")

import math

n = 600851475143
i = 2
while i < math.sqrt(n):
    while n % i == 0:
        n = n / i
    i += 1
print (n)
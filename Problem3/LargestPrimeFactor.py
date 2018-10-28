import math

n = 600851475143
if n%2 == 0:
    n /= 2
i = 3
while i < math.sqrt(n):
    while n%i == 0:
        n /= i
    i += 2 # Increase by 2 because two is the lowest non-prime
print (int(n))
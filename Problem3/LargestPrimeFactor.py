# Project Euler Question 3
# The prime factors of 13195 are 5, 7, 13 and 29.
# What is the largest prime factor of the number 600851475143 ?

import math

n = 600851475143
if n%2 == 0: # Check 2 initialially
    n /= 2
i = 3
while i < math.sqrt(n):
    while n%i == 0:
        n /= i
    i += 2 # Increase by 2 because two is the lowest non-prime
print (int(n))
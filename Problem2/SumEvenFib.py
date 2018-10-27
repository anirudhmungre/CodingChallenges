prev = 0
fib = 1
x = 0
add = 0
while fib<=4*(10**6):
    temp = fib
    fib += prev
    prev = temp
    if fib%2==0:
        add+=fib
print(add)
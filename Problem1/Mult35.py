# Project Euler Question 1
# If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
# Find the sum of all the multiples of 3 or 5 below 1000.

def binarySearch (arr, l, r, x): 
    # Check base case 
    if r >= l: 
        mid = l + (r - l)//2
        if arr[mid] == x: 
            return mid 
        elif arr[mid] > x: 
            return binarySearch(arr, l, mid-1, x) 
        else: 
            return binarySearch(arr, mid+1, r, x) 
    else: 
        return -1

arr = list()
for x in range(3, 1000):
    if (x%3==0 or x%5==0) and binarySearch(arr, 0, len(arr)-1, x)==-1:
        arr.append(x)

add = 0
for i in arr:
    add+=i
print(add)
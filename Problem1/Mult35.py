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
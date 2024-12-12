name = input("enter your name: ")
lst = list(name)
temp=0
for i in range(len(name)):
    for j in range(len(name)-i-1):
        if(lst[j] > lst[j+1]):
            temp = lst[j]
            lst[j] = lst[j+1]
            lst[j+1] = temp
print(lst)


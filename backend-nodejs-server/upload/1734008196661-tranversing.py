import numpy as np 

twoDarray = np.array([[11,15,10,6],
                      [10,14,11,5],
                      [12,17,12,8],
                      [15,18,14,9]])

target = 8

for i in range(len(twoDarray)):
    for j in range(len(twoDarray[0])):
        if twoDarray[i][j] == target:
            print("row number is :" ,i+1 ,"column number is", j+1)
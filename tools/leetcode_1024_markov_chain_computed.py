from itertools import permutations

nums = [2, 34, 4, 10, 2, 2, 9, 24, 29, 5, 2,  9, 996]
opts = ['|', '>>',  '^', '&', '%']
numset = set(permutations(nums, 4))
optset = set(permutations(opts, 3))
ans = []
for num in numset:
    for opt in optset:
        todo = f'((({num[0]}{opt[0]}{num[1]}){opt[1]}{num[2]}){opt[2]}{num[3]})'
        try:
            if eval(todo) == 1024:
                ans.append(todo)
        except:
            # ZeroDivisionError
            pass
print(ans, len(ans))

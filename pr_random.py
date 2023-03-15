import random
import pr_get_number as gn

random.seed(gn.getSeed)
lotto = []
i = 0
while (i<6) :
    n = random.randint(1, 45)
    if n not in lotto :
        lotto.append(n)
        i = i+1

lotto.sort()
print(lotto)

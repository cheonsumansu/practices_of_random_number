import random
from datetime import datetime

random.seed(int(datetime.now().microsecond))
lotto = []
i = 0
while (i<6) :
    n = random.randint(1, 45)
    if n not in lotto :
        lotto.append(n)
        i = i+1

lotto.sort()
print(lotto)

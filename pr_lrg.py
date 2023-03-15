from datetime import datetime
import pr_get_number as gn

def linearCongruentialGenerator(x0, a, c, m, num) :
    for i in range(num) :
        x0 = (a*x0+c)%m
        yield x0

first = int(datetime.now().microsecond)
lcg = linearCongruentialGenerator(first, gn.a, gn.c, gn.m, 5)
results = []
for rn in lcg :
    results.append(rn)

print(results)
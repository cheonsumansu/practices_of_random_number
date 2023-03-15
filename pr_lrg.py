import pr_get_number as gn

def linearCongruentialGenerator(x0, a, c, m, num) :
    for i in range(num) :
        x0 = (a*x0+c)%m
        yield x0

picknum = 5
lcg = linearCongruentialGenerator(gn.getSeed, gn.a, gn.c, gn.m, picknum)
results = []
for rn in lcg :
    results.append(rn)
    
print(results)
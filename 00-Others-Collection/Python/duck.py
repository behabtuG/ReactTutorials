# How to sort a Python dict by value
# (== get a representation sorted by value)

xs = {'a': 4, 'b': 3, 'c': 2, 'd': 1}

# Using a lambda function
sorted_items = sorted(xs.items(), key=lambda x: x[1])
print(sorted_items)
# Output: [('d', 1), ('c', 2), ('b', 3), ('a', 4)]

# Using operator.itemgetter
import operator
sorted_items_operator = sorted(xs.items(), key=operator.itemgetter(1))
print(sorted_items_operator)
# Output: [('d', 1), ('c', 2), ('b', 3), ('a', 4)]

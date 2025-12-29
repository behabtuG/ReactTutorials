# Why Python is Great: Namedtuples

# Importing the namedtuple class from the collections module
from collections import namedtuple

# Defining a namedtuple called 'Car' with fields 'color' and 'mileage'
Car = namedtuple('Car', 'color mileage')

# Creating an instance of the Car namedtuple
my_car = Car('red', 3812.4)

# Accessing fields using dot notation
print(my_car.color)  # Output: 'red'
print(my_car.mileage)  # Output: 3812.4

# Namedtuple provides a nice string representation by default
print(my_car)  # Output: Car(color='red', mileage=3812.4)

# Namedtuples are immutable, attempting to modify a field will raise an AttributeError
try:
    my_car.color = 'blue'  # This will raise an AttributeError
except AttributeError as e:
    print(e)  # Output: "can't set attribute"

# You can use helper methods like _asdict() to convert the namedtuple to a dictionary
car_dict = my_car._asdict()
print(car_dict)  # Output: {'color': 'red', 'mileage': 3812.4}

# You can create a new instance with updated values using _replace()
updated_car = my_car._replace(color='blue')
print(updated_car)  # Output: Car(color='blue', mileage=3812.4)

# Namedtuples are compatible with tuple-like operations
print(my_car[0])  # Access by index: Output: 'red'
print(my_car[1])  # Access by index: Output: 3812.4

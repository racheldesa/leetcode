"""
Solution for leetcode problem 705. Design HashSet
Author: @racheldesa
Date: 07 June 2024
"""

class MyHashSet(object):

    def __init__(self):
        self.buckets = [[] for _ in range(100)]

    def hash_function(self, value):
        return value % 100        

    # Inserts the value key into the HashSet
    def add(self, key):
        index = self.hash_function(key)
        bucket = self.buckets[index]
        if key not in bucket:
            bucket.append(key)
        
    # Removes the value key in the HashSet. If key does not 
    # exist in the HashSet, do nothing. 
    def remove(self, key):
        index = self.hash_function(key)
        bucket = self.buckets[index]
        if key in bucket:
            bucket.remove(key)
        
    # Returns whether the value key exists in the HashSet
    def contains(self, key):
        index = self.hash_function(key)
        bucket = self.buckets[index]
        return key in bucket
        

    
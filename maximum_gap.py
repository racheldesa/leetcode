class Solution(object):
  def radixSort(self, arr):
    """
    :type arr: List[int]
    :rtype: int
    """
    radixArr = [[] for i in range(10)]
    maxNum = max(arr)
    exp = 1
    while maxNum // exp > 0:
      for num in arr:
        radixArr[num // exp % 10].append(num)
      arr = []
      for i in range(10):
        arr += radixArr[i]
        radixArr[i] = []
    return arr

  def maximumGap(self, nums):
    """
    :type nums: List[int]
    :rtype: int
    """
    sortedArr = self.radixSort(nums)
    maxGap = 0
    for i in range(len(sortedArr)-1):
      gap = sortedArr[i+1] - sortedArr[i]
      maxGap = max(maxGap, gap)
    return maxGap

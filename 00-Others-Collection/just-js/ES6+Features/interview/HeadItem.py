def fun(arr: List[int]) -> List[int]:

    import heapq

    heapq.heapify(arr)

    res = []

    for i in range(3):

        res.append(heapq.heappop(arr))

    return res
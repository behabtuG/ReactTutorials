public static int[] fun(int[] arr) {

    int[] res = new int[3];

    PriorityQueue<Integer> heap = new PriorityQueue<>();

    for (int i = 0; i < arr.length; i++) {

        heap.add(arr[i]);

    }

    for (int i = 0; i < 3; i++) {

        res[i] = heap.poll();

    }

    return res;

}
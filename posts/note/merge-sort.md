---
title: "Merge Sort"
date: "2026-06-16"
description: "My explanation on the merge sort algorithm."
finished: true
tag: "Data Structures & Algorithms"
mins: "8"
last_updated_date: "2026-06-16"
filter: "Data Structures & Algorithms"
---

Recently I came across a problem on Leetcode [(912. Sort an Array)](https://leetcode.com/problems/sort-an-array/description/) that asks you to sort all the elements in an array in ascending order. My first thought was to reach for the [Bubble Sort](https://en.wikipedia.org/wiki/Bubble_sort#:~:text=Bubble%20sort%2C%20sometimes%20referred%20to,swapping%20their%20values%20if%20needed.) algorithm, but then I realized that in the worst case the time complexity would be `O(n^2)`, which would be way too slow for the larger test inputs.

I remember my professor covering the [Merge Sort](https://en.wikipedia.org/wiki/Merge_sort) algorithm, but I'd forgotten it, so I had to relearn the concept again. In this note I'm going to explain it to reinforce my own learning. I'm going to start doing this for any algorithm I pick up to really lock in my understanding. If you spot any mistakes in my explanation then please edit this document (scroll down and click the "Edit this page on GitHub" link).

### Divide and Conquer

I'm pretty sure you've heard of the [divide-and-conquer algorithm](https://en.wikipedia.org/wiki/Divide-and-conquer_algorithm). It's a problem solving approach that works in three steps: you **divide** a big problem into smaller subproblems, **conquer** each of those smaller problems (usually by solving them recursively), and then **combine** the results back together into the final answer.

Merge sort is literally just that. We take the unsorted array and keep splitting it in half until every piece is a single element. A single element is already sorted by definition, so that part is basically free. The clever bit is the combine step, where we merge those tiny sorted pieces back together two at a time, always keeping them in order, until we're left with one fully sorted array.

The reason this is so much faster than something like Bubble Sort comes down to the time complexity. Merge sort runs in `O(n log n)`, because splitting the array in half over and over gives us about `log n` levels, and merging everything back together at each level costs `O(n)`. Compare that to the `O(n^2)` of Bubble Sort and the difference really adds up once your inputs get large. Let me show you an example.

Let's say this is our array.

```py
array = [7, 6, 5, 4, 3, 2, 1]
```

We want to sort the elements in ascending order so they end up looking like this.

```py
array = [1, 2, 3, 4, 5, 6, 7]
```

The first thing we want to do is split the array down the middle into a left and right half, so let's do that.

```py
left = array[:n//2]  # [7, 6, 5]
right = array[n//2:] # [4, 3, 2, 1]
```

If you haven't seen this notation before, `array[:n//2]` grabs everything from the start of the array up to (but not including) the middle index, and `array[n//2:]` grabs everything from the middle index to the end. The `//` here is integer division, so it always rounds down to a whole number, which is exactly what we need since you can't have a fractional index.

You might be wondering what happens when the array has an odd number of elements, like our example which has 7. In that case `n//2` is `3` (because `7 / 2` is `3.5` and we round down), so the left half ends up with 3 elements and the right half gets the remaining 4. It doesn't split perfectly down the middle, but that's totally fine, merge sort doesn't care if one side has an extra element.

After that, we want to recursively call our merge sort function. Let me define the blueprint for the method.

```py
def merge_sort(array: List[int]):
    n = len(array)

    if n == 1:
        return array

    left = array[:n//2]
    right = array[n//2:]
```

Oh yeah, you might be wondering why we're checking if the length of the array is 1 and returning it. Well, if an array only has a single element then it's already sorted, so there's nothing for merge sort to do and we can just return it as is.

Alright nice, we've done that, now we want recursively repeat the process for both our left and right array.

```py
merge_sort(left)
merge_sort(right)
```

```py
def merge_sort(array: List[int]):
    n = len(array)

    if n == 1:
        return array

    left = array[:n//2]
    right = array[n//2:]

    merge_sort(left)
    merge_sort(right)
```

We keep doing that until the array has been split up into individual components.

```py
[7] [6] [5] [4] [3] [2] [1]
```

Here's a visual representation:

![](/post/merge-sort/merge_sort_divide_only.png)

Now onto the main part. The first thing we do is define 3 variables.

```py
i, j, k = 0, 0, 0
```

- `i` - Tracks the current element in the left array, starting from the leftmost one.
- `j` - Tracks the current element in the right array, starting from the leftmost one.
- `k` - Tracks the index of the merged array.

Now let's write the while loop that does the actual merging.

```py
while i < len(left) and j < len(right):
    pass
```

This while loop condition basically just makes sure the pointers for the left and right array don't go out of bounds. We keep looping as long as both `i` and `j` still have elements left to compare.

Now we compare the current element in the left array with the current element in the right array. If the left one is smaller, we drop it into the merged array and move the `i` pointer along, otherwise we do the same with the right element and move `j`. You always gotta remember to update the `k` pointer as well, no matter which element you ended up placing.

```py
if left[i] < right[j]:
    array[k] = left[i]
    i += 1
else:
    array[k] = right[j]
    j += 1
k += 1
```

```py
while i < len(left) and j < len(right):
    if left[i] < right[j]:
        array[k] = left[i]
        i += 1
    else:
        array[k] = right[j]
        j += 1
    k += 1
```

If you forget to update `k`, it just stays at `0` and every element you place keeps overwriting the same slot, so you'd end up losing everything except the last value you wrote.

Now that the main part is basically done, we have one more thing to handle. The main loop stops as soon as one of the arrays runs out, which means the other one might still have elements left over. We need to tack those remaining elements onto the end of the merged array.

First let's handle any leftover elements in the left array.

```py
while i < len(left):
    array[k] = left[i]
    i += 1
    k += 1
```

Then we do the exact same thing for the right array.

```py
while j < len(right):
    array[k] = right[j]
    j += 1
    k += 1
```

```py
while i < len(left) and j < len(right):
    if left[i] < right[j]:
        array[k] = left[i]
        i += 1
    else:
        array[k] = right[j]
        j += 1
    k += 1

while i < len(left):
    array[k] = left[i]
    i += 1
    k += 1

while j < len(right):
    array[k] = right[j]
    j += 1
    k += 1
```

And that's basically it! Here's the full code for you to run.

```py
from typing import List

def merge_sort(array: List[int]):
    n = len(array)

    if n == 1:
        return array

    left = array[:n//2]
    right = array[n//2:]

    merge_sort(left)
    merge_sort(right)

    i, j, k = 0, 0, 0

    while i < len(left) and j < len(right):
        if left[i] < right[j]:
            array[k] = left[i]
            i += 1
        else:
            array[k] = right[j]
            j += 1

        k += 1

    while i < len(left):
        array[k] = left[i]
        i += 1
        k += 1

    while j < len(right):
        array[k] = right[j]
        j += 1
        k += 1

array = [7, 6, 5, 4, 3, 2, 1]
merge_sort(array)
print(array)

```

You should get this as the output.

```
[1, 2, 3, 4, 5, 6, 7]
```

> **Note:** This sorts the array in-place, meaning it mutates the original `array` instead of returning a new one. I kept it simple for the example, but in real code mutating the caller's data is generally bad practice since it can cause surprising bugs. A cleaner approach is to build up and return a new sorted list instead.

Here's the full diagram illustrating the whole process:

![](/post/merge-sort/merge_sort_full_hourglass.png)

### Conclusion

I know this is a confusing topic, but I hope I was able to make it easier to understand. If you still don't get it, the best thing to do is watch some YouTube videos on Merge Sort, read this post again, and write out the code yourself. Do that a few times until it clicks. As usual, thank you for reading.

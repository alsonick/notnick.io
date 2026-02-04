---
title: "Ignore testing syntax highlighting"
date: "2026-02-04"
description: "You can ignore this note."
finished: true
tag: "Code"
mins: "1"
last_updated_date: "2026-02-04"
filter: "Code"
---

```ts
function twoSum(nums: number[], target: number): number[] {
  let output: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        output.push(i, j);
        break;
      }
    }
  }
  return output;
}
```

```ts
class MinStack {
  private stack: number[];
  private min: number[];

  constructor() {
    this.stack = [];
    this.min = [];
  }

  push(val: number): void {
    if (this.min.length === 0) {
      this.min.push(val);
    } else {
      if (val <= this.min[this.min.length - 1]) {
        this.min.push(val);
      }
    }
    this.stack.push(val);
  }

  pop(): void {
    if (this.top() === this.min[this.min.length - 1]) {
      this.min.pop();
    }
    this.stack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.min[this.min.length - 1];
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
```

```ts
function reverseList(head: ListNode | null): ListNode | null {
  let current = head;
  let prev = null;
  while (current !== null) {
    let temp = current.next;
    current.next = prev;
    prev = current;
    current = temp;
  }
  return prev;
}
```

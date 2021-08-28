// Feel free to add new properties and methods to the class.
class MinMaxStack {
	stack = [];
	pushEntry(value, min, max) {
		let entry = {
			value,
			min,
			max,
	};
		this.stack.push(entry);
		return entry;
	}
	
	popEntry() {
		return this.stack.pop();
	}

  peek() {
    // Write your code here.
		if (this.stack.length > 0) {
			return this.stack[this.stack.length-1].value;
		}
		else 
			return -1;
  }

  pop() {
    // Write your code here.
		if (this.stack.length > 0 ) {
			const poppedValue = this.popEntry().value;
			return poppedValue;
		}
  }

  push(number) {
    // Write your code here.
		let min;
		let max;
		
		// Set MinMax
		if (this.stack.length === 0) {
			min = number;
			max = number;
		}
		else {
			min = number >= this.stack[this.stack.length-1].min? this.stack[this.stack.length-1].min: number;
			max = number <= this.stack[this.stack.length-1].max? this.stack[this.stack.length-1].max: number;
		}
		
		 let newEntry = this.pushEntry(number, min, max);
		// console.log("Push:", JSON.stringify(newEntry));
        return newEntry;
  } //push

  getMin() {
    // Write your code here.
		if (this.stack.length > 0) {
			return this.stack[this.stack.length-1].min;
		} else {
		return -1;
		}
  } //getMin

  getMax() {
    // Write your code here.
		if (this.stack.length > 0) {
			return  this.stack[this.stack.length-1].max;
		}
		else {
		return -1;
		}
  } //getMax
	
} // MinMaxStack

// Do not edit the line below.
// exports.MinMaxStack = MinMaxStack;
let stack = new MinMaxStack();
console.log(stack.push(5));
console.log(stack.getMin());
console.log(stack.getMax());
console.log(stack.peek());
console.log(stack.push(7));
console.log(stack.getMin());
console.log(stack.getMax());
console.log(stack.peek());
console.log(stack.push(2));
console.log(stack.getMin());
console.log(stack.getMax());
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.getMin());
console.log(stack.getMax());
console.log(stack.peek());
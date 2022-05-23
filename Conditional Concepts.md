# Conditional Keywords (additional)

## Continue
Unlike the `break` statement, the `continue` statement breaks only one iteration in the loop, and continues with the next iteration.

Example: 
```
for(i = 0; i <= 10; i++) {
  if(i == 5) {
    continue;
  }
  document.write(i + "<br />");
```

## While Loop 
The `while` loop repeats through a block of code, but only as long as a specified condition is `true`.

Syntax: 
```
while(condition) {
  //code block
}
```

## Do...While Loop 
Do-while loop will execute the code block once, before checking if the condition is true, and then it will repeat the loop as long as the condition is ture.

Syntax:
```
do {
  //code block
} while)condition);
```

## Increment++
The increament operator increases the numeric value of its operand by 1. 
- When placed before the operand, it'll return the incremented value.
- When placed after it, it'll return the original value and then increment the operand.

## Decrement--
The decrement operator decreases the numeric value of its operand by 1.
- When placed before the operand, it'll return the decremented value.
- When placed after the operand, it'll return the original value and then decrements the operand.



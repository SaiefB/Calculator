# Calculator
Building a Calculator with HTML, CSS and JavaScript, following The Odin Project

You're definitely on the right track with your calculator app. Here’s a breakdown of the main steps and considerations to get your calculator fully functional:

### 1. **Handle Number Input**
   - **Appending Numbers**: You're already appending numbers to the screen, which is great. You'll need to ensure that numbers can be built up correctly (e.g., entering "123" should display as "123").
   - **Primary vs. Secondary Number**: Distinguish between the first number (before the operator is clicked) and the second number (after the operator is clicked).

### 2. **Handle Operators**
   - **Storing the Operator**: When an operator is clicked, store it and also save the current value on the screen as the `primaryNum`.
   - **Clear the Screen for the Second Number**: After an operator is clicked, clear the screen so the user can input the second number.

### 3. **Perform Calculation**
   - **Operate Function**: Use the `operate` function to perform calculations when the equals button is pressed. Pass in the operator, `primaryNum`, and `secondaryNum` to get the result.
   - **Display the Result**: Update the screen with the result after the calculation is done.

### 4. **Handle Edge Cases**
   - **Clearing the Calculator**: Make sure the clear button resets everything (screen, stored numbers, and operator).
   - **Decimals**: Handle decimal points to allow for floating-point numbers.
   - **Divide by Zero**: Implement logic to prevent division by zero, possibly showing an error message.

### 5. **Equal Button Logic**
   - **Triggering the Calculation**: When the equals button is pressed, trigger the `operate` function, display the result, and reset the operator.

### 6. **Chain Calculations (Optional Enhancement)**
   - Allow users to perform continuous calculations without needing to press the equals button after every operation.

### 7. **Update UI and Interactivity**
   - **Visual Feedback**: Provide visual feedback when buttons are clicked (e.g., changing button color briefly).
   - **Responsive Design**: Ensure the calculator works well across different screen sizes.

By focusing on these areas, you'll be able to create a fully functional and user-friendly calculator app. Keep refining your code, testing each piece as you go, and you'll get there!
# AI usage log

Using AI never costs marks; a vague or missing log does.
Add a new section every week, before you tag. Did not use AI? Write "None" under Tool(s).

## Week 1 & Week 2 (PART B)

- Tool(s): ChatGPT

- What I asked for:
  how to edit commit message.

- What I kept, changed or rejected, and why:
  Change the commit message as i mistakenly looked up at a wrong file with wrong comments. Instead of Week2, I accidnetally put Week 2 comment.
- One thing the AI got wrong and how I fixed it:

## Week 2

- Tool(s):ChatGPT

- What I asked for:

1. I asked ChatGPT to help me understand the instruction for changing MenuItemCard to receive an item as a prop instead of using a hard-coded item object.

2. I asked for helping fixing mistakes in my App.jsx, including the component name capitalization and the handleAddToCart function name.

3. I asked ChatGPT to check my Header.jsx to understand how the cart count was displayed.

4. I asked for troubleshooting the Add to Cart button becuase clicking it did not seem to do anything.

- What I kept, changed or rejected, and why:

1. I kept the existing JSX code and canged the function parameter to MenuItemCard({item}). I also removed the hard-coded item object because the component should receive the menu item details from another component.

2. I changed the Header and MenuList components to receive the necessary props for displaying the cart count and adding items.

3. I followed the troubleshooting steps to identify why the page was white and why the Add to Cart button was not working.

- One thing the AI got wrong and how I fixed it:
  The AI initially focused on displaying the cart count before confirming whether the Add to Cart button was actually working. I checked the code in App.jsx, MenuList.jsx, MenuItemCard.jsx, and Header.jsx to trace how the function and props were connected. I also followed the suggestion to use console.log() to check whether clicking the button called the function.

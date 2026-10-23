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

1. Tool(s):ChatGPT

2. What I asked for:

- I asked ChatGPT to help me understand the instruction for changing MenuItemCard to receive an item as a prop instead of using a hard-coded item object.

- I asked for helping fixing mistakes in my App.jsx, including the component name capitalization and the handleAddToCart function name.

- I asked ChatGPT to check my Header.jsx to understand how the cart count was displayed.

- I asked for troubleshooting the Add to Cart button becuase clicking it did not seem to do anything.

3. What I kept, changed or rejected, and why:

- I kept the existing JSX code and canged the function parameter to MenuItemCard({item}). I also removed the hard-coded item object because the component should receive the menu item details from another component.

- I changed the Header and MenuList components to receive the necessary props for displaying the cart count and adding items.

- I followed the troubleshooting steps to identify why the page was white and why the Add to Cart button was not working.

4. One thing the AI got wrong and how I fixed it:
   The AI initially focused on displaying the cart count before confirming whether the Add to Cart button was actually working. I checked the code in App.jsx, MenuList.jsx, MenuItemCard.jsx, and Header.jsx to trace how the function and props were connected. I also followed the suggestion to use console.log() to check whether clicking the button called the function.

# Lab 3

1. Tool(s): Claude

2. What I asked for:

- I ask Claude to help me complete the TODO parts in my CampusEats react project according to the lab worksheet, including fetching vendor data from a JSON file, managing the shopping cart, calculating the total price, and validating the checkout form.

- I also ask Claude to explain all the codes in details; how does it work, why it necessary.

3. What I kept, changed or rejected, and why:

- I kept the sugegsted code for fetching vendor data using useEffects
- add and removing cart items
- updating item quantities
- calculating the cart total using reduce()
- validating the checkout form.
- I kept these changes because they followed the worksheet requirements and helped me complete the missing patrts of my code.

4. One thing the AI got wrong and how I fixed it:

- The AI initially suggested code that accessed selectedVendor.name without checking whether the page loaded.
- I fixed it by adding a condition to display the menu only when selectedVendor exists.

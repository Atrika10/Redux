# What is Redux ?
Redux is another JS library & it is completely different from react, both are seperate. 

we ofently use Redux with react. redux can also be use in other libraries & framework.

# Why should we use Redux in our app ?
 you don't need to use redux in your every app, it's not neccesary.

 But when your application become big & you have to `handle a lot data, manage different state` then redux will be your great choice.
 #### Advantage : 
 it actually helps you keep your `app organized, predictable, and easier to fix` when things go wrong.


 ## Now Let's talk about how Redux works using diagram.

![alt text](./Media/image.png)

* Basically Redux is a big JS object kept is single central place.
* Any component can access inside our application.
* It can write data, write data from object
* Major data kept here so that components can access.

To keep it from getting big or clumsy, we've `Slicing` in our redux store.

`slice is a small portion of redux store.We create multiple slices inside our redux store.`

`Slice is respnsible for tracking initial state of the store as well as all of our reducers are collected here`

#### Why do we need `Slice` ?

- to keep data seperate, make a logical partitions.
- Example : 
    - If we want to add cart data into our redux store we'll create a seperate slice for cart data.
    - Suppose we want to store logged in user information in our redux store, we'll create a user slice kind of things.

## How Does the data go from react component to a slice inside redux object / How to write data inside a slice 📝?

You can't directly modify our slice, we've to go through a 2 step process.

- Dispatch an action
    - action will call a function

![alt text](./Media/WriteData.png)

* EXAMPLE :
you want to add item which should show the cart box.

`BEHIND THE SCENES it works like this (shown above diagram) in redux`

* when you click add button to add that item on your cart ->
    * first,it'll dispatch an action
    * and then it'll call a function which is known as `reducer` in redux.
    * and finally this reducer function will modify the slice.

This is how the write operation performs in redux.

#



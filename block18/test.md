# Unit Test 1
A function called "multiplication" that returns the product of the two input numbers.

## Expectations
* we should pass two numbers as input, it will return the product of the two input numbers
* product should be integer



## Test Specs
* Expect `multiplcation(1,2)` to be `2`
* Expect `multiplcation(1,-2)` to be `-2`
* Expect `multiplcation(1)` to be `undefined`
* Expect `multiplcation()` to be `undefined`


# Unit Test 2
A function called "concatOdds" takes two arrays of integers as arguments. It should return a single array that only contains the odd numbers, in ascending order, from both of the arrays.

## Expectations
* We should pass two arrays of integers, and it will return a single array that only contains the odd numbers in ascending order

## Test Specs
* Expect `concatOdds([1,2,3],[8,7,11])` to be `[1,3,7,11]`
* Expect `concatOdds([15,2,3],[813,7,11])` to be `[3,7,11,15,813]`
* Expect `concatOdds([],[813,7,11])` to be `[7,11,813]`
* Expect `concatOdds([],[])` to be `undefined`
* Expect `concatOdds()` to be `undefined`


# Functional Test
A shopping cart checkout feature that allows a user to check out as a guest (without an account), or as a logged-in user. They should be allowed to do either, but should be asked if they want to create an account or log in if they check out as a guest.

## Expectations
* the user sees a prompt when in the page of shopping car checkout
* the prompt asks user whether they want to create an account or log in if they check out as a guest
* there are three checkout options buttons: one is to check out as a guest; the other is as a logged-in user; the last is create a new account

## Test Specs
Given I am a user checking out my cart

When I am going to check out my cart

Then I see a prompt asks me whether I want to create an account or login or check out as a guest

When I close the prompt I see two option button

Then I choose to click one of the option button to checkout

When I click button of check out as a guest

Then I check out without creating an account

When I click button of creating an account

Then I create an account before checking out my cart

When I click button of logging in

Then I type in my account username and password
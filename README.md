React App -  Non-repeating random number
===============================

Assumptions:
* Generate Non-repeating random number within 1 (inclusive) to 5000 (inclusive)

Design
---
It is divided into 4 parts.

* Components : Contains modular react components. (RandomNumber)
               RandomNumber uses RandomNumberGenerator util to generate random number at a regular
               interval for a given period and showcase using NumberView reusable component.
                        
* Containers : Contains Page level react components which holds different components at a page level. (HomeScreen)
               HomeScreen holds RandomNumber as a child component.
               
* Reusable   : Reusable react components (NumberView). 
               NumberView just renders the given number as a props with some optional animation.

* utils      : Utility classes like RandomNumberGenerator which generates non repeating random numbers within given range
               inclusive of both bound limit. 
               

Usage
-----

### Static Type Checker Dependency (node modules) ###
* flow

### Build/Compile Dependency ###
* react-scripts
* yarn

### Test Dependency (node modules) ###
* jest

In order to use this program, you need to add jest for testing purpose.

### How to run? ###
```
Steps:
* cd to the directory (contains package.json)
* execute yarn install (if not done)
* execute yarn build
* execute yarn start
```

This will start a development server (using webpack).

Once you've started the development server, navigate to http://localhost:3000/
to get started and view number appears in non-repeating random order.

### How to run test suit? ###
```
Steps:
* cd to the directory (contains package.json)
* execute yarn install (if not done)
* execute yarn build (if not done)
* execute yarn test
* 
```

Test Suite contains 4 different test cases.

It should print :-
 
 ```
Test Suites: 3 passed, 3 total 
Tests:       4 passed, 4 total 
Snapshots:   0 total
Time:        1.783s
Ran all test suites.
```

Contact details
---
if you have trouble running it you can get in touch with me on my email id.

email id: abhishek1.dhn@gmail.com

Name: Abhishek Kumar

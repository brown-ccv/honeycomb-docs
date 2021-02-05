---
id: best_practices
title: Best Practices
---


### Write good commit messages

[Commitizen](https://pypi.org/project/commitizen/) is a great tool for writing angular commits - this will create a standardized commit format which makes for easier change logging and more sane messages.

### Use git flow (ish)

Your `main` branch should be where official releases are made (whenever code is used in real life tasks). Use branches for any new features or fixes and then use pull requests to merge those into `main`. After merging into `main` you can tag a release. This will ensure you can always go back to exactly the code that was working with a specific subject/session.

### Keep your code style consistent

* `let` instead of `var`
* fat arrow functions (`const myFunc = (var) => doSomething(var)`) instead of es5/6 functions (`function myFunc(var) { doSomething(var) }`)
* camel case for variable, and function names (`doSomething`) instead of snake case (`do_something`)
* but snake case inside json is fine
* a `tab` === two spaces
* file exports at the bottom of the file in one chunk instead of exporting the function declaration
* when in doubt, leave future you a comment (you'll never regret it)

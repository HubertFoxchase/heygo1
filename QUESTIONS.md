# Questions

Q1: Explain the output of the following code and why

```js
    setTimeout(function() {
      console.log("1");
    }, 100);
    console.log("2");
```

*The code will print "2" then in 100ms it will print "1".*

Q2: Explain the output of the following code and why

```js
    function foo(d) {
      if(d < 10) {
        foo(d+1);
      }
      console.log(d);
    }
    foo(0);
```

*This code uses recoursion to print numbers from 10 to d. If d is greater than 10, the code will simply print the input number*

Q3: If nothing is provided to `foo` we want the default response to be `5`. Explain the potential issue with the following code:

```js
    function foo(d) {
      d = d || 5;
      console.log(d);
    }
```
*If d is falsy (which will be the case of d=0 or d=""), then the function will return 5. The proper solution is to check d against undefined*


Q4: Explain the output of the following code and why

```js
    function foo(a) {
      return function(b) {
        return a + b;
      }
    }
    var bar = foo(1);
    console.log(bar(2))
```

*Calling foo(1) returns a reference to a function (held in bar variable) which can be in turn called with another parameter (2). The output in this case is 3*

Q5: Explain how the following function would be used

```js
    function double(a, done) {
      setTimeout(function() {
        done(a * 2);
      }, 100);
    }
```

*This function will call done with a*2 argument in 100ms*

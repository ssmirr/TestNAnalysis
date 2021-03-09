# Test and Analysis

### Before you get started

1. Import this as a notebook or clone this repo locally. Also, ensure you [install latest version of docable](https://github.com/ottomatica/docable-notebooks/blob/master/docs/install.md)!

```bash
docable-server import https://github.com/CSC-DevOps/TestNAnalysis
```

2. Install the necessary packages...

```bash | {type: 'command'}
npm install
```

## Code Coverage

``` | {type:'slides'}
https://docs.google.com/presentation/d/e/2PACX-1vRKjbwjlpceTDajOsA7Wey1EUBLu6RK2vQMv4T9lc9PFnEwqGkOdfyeA_bcV0Qtz_NmVOg_vBF__tSr/embed?start=false&loop=false&delayms=3000
```

### Quiz ❓

Based on the slides you just reviewed... Does *condition coverage* imply *branch coverage*?

```js|{type:'quiz', quiz_type:'singlechoice', quiz_answers:'1'}
- [ ] YES
- [ ] NO
```

We'll describe why (or why not) in next set of slides ⏭️.

But before doing that, we're going to get hands-on practice with measuring statement and branch coverage.

### Practice: Statement and Branch Coverage

Given the follow code, will we provide test inputs for achieving 100% statement and branch coverage...

```js
function inc(p, q) {
    if(q == undefined) q=1;
    if( p < 0 )
    {
        p = -p;
    }
    return p + q/q;
}
```

Use the following for providing test inputs.

```js | {type: 'file', path: 'test/test.js'}
var main = require("../index.js");

describe("unit tests for index.js", function() {

    it("testing inputs for inc()", function() {
       main.inc(1,1);
       // Add more test inputs...
       
    });

});
```

Calculate the current code coverage. Use the coverage report below to see what has not been covered. Try extending the tests to covere more branches and statements.

```bash | {type: 'command'}
npm run coverage
```



##### Coverage report

You can also view the coverage report by clicking the <kbd>Reload</kbd> button, or in a new tab or window, open the [coverage report](coverage/lcov-report/index.html):

<button onclick="window.frames['serviceFrameSend'].src+='';">Reload</button>
<iframe id="serviceFrameSend" src="./coverage/lcov-report/index.html" width="800" height="600"  frameborder="1"></iframe>

## Advanced Code Coverage

What about other forms of test coverage? Just how far does this rabbit hole go?

``` | {type:'slides'}
https://docs.google.com/presentation/d/e/2PACX-1vQMoeBFeBRhhOP_LT8mT-kmf4HUFO4pSFIp2B2pnIb1c_16f23TdFB_2eIVuroroCQ5AhWD4AWEoNo3/embed?start=false&loop=false&delayms=3000
```
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
https://docs.google.com/presentation/d/e/2PACX-1vRKjbwjlpceTDajOsA7Wey1EUBLu6RK2vQMv4T9lc9PFnEwqGkOdfyeA_bcV0Qtz_NmVOg_vBF__tSr/embed?start=false&loop=false&delayms=3000" 
```


### Coverage Concepts

A *description* for question here.
_select Choice B and C for correct answer below:_

```js|{type:'quiz', quiz_type:'singlechoice', quiz_answers:'1'}
- [ ] Choice D
- [ ] Choice E
- [ ] Choice G
```

We will run code coverage.

```bash | {type: 'command'}
npm run coverage
```

### Coverage report

You can also view the coverage report by clicking the <kbd>Reload</kbd> button, or in a new tab or window, open the [coverage report](coverage/lcov-report/index.html):

<button onclick="window.frames['serviceFrameSend'].src+='';">Reload</button>
<iframe id="serviceFrameSend" src="./coverage/lcov-report/index.html" width="800" height="600"  frameborder="1">


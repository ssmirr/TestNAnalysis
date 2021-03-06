# TestNAnalysis

### Before you get started

1. Import this as a notebook or clone this repo locally.  

Also, ensure you [install latest version of docable](https://github.com/ottomatica/docable-notebooks/blob/master/docs/install.md)!

```bash
docable-server import https://github.com/CSC-DevOps/TestNAnalysis
```

## Testing

```bash | {type: 'command'}
npm run coverage
```

In a new tab, or window open the [coverage report](coverage/lcov-report/index.html).

<a href="coverage/lcov-report/index.html/" onmouseover="javascript:event.target.port=80">Look at another port</a>

<iframe id="serviceFrameSend" src="./coverage/lcov-report/index.html" width="800" height="600"  frameborder="0">
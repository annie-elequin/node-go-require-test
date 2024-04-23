### This repo is for demonstration purposes and currently has an error. 

Just run `node index.js` to see this error: 

```
/Users/aelequin/coding/code-dump/node-go-require-test/node_modules/node-go-require/lib/go-loader.js:119
        throw new Error('Failed to convert Go file to JS\n' + output.stdout + '\n' + output.stderr);
        ^

Error: Failed to convert Go file to JS
null
null
    at GoLoader.runGoScript2JS (/Users/aelequin/coding/code-dump/node-go-require-test/node_modules/node-go-require/lib/go-loader.js:119:15)
    at GoLoader.loadGoScript (/Users/aelequin/coding/code-dump/node-go-require-test/node_modules/node-go-require/lib/go-loader.js:144:27)
    at Object.requireGo [as .go] (/Users/aelequin/coding/code-dump/node-go-require-test/node_modules/node-go-require/lib/node-go-require.js:66:14)
    at Module.load (node:internal/modules/cjs/loader:1205:32)
    at Module._load (node:internal/modules/cjs/loader:1021:12)
    at Module.require (node:internal/modules/cjs/loader:1230:19)
    at require (node:internal/modules/helpers:179:18)
    at Object.<anonymous> (/Users/aelequin/coding/code-dump/node-go-require-test/index.js:3:13)
    at Module._compile (node:internal/modules/cjs/loader:1368:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1426:10)

Node.js v21.7.3
```
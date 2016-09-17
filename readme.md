# scapegoat

[![Build Status](https://travis-ci.org/hyp1/scapegoat.png?branch=master)](https://travis-ci.org/hyp1/scapegoat)

test

## Usage

### ES6 use

With StealJS, you can import this module directly in a template that is autorendered:

```js
import plugin from 'scapegoat';
```

### CommonJS use

Use `require` to load `scapegoat` and everything else
needed to create a template that uses `scapegoat`:

```js
var plugin = require("scapegoat");
```

## AMD use

Configure the `can` and `jquery` paths and the `scapegoat` package:

```html
<script src="require.js"></script>
<script>
	require.config({
	    paths: {
	        "jquery": "node_modules/jquery/dist/jquery",
	        "can": "node_modules/canjs/dist/amd/can"
	    },
	    packages: [{
		    	name: 'scapegoat',
		    	location: 'node_modules/scapegoat/dist/amd',
		    	main: 'lib/scapegoat'
	    }]
	});
	require(["main-amd"], function(){});
</script>
```

### Standalone use

Load the `global` version of the plugin:

```html
<script src='./node_modules/scapegoat/dist/global/scapegoat.js'></script>
```

## Contributing

### Making a Build

To make a build of the distributables into `dist/` in the cloned repository run

```
npm install
node build
```

### Running the tests

Tests can run in the browser by opening a webserver and visiting the `test.html` page.
Automated tests that run the tests from the command line in Firefox can be run with

```
npm test
```

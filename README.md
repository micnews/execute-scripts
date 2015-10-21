## execute-scripts
Executes script elements in a chunk of html by appending them to the head of the document in the order they appear in the html. For script elements with a src attribute it waits for the load event before loading the next one.

### Install

```shell
npm install execute-scripts
```

### Usage
```js
var executeScripts = require('execute-scripts');
var container = document.createElement('div');
container.innerHTML = [
  '<script src="http://test.com"></script>',
  '<script type="text/javascript">console.log("test");</script>',
  '<script src="http://anothertest.com"></script>'
].join('');

executeScripts(container);
```

## Licence

Copyright (c) 2015 Mic Network, Inc

This software is released under the MIT license:

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

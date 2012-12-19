#inerface-name

> Returns the interface name for an IP address

## Installation

```sheel
npm install interface-name
```

## Example

```JavaScript
  var interfaceName = require('interface-name');
  var assert = require('assert');

  // loopback adresses belongs to the same interface
  assert.equal(interfaceName('127.0.0.1'), 'lo0');
  assert.equal(interfaceName('::1'), 'lo0');

  // all owned adresses returns a name
  assert.equal(interfaceName('192.168.0.198'), 'en0');

  // valid IP adresses there don't belong to a network interface returns null
  assert.equal(interfaceName('0.0.0.0'), null);
```

##License

**The software is license under "MIT"**

> Copyright (c) 2012 Andreas Madsen
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.

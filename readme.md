### Bootstrap Components
[![Build Status](https://travis-ci.org/atmajs/mask-bootstrap-ui.png?branch=master)](https://travis-ci.org/atmajs/mask-bootstrap-ui)
[![Bower version](https://badge.fury.io/bo/mask-bootstrap-ui.svg)](http://badge.fury.io/bo/mask-bootstrap-ui)


Components incapsulate the bootstraps markup to single reusable elements.  

Raw bootstrap
```html
<div class="dropdown">
  <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
    Dropdown Example
    <span class="caret"></span>
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
    <li><a href="#">Action</a></li>
    <li><a href="#">Another action</a></li>
    <li><a href="#">Something else here</a></li>
  </ul>
</div>
```

`Dropdown` element
```mask
Dropdown {
	@button > 'Dropdown Example'
	@items  {
		Item > 'Action'
		Item > 'Another action'
		Item > 'Something else here'
	}
}
```

### Examples

- [/examples](/examples)

```bash
# install atma toolkit
npm install atma
# run server
atma server

# navigate `http://localhost:5777/examples/simple.html`
```

### Test
```bash
npm test
```

:copyright: MIT - Atma.js Project
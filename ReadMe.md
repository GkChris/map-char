# mapChar

## Map through string's characters. Works in the same that map works on arrays

### Install 

```Javascript
npm i map-char
```

### Import

```Javascript
require('map-char');
```

### Usage 

```Javascript
const str = 'test'

str.mapChar((char, i) => {
    console.log(char, i);
})
```
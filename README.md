# consolestdiorc  

simple stdio helper

## install 

```bash
npm i consolestdiorc

```


## init

```javascript

const stdio = new (require('consolestdiorc')).base()

```


## clear

```javascript
stdio.clear();

```


## print
```javascript
stdio.print( text );

```


## printLn

```javascript
stdio.printLn( text );

```


## printTo
```javascript
stdio.printLn(
    text,
    x,
    y
);

```


## cursorTo

```javascript
stdio.cursorTo( 
    x,
    y
);

```

## cursorHide

```javascript
stdio.cursorHide();

```

## cursorShow

```javascript
stdio.cursorShow();

```

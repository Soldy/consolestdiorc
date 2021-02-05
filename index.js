/*
 *  @Soldy\consolestdiorc\2021.02.05\GPL3
 */
'use strict';

/*
 * @prototype
 */
const stdiorcBase=function(){
    this.cursorTo = function(x,y){
        return cursorTo(x,y);
    }
    this.clear = function(){
        return clear();
    }
    this.print = function(text){
        return print(text);
    }
    this.printTo = function(text, x , y){
        return printTo(text, x , y);
    }
    this.printLn = function(text){
        return printLn(text);
    }
    const stdout = process.stdout;
    const stderr = process.stderr;
    const cursorTo = function(x, y){
        if(typeof x === 'undefined')
            x = stdout.colums;
        if(typeof y === 'undefined')
            y = stdout.rows;
        if(
            (0>x)||
            (0>y)||
            (x>stdout.columns)||
            (y>stdout.rows)
        )
            return false;
        stdout.cursorTo(x,y);
        return true;
    }
    const clear = function(){
        stdout.write('\u001b[2J\u001b[0;0f');
    }
    const printTo = function(text, x, y){
        if(cursorTo(x,y) === false)
            return false;
        return print(text);
 
    }
    const printLn = function(text){
        stdout.cursorTo(0);
        return print(
            text.toString() + '\n'
        );
    }
    const print = function(text){
        stdout.write(
            text.toString()
        );
        return true;
    }
}

exports.base = stdiorcBase;



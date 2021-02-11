/*
 *  @Soldy\consolestdiorc\2021.02.05\GPL3
 */
'use strict';

/*
 * @prototype
 */
const stdiorcBase=function(){
    /*
     * @param {integer} line 
     * @public
     */
    this.cursorUp = function (line) {
        cursorUp(line);
    }
    /*
     * @param {integer} line 
     * @public
     */
    this.cursorDown = function (line) {
        cursorDown(line);
    }
    /*
     * @param {integer} left 
     * @public
     */
    this.cursorLeft = function (left) {
        cursorLeft(left);
    }
    /*
     * @param {integer} right 
     * @public
     */
    this.cursorRight = function (right) {
        cursorRight(right);
    }
    /*
     * @public
     */
    this.cursorHide = function(){
        cursorHide();
    }
    /*
     * @public
     */
    this.cursorShow = function(){
        cursorShow();
    }
    /*
     * @param {integer} x
     * @param {integer} y
     * @public
     * @return {boolean}
     */
    this.cursorTo = function(x,y){
        return cursorTo(x,y);
    }
    /*
     * @public
     */
    this.clear = function(){
        clear();
    }
    /*
     * @param {string} text
     * @param {integer} x
     * @param {integer} y
     * @public
     * @return {boolean}
     */
    this.printTo = function(text, x , y){
        return printTo(text, x , y);
    }
    /*
     * @param {string} text
     * @public
     */
    this.print = function(text){
        print(text);
    }
    /*
     * @param {string} text
     * @public
     */
    this.printLn = function(text){
        printLn(text);
    }
    /*
     * @param {string} text
     * @public
     */
    this.println = function(text){
        printLn(text);
    }
    const stdout = process.stdout;
    const stderr = process.stderr;
    /*
     * @param {integer} x
     * @param {integer} y
     * @private
     * @return {boolean}
     */
    const cursorTo = function(x, y){
        if(typeof x === 'undefined')
            x = 0;
        if(typeof y === 'undefined')
            y = 0;
        if(
            (0>x)||
            (0>y)||
            (x>stdout.columns)||
            (y>stdout.rows)
        )
            return false;
        if(typeof stdout.cursorTo === 'undefined'){
            stdout.write('\u001b['+x.toString()+'F');
            stdout.write('\u001b['+y.toString()+'G');
        }else{
            stdout.cursorTo(x,y);
        }
        return true;
    }
    /*
     * @private
     */
    const clear = function(){
        stdout.write('\u001b[2J\u001b[0;0f');
    }
    /*
     * @param {string} text
     * @param {integer} x
     * @param {integer} y
     * @private
     * @return {boolean}
     */
    const printTo = function(text, x, y){
        if(cursorTo(x,y) === false)
            return false;
        stdout.write(
            text.toString()
        );
        return true;
 
    }
    /*
     * @param {string} text
     * @private
     */
    const printLn = function(text){
        process.stdout.write('\u001b[0G');
        stdout.write(
            text.toString() + '\n'
        );
    }
    /*
     * @param {string} text
     * @private
     */
    const print = function(text){
        stdout.write(
            text.toString()
        );
    }
    /*
     * @param {integer} line 
     * @private
     */
    const cursorUp = function (line) {
        if(typeof line === 'undefined')
            line = '1';
        stdout.write('\u001b[' + line + 'A');
    }
    /*
     * @param {integer} line 
     * @private
     */
    const cursorDown = function (line) {
        if(typeof line === 'undefined')
            line = '1';
        stdout.write('\u001b[' + line + 'B');
    }
    /*
     * @param {integer} left 
     * @private
     */
    const cursorLeft = function (left) {
        if(typeof left === 'undefined')
            left = '1';
        stdout.write('\u001b[' + left + 'D');
    }
    /*
     * @param {integer} right 
     * @private
     */
    const cursorRight = function (right) {
        if(typeof right === 'undefined')
            right = '1';
        stdout.write('\u001b[' + right + 'C');
    }
    /*
     * @private
     */
    const cursorHide = function(){
        stdout.write('\x1B[?25l');
    }
    /*
     * @private
     */
    const cursorShow = function(){
        stdout.write('\x1B[?25h');
    }
}

exports.base = stdiorcBase;



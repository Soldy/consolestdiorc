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
        return _cursorUp(line);
    }
    /*
     * @param {integer} line 
     * @public
     */
    this.cursorDown = function (line) {
        return _cursorDown(line);
    }
    /*
     * @param {integer} left 
     * @public
     */
    this.cursorLeft = function (left) {
        return _cursorLeft(left);
    }
    /*
     * @param {integer} right 
     * @public
     */
    this.cursorRight = function (right) {
        return _cursorRight(right);
    }
    /*
     * @public
     */
    this.cursorHide = function(){
        return _cursorHide();
    }
    /*
     * @public
     */
    this.cursorShow = function(){
        return _cursorShow();
    }
    /*
     * @param {integer} x
     * @param {integer} y
     * @public
     * @return {boolean}
     */
    this.cursorTo = function(x,y){
        return _cursorTo(x,y);
    }
    /*
     * @public
     */
    this.clear = function(){
        return _clear();
    }
    /*
     * @param {string} text
     * @param {integer} x
     * @param {integer} y
     * @public
     * @return {boolean}
     */
    this.printTo = function(text, x , y){
        return _printTo(text, x , y);
    }
    /*
     * @param {string} text
     * @public
     */
    this.print = function(text){
        return _print(text);
    }
    /*
     * @param {string} text
     * @public
     */
    this.printLn = function(text){
        return _printLn(text);
    }
    /*
     * @param {string} text
     * @public
     */
    this.println = function(text){
        return _printLn(text);
    }
    /*
     * @private
     * @var {stdout}
     */
    const _stdout = process.stdout;
    /*
     * @private
     * @var {stderr}
     */
    const _stderr = process.stderr;
    /*
     * @param {integer} x
     * @param {integer} y
     * @private
     * @return {boolean}
     */
    const _cursorTo = function(x, y){
        if(typeof x === 'undefined')
            x = 0;
        if(typeof y === 'undefined')
            y = 0;
        if(
            (0>x)||
            (0>y)||
            (x>_stdout.columns)||
            (y>_stdout.rows)
        )
            return false;
        if(typeof _stdout.cursorTo !== 'function'){
             _stdout.write('\u001b['+x.toString()+'F');
             _stdout.write('\u001b['+y.toString()+'G');
        }else{
            _stdout.cursorTo(x,y);
        }
        return true;
    }
    /*
     * @private
     */
    const _clear = function(){
        _stdout.write('\u001b[2J\u001b[0;0f');
    }
    /*
     * @param {string} text
     * @param {integer} x
     * @param {integer} y
     * @private
     * @return {boolean}
     */
    const _printTo = function(text, x, y){
        if(_cursorTo(x,y) === false)
            return false;
        _stdout.write(
            text.toString()
        );
        return true;
 
    }
    /*
     * @param {string} text
     * @private
     */
    const _printLn = function(text){
        _stdout.write('\u001b[0G');
        _stdout.write(
            text.toString() + '\n'
        );
    }
    /*
     * @param {string} text
     * @private
     */
    const _print = function(text){
        _stdout.write(
            text.toString()
        );
    }
    /*
     * @param {integer} line 
     * @private
     */
    const _cursorUp = function (line) {
        if(typeof line === 'undefined')
            line = '1';
        _stdout.write('\u001b[' + line + 'A');
    }
    /*
     * @param {integer} line 
     * @private
     */
    const _cursorDown = function (line) {
        if(typeof line === 'undefined')
            line = '1';
        _stdout.write('\u001b[' + line + 'B');
    }
    /*
     * @param {integer} left 
     * @private
     */
    const _cursorLeft = function (left) {
        if(typeof left === 'undefined')
            left = '1';
        _stdout.write('\u001b[' + left + 'D');
    }
    /*
     * @param {integer} right 
     * @private
     */
    const _cursorRight = function (right) {
        if(typeof right === 'undefined')
            right = '1';
        _stdout.write('\u001b[' + right + 'C');
    }
    /*
     * @private
     */
    const _cursorHide = function(){
        _stdout.write('\x1B[?25l');
    }
    /*
     * @private
     */
    const _cursorShow = function(){
        _stdout.write('\x1B[?25h');
    }
}

exports.base = stdiorcBase;



(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var Bob = /** @class */ (function () {
    function Bob() {
    }
    /**
     * Processes the start of a conversation, and issues a response
     * @param sentence A string representation of the conversation start
     * @return A string, Bob's response to the initial sentence
     */
    Bob.prototype.hey = function (sentence) {
        if (sentence.trim().length == 0) { // Empty sentence
            return "Fine. Be that way!";
        }
        else if (sentence === sentence.toUpperCase()) { // All Caps
            return "Whoa, chill out!";
        }
        else if (sentence.charAt(sentence.length - 1) == '?') { // Ask a question
            return "Sure.";
        }
        else { // Everything else
            return "Whatever.";
        }
    };
    return Bob;
}());
exports.Bob = Bob;

},{}],2:[function(require,module,exports){
"use strict";
/**
 * @file problem2.ts
 * @author Samantha L. Misurda
 * @desc A driver file for the Problem 2 module
 */
exports.__esModule = true;
var bob = require("./Bob");
function conversation(talkToBob, testSentence) {
    var result = talkToBob.hey(testSentence);
    document.body.innerHTML += "Person 1: " + testSentence + "<br>";
    document.body.innerHTML += "Bob: " + result + "<br><br>";
}
/**
 * Test cases
 */
// Empty conversation
conversation(new bob.Bob(), "");
// Normal question
conversation(new bob.Bob(), "How are you?");
// Yelling at Bob
conversation(new bob.Bob(), "ARGHHHHH");
// Invalid or other conversation starter
conversation(new bob.Bob(), "Just Bob being Bob.");

},{"./Bob":1}]},{},[2]);

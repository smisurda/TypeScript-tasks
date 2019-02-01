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

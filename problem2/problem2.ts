/**
 * @file problem2.ts
 * @author Samantha L. Misurda
 * @desc A driver file for the Problem 2 module
 */

import person = require("./Teenager"); 
import bob = require("./Bob"); 


function conversation(talkToBob: person.Teenager, testSentence : string) {
   let result = talkToBob.hey(testSentence); 
   document.body.innerHTML += "Person 1: "+testSentence+ "<br />";
   document.body.innerHTML += "Bob: "+result+ "<br /><br />";
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

/**
 * @file Bob.ts
 * @author Samantha L. Misurda
 * @desc A class to represent Bob, a teenager with a set of canned responses
 */
import youngster = require("./Teenager"); 

export class Bob implements youngster.Teenager 
{ 
   
	/**
	 * Processes the start of a conversation, and issues a response
	 * @param sentence A string representation of the conversation start
	 * @return A string, Bob's response to the initial sentence
	 */
	public hey(sentence : string) : string { 
		if(sentence.trim().length == 0){ // Empty sentence
			return "Fine. Be that way!";
		} 
		else if(sentence === sentence.toUpperCase()){ // All Caps
			return "Whoa, chill out!"
		}
		else if(sentence.charAt(sentence.length-1) =='?'){ // Ask a question
			return "Sure.";
		}
		else{ // Everything else
			return "Whatever.";
		}
	} 
}
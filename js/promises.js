"use strict";

// TODO: NOTES
//Create a function that accepts a GitHub username, and returns a promise that resolves returning just the date of the last commit that user made.

// TODO: GLOBAL VARIABLES
getGithub()

// TODO: FUNCTION DECLARATION
async function getGithub(owner, repo){
   await fetch(`https://api.github.com/repos/${owner}/${repo}/commits`; {headers: {'Authorization': `${GITHUB_PROMISES_KEY}`}})
}
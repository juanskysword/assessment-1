/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

var gitDefinition = "open source distributed version control system designed to handle everyting from small to very large projects with speed and efficiency"
    console.log('git :', gitDefinition)

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

var gitHubDefinition = "is a web-based interface that uses Git, the open source version control software that lets multiple people make separate changes to web pages at the same time"
    console.log('gitHub :', gitHubDefinition)
//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

var gitInitDefinition = "initialize a local repository right here in this folder"
    console.log('Gitinit:', gitInitDefinition)

//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

var gitCloneDefinition ="used to target an existing repository and create a clone, or copy of the target repository"
    console.log('gitClone:',gitCloneDefinition)

//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

var gitStatusDefinition = "The git status command displays the state of the working directory and the staging area. shows which files are not eing tracked by git"
    console.log('gitStatus:', gitStatusDefinition)

//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/
var gitAddDefinition = "adds new or changed files in your working directory to the git staging area"
    console.log('gitAdd:', gitAddDefinition)

var gitAddCode =" git add ."
    console.log('Command:',gitAddCode)

    // Didnt know if u meant the command 
//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

var gitCommitDefinition ="create a snapshot of the files I’m tracking, where u can comment and be ready to push it to github"
    console.log('gitCommit:', gitCommitDefinition)
var gitCommitCode =" git commit -m"
    console.log('gitcommitCode:',gitCommitCode)
//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

var gitPushDefinition ="used to upload local repository content to a remote repository."
    console.log('gitPush:', gitPushDefinition)
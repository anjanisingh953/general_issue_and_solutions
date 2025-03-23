Que. How to enable console.log() method call automatically using clg
Ans:
step 1. Open VS Code.

step 2. Press Ctrl + Shift + P (or Cmd + Shift + P on Mac) to open the Command Palette.

step 3. Type "Configure User Snippets" and select it.

step 4. Choose "JavaScript (javascript.json)".

step 5. Add the following snippet inside the file:
    "log": {
        "prefix": "clg",
        "body": "console.log('$1:', $1);",
        "description": "Auto console.log()"
    }

// ===================================================================================
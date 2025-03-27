Que. MongoDB Digest Engineer
The max size of each document is 16mb

Difference between find() and findOne()
find () returns the cursor to iterate over the recieved array documents
findOne() returns the single document 

Element query operator 
1 $exits
2.$type

Evaluation query operator 
1. $expr
2. $jsonSchema
3. $mod
4. $regex
5. $text
6. $where

Advance update operator 
1. $inc
2. $min
3. $max
4. $mul
5. $rename
6. $unset
7. $upsert


// ==================================================
Que. How to Set the path for mongodb in the windows environment variable

Step1. Open Run (Win + R) → type sysdm.cpl → Enter.

Step2. Go to Advanced → Click Environment Variables.

Step3. Under System variables, find Path, select it, and click Edit.

Step4. Click New and add: C:\Program Files\MongoDB\Server\6.0\bin
(Replace 6.0 with your installed version.)

Step5. Click OK and restart your PC.

Now, try running: mongod --version (It's working now)
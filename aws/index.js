Que. How to install nodejs on EC2 server ?

Step1. SSH into the instance: ssh -i your-key.pem ubuntu@your-ec2-public-ip
Step2. sudo apt remove nodejs -y
Step3. sudo apt update && sudo apt upgrade -y
Step4. curl -fsSL https://deb.nodesource.com/setup_current.x | sudo -E bash -
step5. sudo apt install -y nodejs
Step6. node -v OR npm -v
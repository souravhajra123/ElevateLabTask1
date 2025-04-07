# 1. Launch an EC2 instance
![image alt](https://github.com/souravhajra123/ElevateLabTask1/blob/d75b0372adce714df3802ec707297be990bcdd50/images/1.JPG)

# 2. Connect to the instance

# 3. Update the machine
```bash
sudo apt-get update
```
![image alt](https://github.com/souravhajra123/ElevateLabTask1/blob/78b02af26f3f619c0e4483d1dfd6efadadc72db7/images/2.JPG)

# 4. Install Git and install docker using shell script
```bash
sudo apt-get install git
nano docker.sh
------------------------------
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin -y
sudo apt-get install docker-compose -y
sudo usermod -aG docker ubuntu
sudo chmod 777 /var/run/docker.sock
newgrp docker
sudo systemctl status docker
---------------------------------
bash docker.sh
```
![image alt](https://github.com/souravhajra123/ElevateLabTask1/blob/9df41f4683ef969b9e0e631c10854647cf4035da/images/3.JPG)

# My Node App

A basic Node.js application using Express.


## Run it

```bash
npm install
npm start




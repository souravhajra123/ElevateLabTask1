# This file will explain the Jenkins pipeline

# 1. Launch an EC2 Instance
![image alt](https://github.com/souravhajra123/ElevateLabTask1/blob/4069f2f7b345603fedbc8be692ee65c03cb1e923/Jenkins_images/1.JPG)
# 2. Connect to the EC2 Instance
# 3. Update the machine
```bash
sudo apt-get update
```
![image alt](https://github.com/souravhajra123/ElevateLabTask1/blob/4069f2f7b345603fedbc8be692ee65c03cb1e923/Jenkins_images/2.JPG)

# 4. Install Docker
```bash
nano docker.sh
--------------------
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
------------------------
bash docker.sh
docker --version
```
![image alt](https://github.com/souravhajra123/ElevateLabTask1/blob/4069f2f7b345603fedbc8be692ee65c03cb1e923/Jenkins_images/3.JPG)
![image alt](https://github.com/souravhajra123/ElevateLabTask1/blob/4069f2f7b345603fedbc8be692ee65c03cb1e923/Jenkins_images/4.JPG)

# 5. Install Git
```bash
sudo apt-get install git
git --version
```
![image alt](https://github.com/souravhajra123/ElevateLabTask1/blob/4069f2f7b345603fedbc8be692ee65c03cb1e923/Jenkins_images/5.JPG)

# 6. Install Jenkins
```bash
nano jenkins.sh
----------------
sudo apt-get update
sudo apt install fontconfig openjdk-17-jre -y
sudo wget -O /usr/share/keyrings/jenkins-keyring.asc https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key
echo "deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc]" https://pkg.jenkins.io/debian-stable binary/ | sudo tee /etc/apt/sources.list.d/jenkins.list > /dev/null
sudo apt-get update
sudo apt-get install jenkins -y
systemctl status jenkins
-------------------
bash jenkins.sh
jenkins --version
```
![image alt](https://github.com/souravhajra123/ElevateLabTask1/blob/4069f2f7b345603fedbc8be692ee65c03cb1e923/Jenkins_images/6.JPG)
![image alt](https://github.com/souravhajra123/ElevateLabTask1/blob/4069f2f7b345603fedbc8be692ee65c03cb1e923/Jenkins_images/7.JPG)

# 7. Install Node.js
```bash
# Install npm:
sudo apt-get install npm

# Download and install nvm:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.2/install.sh | bash

# in lieu of restarting the shell
\. "$HOME/.nvm/nvm.sh"

# Download and install Node.js:
nvm install 22

# Verify the Node.js version:
node -v # Should print "v22.14.0".
nvm current # Should print "v22.14.0".

# Verify npm version:
npm -v # Should print "10.9.2".
```
![image alt](https://github.com/souravhajra123/ElevateLabTask1/blob/4069f2f7b345603fedbc8be692ee65c03cb1e923/Jenkins_images/8.JPG)
![image alt](https://github.com/souravhajra123/ElevateLabTask1/blob/4069f2f7b345603fedbc8be692ee65c03cb1e923/Jenkins_images/9.JPG)

# 8. Create a directory, go inside the directory, initialize .git repository in that directory, add GitHub remote repository, fetch and and pull content from the remote repository
```bash
mkdir Node-App
cd Node-App
git config --global user.name "<Your_Name>"
git config --global user.email "<Your_Email_ID>"
git config --global core.editor "<editor_name>"
git config --list
git init
git remote add origin <github_repo_url>
git fetch
git pull origin main
git branch -M main
ls
git status
```
![image alt](https://github.com/souravhajra123/ElevateLabTask1/blob/4069f2f7b345603fedbc8be692ee65c03cb1e923/Jenkins_images/10.JPG)

# 9. Set Jenkins Dashboard
```bash
# Copy public IP of the machine and browse it on port 8080(<public_IP>:8080)
# A page will be opened and asked for initial password
# Come back to terminal and execute -
sudo cat /var/lib/jenkins/secrets/initialAdminPassword
# Copy the password and paste it on password field
# Install Plug ins
# Provide Sign Up details and start using Jenkins Dashboard
```
![image alt](https://github.com/souravhajra123/ElevateLabTask1/blob/4069f2f7b345603fedbc8be692ee65c03cb1e923/Jenkins_images/11.JPG)
![image alt](https://github.com/souravhajra123/ElevateLabTask1/blob/4069f2f7b345603fedbc8be692ee65c03cb1e923/Jenkins_images/12.JPG)
![image alt](https://github.com/souravhajra123/ElevateLabTask1/blob/4069f2f7b345603fedbc8be692ee65c03cb1e923/Jenkins_images/13.JPG)
![image alt](https://github.com/souravhajra123/ElevateLabTask1/blob/4069f2f7b345603fedbc8be692ee65c03cb1e923/Jenkins_images/14.JPG)

# 10. Create a Pipeline
![image alt](https://github.com/souravhajra123/ElevateLabTask1/blob/4069f2f7b345603fedbc8be692ee65c03cb1e923/Jenkins_images/14.JPG)
![image alt](https://github.com/souravhajra123/ElevateLabTask1/blob/4069f2f7b345603fedbc8be692ee65c03cb1e923/Jenkins_images/15.JPG)
![image alt](https://github.com/souravhajra123/ElevateLabTask1/blob/4069f2f7b345603fedbc8be692ee65c03cb1e923/Jenkins_images/16.JPG)
![image alt](https://github.com/souravhajra123/ElevateLabTask1/blob/4069f2f7b345603fedbc8be692ee65c03cb1e923/Jenkins_images/17.JPG)
![image alt](https://github.com/souravhajra123/ElevateLabTask1/blob/4069f2f7b345603fedbc8be692ee65c03cb1e923/Jenkins_images/18.JPG)

# 11. Add Docker Hub credentials in Jenkins store's Global credentials
![image alt](https://github.com/souravhajra123/ElevateLabTask1/blob/1e1e6eb8c972d26feb7def40ee5465ced0a2dcf6/Jenkins_images/19.JPG)

# 12. Build the Jenkins job manually by clicking on "Build Now"
![image alt](https://github.com/souravhajra123/ElevateLabTask1/blob/1e1e6eb8c972d26feb7def40ee5465ced0a2dcf6/Jenkins_images/20.JPG)

# 13. After successfull build, you can check docker image and container on the terminal
```bash
docker images # to list images
docker ps # to list running containers
```
![image alt](https://github.com/souravhajra123/ElevateLabTask1/blob/1e1e6eb8c972d26feb7def40ee5465ced0a2dcf6/Jenkins_images/21.JPG)

# 14. Check Docker Hub repository
![image alt](https://github.com/souravhajra123/ElevateLabTask1/blob/1e1e6eb8c972d26feb7def40ee5465ced0a2dcf6/Jenkins_images/22.JPG)

# 15. Browse base machine's public IP on port 3000 to see the container's output
![image alt](https://github.com/souravhajra123/ElevateLabTask1/blob/1e1e6eb8c972d26feb7def40ee5465ced0a2dcf6/Jenkins_images/23.JPG)
![image alt](https://github.com/souravhajra123/ElevateLabTask1/blob/1e1e6eb8c972d26feb7def40ee5465ced0a2dcf6/Jenkins_images/24.JPG)

# 16. Clean the base machine before automatic build(optional)
```bash
docker stop <container_ID>
docker rm <container_ID>
docker rmi <image_ID>
```
![image alt](https://github.com/souravhajra123/ElevateLabTask1/blob/1e1e6eb8c972d26feb7def40ee5465ced0a2dcf6/Jenkins_images/25.JPG)

# 17. Add GitHub Webhook in the GitHub repository for auto trigger
![image alt](https://github.com/souravhajra123/ElevateLabTask1/blob/1e1e6eb8c972d26feb7def40ee5465ced0a2dcf6/Jenkins_images/26.JPG)
![image alt](https://github.com/souravhajra123/ElevateLabTask1/blob/1e1e6eb8c972d26feb7def40ee5465ced0a2dcf6/Jenkins_images/27.JPG)

# 18. Create a readme file in your local repository, and add, commit and push it to remote/GitHub repository to trigger the Pipeline with new commit automatically
![image alt](https://github.com/souravhajra123/ElevateLabTask1/blob/1e1e6eb8c972d26feb7def40ee5465ced0a2dcf6/Jenkins_images/28.JPG)

# 19. Jenkins Pipeline got triggered automatically after the new push to GitHub repository
![image alt](https://github.com/souravhajra123/ElevateLabTask1/blob/1e1e6eb8c972d26feb7def40ee5465ced0a2dcf6/Jenkins_images/29.JPG)

# 20. After successful build, check docker image and container and browse base machine on port 3000 to see the output
![image alt](https://github.com/souravhajra123/ElevateLabTask1/blob/1e1e6eb8c972d26feb7def40ee5465ced0a2dcf6/Jenkins_images/30.JPG)
![image alt](https://github.com/souravhajra123/ElevateLabTask1/blob/1e1e6eb8c972d26feb7def40ee5465ced0a2dcf6/Jenkins_images/31.JPG)
![image alt](https://github.com/souravhajra123/ElevateLabTask1/blob/1e1e6eb8c972d26feb7def40ee5465ced0a2dcf6/Jenkins_images/32.JPG)

# 21. Now we will add Jenkinsfile to remote/GitHub repository and make some changes in Jenkins Pipeline job so that it can fetch Jenkinsfile from GitHub repository only
![image alt](https://github.com/souravhajra123/ElevateLabTask1/blob/1e1e6eb8c972d26feb7def40ee5465ced0a2dcf6/Jenkins_images/33.JPG)
![image alt](https://github.com/souravhajra123/ElevateLabTask1/blob/1e1e6eb8c972d26feb7def40ee5465ced0a2dcf6/Jenkins_images/34.JPG)
![image alt](https://github.com/souravhajra123/ElevateLabTask1/blob/1e1e6eb8c972d26feb7def40ee5465ced0a2dcf6/Jenkins_images/35.JPG)

# 22. Now make some changes on readme file and push it to GitHub repository, after the push Jenkins Pipeline will be triggered automatically and build the job as defined in Jenkinsfile of GitHub repository
![image alt](https://github.com/souravhajra123/ElevateLabTask1/blob/1e1e6eb8c972d26feb7def40ee5465ced0a2dcf6/Jenkins_images/36.JPG)
![image alt](https://github.com/souravhajra123/ElevateLabTask1/blob/1e1e6eb8c972d26feb7def40ee5465ced0a2dcf6/Jenkins_images/37.JPG)

# 23. After successful build, check docker image and container and browse base machine on port 3000 to see the output
![image alt](https://github.com/souravhajra123/ElevateLabTask1/blob/1e1e6eb8c972d26feb7def40ee5465ced0a2dcf6/Jenkins_images/38.JPG)
![image alt](https://github.com/souravhajra123/ElevateLabTask1/blob/1e1e6eb8c972d26feb7def40ee5465ced0a2dcf6/Jenkins_images/39.JPG)

## THANK YOU

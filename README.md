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

# 5. Check git version and docker version
```bash
git --version
docker --version
```
![image alt](https://github.com/souravhajra123/ElevateLabTask1/blob/5f231d991817a426e8b3f915e1667b28861cb622/images/4.JPG)

# 6. Install npm and node
```bash
sudo apt-get install npm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.2/install.sh | bash
\. "$HOME/.nvm/nvm.sh"
nvm install 22
node -v # Should print "v22.14.0".
nvm current # Should print "v22.14.0".
npm -v # Should print "10.9.2".
```
![image alt](https://github.com/souravhajra123/ElevateLabTask1/blob/5f231d991817a426e8b3f915e1667b28861cb622/images/5.JPG)

# 7. Create Application directory and initiate npm and create code and its dependencies
```bash
mkdir Node-App
cd Node-App
npm init -y
npm install express
# now write a sample application
nano sample-app.js
npm install
npm start
# now browse <public IP>:3000 to see if the application is working fine
```
![image alt](https://github.com/souravhajra123/ElevateLabTask1/blob/5f231d991817a426e8b3f915e1667b28861cb622/images/6.JPG)
![image alt](https://github.com/souravhajra123/ElevateLabTask1/blob/5f231d991817a426e8b3f915e1667b28861cb622/images/7.JPG)
![image alt](https://github.com/souravhajra123/ElevateLabTask1/blob/5f231d991817a426e8b3f915e1667b28861cb622/images/8.JPG)

# 8. Now configure git, initialize git repo(.git) in the Application directory and commit the changes
```bash
git config --global user.name "<your_name>"
git config --global user.email "<your_email>"
git config --global core.editor "<editor>"
git config --list
git init
git status
git add .
git commit -m "<commit_message>
```
![image alt](https://github.com/souravhajra123/ElevateLabTask1/blob/5f231d991817a426e8b3f915e1667b28861cb622/images/9.JPG)

# 9. Add remote repository and push the contents to the remote repository
```bash
git branch # if branch name is not main then change the branch name as main
git branch -M main # branch name is changed
git remote add origin <github_repo_url>
git push -u origin main
```
![image alt](https://github.com/souravhajra123/ElevateLabTask1/blob/5f231d991817a426e8b3f915e1667b28861cb622/images/10.JPG)

# 10. Contents are uploaded to remote repository
![image alt](https://github.com/souravhajra123/ElevateLabTask1/blob/5f231d991817a426e8b3f915e1667b28861cb622/images/11.JPG)

# 11. Write a Dockerfile to create docker image of the application. Add, commit and push the Dockerfile to remote repository and build the image manually to check if it is working or not
```bash
nano Dockerfile
git add Dockerfile
git commit -m "<commit_message>
docker build -t <image_name> .
# if build is successful then check docker images
docker images
```
![image alt](https://github.com/souravhajra123/ElevateLabTask1/blob/5f231d991817a426e8b3f915e1667b28861cb622/images/12.JPG)

# 12. Now create the docker container manually using the docker image
```bash
docker images
docker run -dit -p 3000:3000 --name <container_name> <image_name>
```
![image alt](https://github.com/souravhajra123/ElevateLabTask1/blob/5f231d991817a426e8b3f915e1667b28861cb622/images/13.JPG)

# 13. Browse the container at base machine's port 3000
![image alt](https://github.com/souravhajra123/ElevateLabTask1/blob/5f231d991817a426e8b3f915e1667b28861cb622/images/14.JPG)
![image alt](https://github.com/souravhajra123/ElevateLabTask1/blob/5f231d991817a426e8b3f915e1667b28861cb622/images/15.JPG)

# 14. Remove docker container and docker image from the base, because now we will automate the workflow
```bash
docker stop <container_id>
docker rm <container_id>
docker rmi <image_id>
```
![image alt](https://github.com/souravhajra123/ElevateLabTask1/blob/5f231d991817a426e8b3f915e1667b28861cb622/images/16.JPG)

# 15. Push the Dockerfile to remote repository
```bash
git push -u origin main
```
![image alt](https://github.com/souravhajra123/ElevateLabTask1/blob/5f231d991817a426e8b3f915e1667b28861cb622/images/17.JPG)
![image alt](https://github.com/souravhajra123/ElevateLabTask1/blob/5f231d991817a426e8b3f915e1667b28861cb622/images/18.JPG)

# 16. Set EC2 instance as self-hosted runner for GitHub Actions
```bash
# choose runner image as Linux and architecture as per your system architecture
# Create a folder
$ mkdir actions-runner && cd actions-runner
# Download the latest runner package
$ curl -o actions-runner-linux-x64-2.323.0.tar.gz -L https://github.com/actions/runner/releases/download/v2.323.0/actions-runner-linux-x64-2.323.0.tar.gz
# Optional: Validate the hash
$ echo "0dbc9bf5a58620fc52cb6cc0448abcca964a8d74b5f39773b7afcad9ab691e19  actions-runner-linux-x64-2.323.0.tar.gz" | shasum -a 256 -c
# Extract the installer
$ tar xzf ./actions-runner-linux-x64-2.323.0.tar.gz
# Create the runner and start the configuration experience
$ ./config.sh --url https://github.com/souravhajra123/ElevateLabTask1 --token XXXXXXXXXXXXXXXXXXXXXXXX
```
![image alt](https://github.com/souravhajra123/ElevateLabTask1/blob/5f231d991817a426e8b3f915e1667b28861cb622/images/19.JPG)

# 17. Write deploy.yml file inside .github/workflows to automate the CI/CD pipeline and push it to the remote repository
```bash
nano deploy.yml
git add deploy.yml
git commit -m "<commit_message>
git push -u origin main
```
![image alt](https://github.com/souravhajra123/ElevateLabTask1/blob/5f231d991817a426e8b3f915e1667b28861cb622/images/20.JPG)

# 18. Run run.sh script inside action-runner directory to initiate connection between GitHub and EC2
```bash
./run.sh
```
![image alt](https://github.com/souravhajra123/ElevateLabTask1/blob/5f231d991817a426e8b3f915e1667b28861cb622/images/21.JPG)

# 19. Pipeline automatically got triggered as commit done to the main branch by pushing deploy.yml in remote repository
![image alt](https://github.com/souravhajra123/ElevateLabTask1/blob/5f231d991817a426e8b3f915e1667b28861cb622/images/22.JPG)
![image alt](https://github.com/souravhajra123/ElevateLabTask1/blob/5f231d991817a426e8b3f915e1667b28861cb622/images/23.JPG)

# 20. Check that image is got created and container is also running
```bash
docker images
docker ps
```
![image alt](https://github.com/souravhajra123/ElevateLabTask1/blob/5f231d991817a426e8b3f915e1667b28861cb622/images/25.JPG)

# 21. Now browse the container in base machine's port 3000
![image alt](https://github.com/souravhajra123/ElevateLabTask1/blob/5f231d991817a426e8b3f915e1667b28861cb622/images/24.JPG)




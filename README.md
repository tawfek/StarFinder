![starfinder](https://raw.githubusercontent.com/tawfek/StarFinder/main/src/styles/images/162.jpg)
# StarFinder
 AI to detect celebrities from picture using aws celebrities recognition api.
[see demo](https://starfinder.tawfekm.com)

## Requirements
 `nodejs` `php ^7` `composer`
## Setting up frontend
1. clone the repo `https://github.com/tawfek/StarFinder.git`
2. run `npm run install` command , to install dependencies

## Setting up AWS api
3. Make new access key from [AWS IAM Managemnt console](https://console.aws.amazon.com/iam/home#/security_credentials)
4. make `.env` file like the [.env.example](https://github.com/tawfek/StarFinder/tree/main/.env.example)
5. add your access key ID and secret access key in env
6. edit the  API_ENDPOINT target with your own server  

## Setting up backend
7. inside [/api](https://github.com/tawfek/StarFinder/tree/main/api) run `composer install`
8. make cache dir called `cache` inside [/api/src](https://github.com/tawfek/StarFinder/tree/main/api/src) and give the dir 777 permissions



## Run 
9. run php server inside [/api](https://github.com/tawfek/StarFinder/tree/main/api) , using `PHP -S 127.0.0.1:3001` command to start the server
10. to run the app run `npm run start` command will open the application on [localhost:3000](http://localhost:3000)

# nodejs-docker

## Clone
```bash
git clone git@github.com:pauloperezpaternina/nodejs-docker.git

cd nodejs-docker

```

## Install dependencies
```bash
npm install
npm updated
```
## run local server 
```bash
node app

```

## nodemon local
nodemon is dependencies only run:
```bash
nodemon app
```

```bash
npm install --save-dev nodemon
```

## Try

[localhost:8080](localhost:8080)

[localhost:8080/hello](localhost:8080/hello)

[localhost:8080/hello/es](localhost:8080/hello/es)

change es by:
- fr
- de
- en

### Get request
[localhost:8080/hello/?name=Javier](localhost:8080/hello/?name=Javier)

![Get](img/get-request.png)

### post request

{
    "name":"Nodejs"
}
![Post](img/post-request.png)

#### Sum

{
    "a":30,
    "b":12
}

![Post](img/post-request-addition.png)
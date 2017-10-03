# Cal Hacks Pub Sub App for API Demo

Sample .env file: 
```
PORT=8000 

AUTH_PASS=asdfasdfasdfFgAhHHzmF+VWgT/fvKqmVoX+k=
REDIS_SERVER_HOST=redisredis.redis.cache.windows.net
```

## Deployment instructions

Deploy to azure: 

```
Create app service plan: 
$ az appservice plan create -g MLFunctionsRG --name calhacks

Create web app with local git deployment: 
$ az webapp create -g MLFunctionsRG -p calhacks -n "calhack-pubsub-test" --deployment-local-git -l
```

Now push the code to azure: 
```
git remote add azure https://conductorreilly@calhack-pubsub-test.scm.azurewebsites.net/calhack-pubsub-test.git

git push azure master 
```

Delete Resources in Azure: 
```
Delete app service plan: 
$ az appservice plan delete -g MLFunctionsRG --name calhacks 

Delete web app: 
$ az webapp delete -g MLFunctionsRG -n "calhack-webapp-test" 
```


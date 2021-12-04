
![Discord Tickets](https://img.eartharoid.me/insecure/plain/https://static.eartharoid.me/discord-tickets/logo/wordmark/gradient.png@png)

An open-source ticket management bot for Discord - a free alternative to the premium and white-label plans of other popular ticketing bots. You can find the original repo [here](https://github.com/discord-tickets/bot).




# Discord Tickets hosting on Railway

You can host Discord Tickets bot on Railway for free without credit card! On railway you get $5 credit monthly for free (more info about their pricing [here](https://railway.app/pricing)). If you use your free credit, your projects will be paused and you need to re-deploy them next month when you get credit. You can also upgrade to Developer plan by adding your credit card details (you will be billed only when your usage is more than $10). You don't have to add your credit card tho. Railway offers MySQL plugin so you don't need to worry about database.
Just follow this guide. 
Discord Tickets docs: https://discordtickets.app


 ## Deploying the bot
 - Create account on railway by clicking [here](https://railway.app?referralCode=YEuzh9) and login with Github
- Create a bot from Discord dev portal and invite it to your Discord server - [guide](https://discordtickets.app/getting-your-bot-token/)
- Fork Discord Tickets Railway repo from here https://github.com/AnonDev-org/discord_tickets-bot-railway
When there is update, you will need to make sure your fork is up to date with the original repo. Forked repo is needed for changing configuration in `/user/config.js` file.
- You can edit config in `/user/config.js` file. Don't put your token and other secrets to this file, as if you have public repo everyone can see it. This file is not used for configuring secrets.

- Go to railway and deploy from github repo - https://railway.app/new/github .
If you don't see your repo there, click on "Configure the Railway app on GitHub" and install railway app to your github repo.
![photo](https://i.imgur.com/aDB3iGm.png)

 - Add the following variables:
    * `DISCORD_TOKEN` -  your bot's token
    * `DB_ENCRYPTION_KEY` - random code, you can use UUID v4, generate here https://uuidonline.com/
 ![photo](https://i.imgur.com/BD5tZgo.png)
 - Click on Deploy button and wait.
 - Create MySQL plugin. Click on "Add plugin" in menu and choose MySQL. 
 ![photo](https://i.imgur.com/yVY2OqC.png)
 - Go to variables and add these variables for MySQL:
     * `DB_TYPE` -  set to `mysql`
     * `DB_HOST` -  copy the variable that is set as `MYSQLHOST` in MySQL preset variables
     * `DB_PORT` -  copy the variable that is set as `MYSQLPORT` in MySQL preset variables
     * `DB_USER` -  copy the variable that is set as `MYSQLUSER` in MySQL preset variables
     * `DB_PASS` -  copy the variable that is set as `MYSQLPASSWORD` in MySQL preset variables
     * `DB_NAME` - set to `discord-tickets`
      You can find those MySQL preset variables in Variables. 
     After adding the variables click on deployments and wait until its re-deployed.

    


### That's all.
- 🎉 Your Discord tickets bot should be online now, you can  [configure](https://discordtickets.app/configuration/categories/) your bot now.


If you need help you can open new modmail support thread on [Pinglik Support Server](https://pinglik.eu/support) and we will help you 😉. You can also ping me on [Discord Tickets Discord](https://discord.gg/nMrWd8aZaP) server

If you would like to support me:<br>
<a href='https://ko-fi.com/J3J72WPRC' target='__blank'><img height='36' style='border:0px;height:36px;' src='https://cdn.ko-fi.com/cdn/kofi2.png?v=2' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>

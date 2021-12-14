

![Discord Tickets](https://img.eartharoid.me/insecure/plain/https://static.eartharoid.me/discord-tickets/logo/wordmark/gradient.png@png)

An open-source ticket management bot for Discord - a free alternative to the premium and white-label plans of other popular ticketing bots. You can find the original repo [here](https://github.com/discord-tickets/bot).




# Discord Tickets hosting on Railway

You can host Discord Tickets bot on Railway for free without credit card! On railway you get $5 credit monthly for free (more info about their pricing [here](https://railway.app/pricing)). If you use your free credit, your projects will be paused and you need to re-deploy them next month when you get credit. You can also upgrade to Developer plan by adding your credit card details (you will be billed only when your usage is more than $10). You don't have to add your credit card tho. Railway offers MySQL plugin so you don't need to worry about database.
Just follow this guide. This fork of discord tickets repo is designed to be hosted on Railway, if you don't want to host it on Railway, check the original repo [here](https://github.com/discord-tickets/bot/)
Discord Tickets docs: https://discordtickets.app


 ## Deploying the bot
 - Create account on railway by clicking [here](https://railway.app?referralCode=YEuzh9) and login with Github.
- Create a bot from Discord dev portal and invite it to your Discord server - [guide](https://discordtickets.app/getting-your-bot-token/)

- Click on the deploy button below and choose where repo should be created for it.
[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template?template=https%3A%2F%2Fgithub.com%2FAnonDev-org%2Fdiscord_tickets-bot-railway&plugins=mysql&envs=DISCORD_TOKEN%2CDB_TYPE%2CDB_ENCRYPTION_KEY%2CDB_TABLE_PREFIX&DISCORD_TOKENDesc=Your+Discord+bot+token&DB_TYPEDesc=Database+type%2C+keep+it+mysql%2C+railway+has+MySQL+plugin+for+it&DB_ENCRYPTION_KEYDesc=Random+code%2C+you+can+use+UUID+v4%2C+generate+new+here+-+https%3A%2F%2Fuuidonline.com%2F&DB_TABLE_PREFIXDesc=Database+table+prefix%2C+you+can+keep+it+as+it+is&DB_TYPEDefault=mysql&DB_ENCRYPTION_KEYDefault=b0762405-0500-40ed-b151-711b1fb0123c&DB_TABLE_PREFIXDefault=dsctickets_&referralCode=YEuzh9)

 -  Fill in the Environment Variables.
 - Click deploy.
 - You can also edit `user/config.js` file in your Github repo if you want.



### That's all.
- 🎉 Your Discord tickets bot should be online now, you can  [configure](https://discordtickets.app/configuration/categories/) your bot now.


If you need help you can open new modmail support thread on [Pinglik Support Server](https://pinglik.eu/support) and we will help you 😉. You can also ping me on [Discord Tickets Discord](https://discord.gg/nMrWd8aZaP) server

If you would like to support me:<br>
<a href='https://ko-fi.com/J3J72WPRC' target='__blank'><img height='36' style='border:0px;height:36px;' src='https://cdn.ko-fi.com/cdn/kofi2.png?v=2' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>

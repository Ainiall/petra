# PHX-BOT
Discord bot for PHX alliance management

## HOW TO USE
You should have installed [NodeJS](https://nodejs.org/en/) to be able to build the dependencies using
```
$ npm i
```
The .env file contains sensitive data, so *you need to create your own file*. The structure is:
```
TOKEN=your_token
CLIENT_ID=your_bot_id
GUILD_ID=your_server_id
R4=your_r4_rol_id
NEWS=your_news_channel_id
```
Then you can run the bot locally using
```
$ npm start
```
## DEPLOY TO HEROKU
We need to deploy the bot to one web based server in order to be online 24/7.
The first step is to create an account at [Heroku](https://www.heroku.com) and then create a new app. Link that app to your own fork and **enable automatic deployment**. 
Finally, you need to recreate your .env data there:
 - Click on Settings under your app dashboard.
 - Click on Reveal Config Vars.
 - Add your key/value pairs (same as .env file)

## LIST OF COMMANDS
 - /utc -> shows current UTC time (only the person that writes the command can see it)

### R4 COMMANDS
 - /portal description date time-> alert showing info of schedualed portal event.
   - it has a UTC time converter to EST option
   - it has an export to google calendar option
   - it shows the number of people who are going to attend thanks to the badge reaction system

![portal](https://github.com/Ainiall/phx-bot/blob/master/img/img_portal.png)
 - /tower -> alert showing a new tower has been placed

![tower](https://github.com/Ainiall/phx-bot/blob/master/img/img_tower.png)
 - /resource -> poll about which rss should be placed next
   - it uses a badge reaction system to count votes

![rss](https://github.com/Ainiall/phx-bot/blob/master/img/img_rss.png)

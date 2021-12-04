/**
 * ###############################################################################################
 *  ____                                        _     _____              _             _
 * |  _ \  (_)  ___    ___    ___    _ __    __| |   |_   _| (_)   ___  | | __   ___  | |_   ___
 * | | | | | | / __|  / __|  / _ \  | '__|  / _` |     | |   | |  / __| | |/ /  / _ \ | __| / __|
 * | |_| | | | \__ \ | (__  | (_) | | |    | (_| |     | |   | | | (__  |   <  |  __/ | |_  \__ \
 * |____/  |_| |___/  \___|  \___/  |_|     \__,_|     |_|   |_|  \___| |_|\_\  \___|  \__| |___/
 *
 * ---------------------
 *       Support
 * ---------------------
 *
 * 	> Official documentation: https://discordtickets.app
 * 	> Official Discord support server: https://go.eartharoid.me/discord
 *
 *      > Fork that can be hosted on railway: https://github.com/AnonDev-org/discord_tickets-bot-railway/
 *      > Support creator of fork and guide: https://ko-fi.com/anondev
 *
 * ###############################################################################################
 */


module.exports = {
	defaults: {
		colour: '#009999',
		log_messages: true,
		name_format: 'ticket-{number}',
		opening_message: 'Hello {name}, thank you for creating a ticket. A member of staff will soon be available to assist you.\n\n__All messages in this channel are stored for future reference.__',
		footer: "Discord Tickets hosted on railway"
	},
	developer: { debug: false },
	locale: 'en-GB',
	logs: {
		enabled: false,
		keep_for: 30,
		split: true
	},
	max_listeners: 10,
	plugins: [],
	presence: {
		duration: 60,
		presences: [
			{
				activity: '/new',
				type: 'PLAYING'
			},
			{
				activity: 'with tickets',
				type: 'PLAYING'
			},
			{
				activity: 'tickets',
				type: 'WATCHING'
			}
		],
		randomise: true
	},
	super_secret_setting: true,
	update_notice: true
};

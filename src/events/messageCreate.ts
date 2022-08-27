module.exports = {
	name: 'messageCreate',
	execute(message: any) {
		const trigger = ['darling', 'little'];
		const contenuto = message.content.toLowerCase();
		const autore = message.author.id;
		trigger.forEach(word => {
			if (contenuto == word && (autore == '523151361215299586' || autore == '423908720724934666')) {
				message.react('💛');
				console.log('Reazione aggiunta!');
			}
		});
	},
};
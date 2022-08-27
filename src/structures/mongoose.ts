import { connect } from "mongoose";

export const connectDatabase = async () => {
    await connect("mongodb+srv://60_Bot:admin@gamingcommunity60.ejjey.mongodb.net/Bot");
	console.log('Conessione al DataBase "gamingcommunity60" avvenuta con successo! ✅');
}
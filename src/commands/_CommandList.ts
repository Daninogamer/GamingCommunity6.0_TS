// Importo l'interfaccia dei comandi
import { Command } from "../interfaces/Command";

// Ogni comando che creerò dovra essere importato qui
import { dev_agg } from "./staff/dev_agg";
import { dev_spam } from "./staff/dev_spam";
import { s_ban } from "./staff/s_ban";
import { s_clear } from "./staff/s_clear"
import { s_kick } from "./staff/s_kick";
import { s_list } from "./generale/s_list";
import { s_mute } from "./staff/s_mute";
import { s_unban } from "./staff/s_unban";
import { v_sposta } from "./generale/v_sposta";
import { v_keylist } from "./generale/v_keylist";
import { v_remkey } from "./generale/v_remkey";
import { v_setkey } from "./generale/v_setkey";
import { s_manage } from "./staff/s_manage";
// import { u_portafoglio } from "./generale/u_portafoglio";


// Esporto tutta la lista dei miei comandi
export const CommandList: Command[] = [dev_agg, dev_spam, s_ban, s_clear, s_kick, s_list, s_mute, s_unban, v_sposta, v_keylist, v_remkey, v_setkey, s_manage];

// console.log(CommandList) Se vuoi lascialo, io te lo ho tolto così non ti da fastidio
import { Pool } from "pg";
//import {config} from 'dotenv';
//config();


//si se desarrolla en entorno local activa este bloque de codigo

/*
export const pool = new Pool({
    user:'postgres',
    host:'localhost',
    password: 'davitzoL18',
    database: 'menusdb',
    port: 5432,
    ssl:true
});
*/








//external url de render
export const pool = new Pool({
    user:'angel',
    host:'dpg-cmk6sb2cn0vc73e33as0-a.oregon-postgres.render.com',
    password: 'rHdFGWknJqOEJIk0A76xa12NvtGjOOLg',
    database: 'menudb_nydq',
    port: 5432,
    ssl:true
});

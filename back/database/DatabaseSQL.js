import {Sequelize } from "sequelize";

const dataBase = new Sequelize ('crudFullstack', 'root','' , {
    host:'localhost', 
    dialect: "mysql",

});
 
export default dataBase ;
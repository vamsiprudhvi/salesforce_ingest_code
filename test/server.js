const express = require('express');
const app = express();
app.use(express.json());

(async function init() {
   
    // const dbCon = require('./config/mgConn');
    // global.dbs = await dbCon.connect();     
    app.use(require('./routes/initRouterLoader'));
    app.listen(9000,()=>console.log('server running.......9000!'))
})();
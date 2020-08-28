const express = require("express");
const app = express();
var cors = require('cors');
const data = require('./public/data_four.json')
//var config = require('./config');

app.use(express.static(__dirname+'/public'));


app.get('/', (req, res) => {
    res.sendFile(index.js);
});

app.get('/economy', (req, res) => {
    let year = Object.values(req.query);
    //console.log(data['seasonTop10EconomicBowlers'][year]);
    res.json(data['seasonTop10EconomicBowlers'][year]);
    
});

app.use(cors({
        credentials: true,
        origin: true
    })
);
app.options('*', cors());

app.listen(process.env.PORT || 8080, function() {
    console.log('Server running on port 8080', '');
});
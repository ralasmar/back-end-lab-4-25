//variables that requires db and keep track of id
const houses = require('./db.json');
let id = 4;

module.exports = {
    getHouses : (req, res) => {
        res.status(200).send(houses);
    },
    deleteHouse : (req, res) => {
        let index = houses.findIndex(elem => elem.id === +req.params.id);
        houses.splice(index, 1);
        res.status(200).send(houses)
    },
    createHouse : (req, res) => {
        let {address, price, imageURL} = req.body;
        let newHouse = {...req.body, id: id};
        houses.push(newHouse);
        id++; 
        res.status(200).send(houses);
    },
    updateHouse : (req, res) => {
        const { id } = req.params;
        const { type } = req.body;
        let index = houses.findIndex(elem => elem.id === +req.params.id);

        if (houses[index].price <= 10000 && type === 'minus'){
            houses[index].price = 0;
            res.status(200).send(houses);
        } 
         else if (type === 'plus'){
            houses[index].price += 10000
            res.status(200).send(houses);
        }
        else if (type === 'minus'){
            houses[index].price -= 10000
            res.status(200).send(houses)
        }
        else {
            res.sendStatus(400)
        }
        
    },
}
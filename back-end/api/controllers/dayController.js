const Day = require('../models/day');
//---
const chalk = require('chalk');
const mongoose = require('mongoose');

getDate = () => {
    const event = new Date();    
    return event.getDate() + "/" + ( event.getMonth() + 1 )  + "/" + event.getFullYear();
}

module.exports = {
    newDay: async (req, res, next) => {
        await Day.find({ date: getDate() })
        .exec()
        .then(day => {
            console.log(day[0])
            if (day.length >= 1) {
            return res.status(200).json({
                day : day[0],
                message: "Une journée existe déjà dans la base de données"
            });
            } else {
                id = new mongoose.Types.ObjectId()
                const day = new Day({
                _id: id,                
                date: getDate()              
                });
                console.log(chalk.red(day))
                day
                .save()
                .then(result => {
                    console.log(result);
                    res.status(201).json({
                        day : result,
                        message: "New day created"
                    });
                })
                .catch(err => {
                    console.log(err);
                    res.status(401).json({
                    error: err
                    });
                });
            }
        });
    }
};
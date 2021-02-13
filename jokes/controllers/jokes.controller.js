const JokeModel = require('../models/jokes.model')
 module.exports.findAllJokes = (req, res) =>{
     JokeModel.find()
         .then(allJokes => res.json(allJokes))
         .catch(err => res.json({message: "something went wrong", error: err}) )
 }

 module.exports.findOneJoke = (req, res) => {
    JokeModel.findOne({ _id: req.params.id })
        .then(oneJoke => res.json({ joke: oneJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

 module.exports.createJoke = (req, res) => {
    JokeModel.create(req.body)
        .then(createdJoke => res.json(createdJoke))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
 }

module.exports.updateJoke = (req, res) => {
    JokeModel.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedJoke => res.json({ joke: updatedJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.deleteJoke = (req, res) => {
    JokeModel.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
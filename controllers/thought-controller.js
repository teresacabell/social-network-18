const User = require('../models/user');
const Thought = require('../models/thought');

const thoughtController = {
    getThoughts(req, res) {
    Thought.find()
    .then((dbThoughtData) => res.json(dbThoughtData))
    .catch((err) => res.json(err));
    },
    addThought(req, res) {
        Thought.create(req.body)
    .then((dbThoughtData) => res.json(dbThoughtData))
    .catch((err) => res.json(err));
    },
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
    .then((dbThoughtData) => res.json(dbThoughtData))
    .catch((err) => res.json(err));
    },
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true }
          )
            .then((dbThoughtData) => res.json(dbThoughtData))
            .catch((err) => res.json(err));
    },
    deleteThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.thoughtId })
        .then((dbThoughtData) => res.json(dbThoughtData))
        .catch((err) => res.json(err));
    },
    addReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: req.params.reactionId } },
            { runValidators: true, new: true }
          )
            .then((dbThoughtData) => res.json(dbThoughtData))
            .catch((err) => res.json(err));
    },
    deleteReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { reactions: req.params.reactionId } },
            { runValidators: true, new: true }
          )
            .then((dbData) => res.json(dbData))
            .catch((err) => res.json(err));
    }
}

module.exports = thoughtController;
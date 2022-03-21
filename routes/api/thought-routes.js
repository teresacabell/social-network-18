const router = require("express").Router();

const {
    getThoughts,
    addThought,
    getSingleThought,
    updateThought,
    deleteThought,
    addReaction, 
    deleteReaction
} = require('../../controllers/thought-controller');

router.route('/').get(getThoughts).post(addThought);

router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

router.route('/:thoughtId/reactions').post(addReaction);
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

// router.get("/", (req, res) => {
//   Thought.find()
//     .then((dbThoughtData) => res.json(dbThoughtData))
//     .catch((err) => res.json(err));
// });

// router.post("/", (req, res) => {
//   Thought.create(req.body)
//     .then((dbThoughtData) => res.json(dbThoughtData))
//     .catch((err) => res.json(err));
// });

// router.get("/:thoughtId", (req, res) => {
//   Thought.findOne({ _id: req.params.thoughtId })
//     .then((dbThoughtData) => res.json(dbThoughtData))
//     .catch((err) => res.json(err));
// });

// router.put("/:thoughtId", (req, res) => {
//   Thought.findOneAndUpdate(
//     { _id: req.params.thoughtId },
//     { $set: req.body },
//     { runValidators: true, new: true }
//   )
//     .then((dbThoughtData) => res.json(dbThoughtData))
//     .catch((err) => res.json(err));
// });

// router.delete("/:thoughtId", (req, res) => {
//   Thought.findOneAndDelete({ _id: req.params.thoughtId })
//     .then((dbThoughtData) => res.json(dbThoughtData))
//     .catch((err) => res.json(err));
// });

// router.put("/:thoughtId", (req, res) => {
//   Thought.findOneAndUpdate(
//     { _id: req.params.thoughtId },
//     { $pull: { reactions: { reactionId: params.reactionId } } },
//     { runValidators: true, new: true }
//   )
//     .then((dbThoughtData) => res.json(dbThoughtData))
//     .catch((err) => res.json(err));
// });

// router.delete(":/thoughtId", (req, res) => {
//   Thought.findOneAndUpdate(
//     { _id: req.params.thoughtId },
//     { $pull: { reactions: { reactionId: params.reactionId } } },
//     { runValidators: true, new: true }
//   )
//     .then((dbData) => res.json(dbData))
//     .catch((err) => res.json(err));
// });

module.exports = router;

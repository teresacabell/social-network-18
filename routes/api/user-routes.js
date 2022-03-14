const router = require("express").Router();
const {
    getUsers,
    addUser,
    getSingleUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/user-controller');

router.route('/').get(getUsers).post(addUser);

router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);

// router.get("/", (req, res) => {
//   User.find()
//     .then(dbData => res.json(dbData))
//     .catch((err) => res.json(err));
// });

// router.post('/', (req, res) => {
//     User.create(req.body)
//     .then(dbData => res.json(dbData))
//     .catch((err) => res.json(err));
// })

// router.get('/:userId', (req, res) => {
//     User.findOne({_id: req.params.userId})
//     .select('-__v')
//     .populate('friends')
//     .populate('thoughts')
//     .then(dbData => res.json(dbData))
//     .catch((err) => res.json(err));
// })

// router.put('/:userId', (req, res) => {
//     User.findOneAndUpdate({_id: req.params.userId}, { $set:req.body }, {runValidators: true, new: true } )
//     .then(dbData => res.json(dbData))
//     .catch((err) => res.json(err));
// })

// router.delete('/:userId', (req, res) => {
//     User.findOneAndDelete({_id: req.params.userId})
//     .then(dbData => res.json(dbData))
//     .catch((err) => res.json(err));
// })

// router.post('/:userId/friends/:friendId', (req, res) => {
//     User.findOneAndUpdate({ _id: req.params.userId}, { $addToSet: {friends: req.params.friendId }}, {new:true})
//     .then(dbData => res.json(dbData))
//     .catch((err) => res.json(err));
// })

// router.delete('/:userId/friends/:friendId', (req, res) => {
//     User.findOneAndUpdate({ _id: req.params.userId}, { $pull: {friends: req.params.friendId}}, {new: true})
//     .then(dbData => res.json(dbData))
//     .catch((err) => res.json(err))
// })

module.exports = router;


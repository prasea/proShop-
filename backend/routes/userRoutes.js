import express from 'express';
const router = express.Router();
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  getUserByID,
  updateUser,
  deleteUser
} from '../controllers/userController.js'

router.route('/').post(registerUser).get(getUsers);
// router.route('/login').post(authUser);
router.post('/login', authUser);
router.post('/logout', logoutUser)
router.route('/profile').get(getUserProfile).put(updateUserProfile);
router.route('/:id').delete(deleteUser).get(getUserByID).put(updateUser)

export default router;

import {Router} from 'express'
import * as Usercontroller from '../controllers/User.controller'
const router = Router();

router.get('/', Usercontroller.getUsers);
router.get('/:id', Usercontroller.getUser);
router.post('/', Usercontroller.createUser);
router.post('/login',Usercontroller.authUser);

export default router
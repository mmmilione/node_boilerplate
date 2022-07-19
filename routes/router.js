import express from 'express';
import path from 'path';
import handleEnquiry from '../controllers/enquiry.js';

const router = express.Router();
const __dirname = path.resolve();

router.post('/api/contact', handleEnquiry);
router.use('/', express.static('dist'));
router.get('*', (req, res) => res.sendFile(path.join(__dirname, './dist/', 'index.html')));

export default router;
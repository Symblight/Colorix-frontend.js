import express from 'express';

const router = express.Router();

router.get('/p/:id', (req, res) => {
    res.status(200).send();
});

router.post('/list',  (req, res) => {
    res.status(200).send();
});

router.get('/:id/view ', (req, res) => {
    res.status(200).send();
});

router.post('/create ', (req, res) => {
    res.status(200).send();
});

router.post('/:id/edit ', (req, res) => {
    res.status(200).send();
});

router.delete('/:id/remove ', (req, res) => {
    res.status(200).send();
});

export default router;
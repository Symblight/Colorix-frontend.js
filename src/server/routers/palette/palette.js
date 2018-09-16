import express from 'express'


const router = express.Router()

router.get('/:id', (req, res) => { // show
  res.status(200).send()
})

router.post('/', (req, res) => { // show all
  res.status(200).send()
})

router.post('/ ', (req, res) => { // create
  res.status(201).send()
})

router.put('/:id ', (req, res) => { // edit
  res.status(200).send()
})

router.delete('/:id ', (req, res) => { // delete
  res.status(204).send()
})

export { router as paletteAPI }

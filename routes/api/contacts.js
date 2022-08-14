const express = require('express')

const router = express.Router()

router.get('/', async (req, res, next) => {
  res.json({ message: 'HW2 test message' })
})

router.get('/:contactId', async (req, res, next) => {
  res.json({ message: 'test HW2 message' })
})

router.post('/', async (req, res, next) => {
  res.json({ message: 'test HW2 message' })
})

router.delete('/:contactId', async (req, res, next) => {
  res.json({ message: 'test HW2 message' })
})

router.put('/:contactId', async (req, res, next) => {
  res.json({ message: 'test HW2 message' })
})

module.exports = router

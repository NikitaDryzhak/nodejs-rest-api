const express = require('express')

const router = express.Router()

router.get('/', async (req, res, next) => {
  res.json({ message: 'HW2 test ' })
})

router.get('/:contactId', async (req, res, next) => {
  res.json({ message: 'test HW2 ' })
})

router.post('/', async (req, res, next) => {
  res.json({ message: 'test HW2 ' })
})

router.delete('/:contactId', async (req, res, next) => {
  res.json({ message: 'test HW2 ' })
})

router.put('/:contactId', async (req, res, next) => {
  res.json({ message: 'test HW2 ' })
})

module.exports = router

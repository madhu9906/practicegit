const express = require('express')
const router = express.Router()
const Alien = require('../models/alien')

router.get('/', async(req,res) => {
    try {
        const aliens = await Alien.find()
        res.json(aliens)
    } catch (e) {
        res.send('Error '+e)
    }
})


router.get('/:id', async(req,res) => {
    try {
        const alien = await Alien.findById(req.params.id)
        res.json(alien)
    } catch (e) {
        res.send('Error '+e)
    }
})

router.post('/', async(req,res) => {
    const alien = new Alien({
        name: req.body.name,
        tech:req.body.tech,
        sub:req.body.sub
    })
    try {
      const a1 = await alien.save()
      res.json(a1)
    } catch (err) {
        res.send('Error'+err.message)
    }
})


router.patch('/:id',(req,res)=>{
    try{
        const alien = Alien.findById(req.params.id, ()=>{
            con
        })
        
        alien.sub = req.body.sub
        const a1 =  alien.save()
        res.json(a1)
    } catch (err) {
        console.log('err')
    }
})
router.delete('/:id',async(req,res)=>{
    try {
        const alien = await Alien.findById(req.params.id)
        const a1 = await alien.remove()
        res.json(a1)
    } catch (err) {
        console.log('err')
    }
})

module.exports = router


console.log('anji chnaged')
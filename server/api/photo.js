const router = require('express').Router()
const photo = './public/images/photo1.png'

router.post('/', async (req, res, next) => {
  try {
    console.log('hello from google route')
    // Imports the Google Cloud client library
    const vision = require('@google-cloud/vision')

    // Creates a client
    const client = new vision.ImageAnnotatorClient({
      keyFilename: 'googleCreds.json',
      projectId: 'vision-api-project-302822'
    })
    //console.log('req.body', req.body)
    const {image} = req.body
    var imageSliced = image.replace(/^data:image\/[a-z]+;base64,/, '')
    console.log('data from req', imageSliced)

    // Performs label detection on the image file
    const [result] = await client.labelDetection({
      image: {
        content: imageSliced
      }
    })
    const labels = result.labelAnnotations
    console.log('Labels!:')

    res.send(labels.map(label => label.description))
  } catch (err) {
    next(err)
  }
})

module.exports = router

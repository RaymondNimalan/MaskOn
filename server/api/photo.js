const router = require('express').Router()
const photo = './public/images/photo1.png'

router.post('/', async (req, res, next) => {
  try {
    // Imports the Google Cloud client library
    const vision = require('@google-cloud/vision')

    // Creates a client
    const client = new vision.ImageAnnotatorClient({
      keyFilename: 'googleCreds.json',
      projectId: 'vision-api-project-302822'
    })
    //console.log('req.body', req.body)

    // Performs label detection on the image file
    const [result] = await client.labelDetection(photo)
    const labels = result.labelAnnotations
    console.log('Labels!:')
    labels.forEach(label => console.log('->', label.description))
  } catch (err) {
    next(err)
  }
})

module.exports = router

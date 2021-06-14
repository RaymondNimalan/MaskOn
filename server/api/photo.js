const router = require('express').Router()

router.post('/', async (req, res, next) => {
  try {
    // Imports the Google Cloud client library
    const vision = require('@google-cloud/vision')

    // Creates a client
    const client = new vision.ImageAnnotatorClient({
      keyFilename: 'google-credentials.json',
      projectId: 'vision-api-project-302822'
    })
    const {image} = req.body

    if (!image) {
      res.send(['error'])
    } else {
      var imageSliced = image.replace(/^data:image\/[a-z]+;base64,/, '')

      // Performs label detection on the image file
      const [resultLabel] = await client.annotateImage({
        image: {
          content: imageSliced
        },
        features: [
          {
            type: 'LABEL_DETECTION',
            maxResults: 15
          }
        ]
      })

      const labels = resultLabel.labelAnnotations

      res.send(labels.map(label => label.description))
    }
  } catch (err) {
    next(err)
  }
})

module.exports = router

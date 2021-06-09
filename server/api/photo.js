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
      // credentials: {
      //   client_email: process.env.GCP_CLIENT_EMAIL,
      //   private_key: process.env.GCP_PRIVATE_KEY.split('\\n').join('\n')
      // }
    })
    //console.log('req.body', req.body)
    const {image} = req.body
    var imageSliced = image.replace(/^data:image\/[a-z]+;base64,/, '')
    //console.log('data from req', imageSliced)

    // Alters request sent to google api

    // const request = client.annotateImage({
    //   requests: [
    //     {
    //       image: {
    //         content: imageSliced,
    //       },
    //       features: [
    //         {
    //           maxResults: 15,
    //         },
    //       ],
    //     },
    //   ],
    // })

    // {
    //   image: {
    //     content: imageSliced,
    //   }
    // }

    // Object localization

    // const [result] = await client.annotateImage({
    //   image: {
    //     content: imageSliced,
    //   },
    //   features: [
    //     {
    //       type: 'OBJECT_LOCALIZATION',
    //       maxResults: 15,
    //     },
    //   ],
    // })
    // const objects = result.localizedObjectAnnotations

    // console.log(objects)

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
  } catch (err) {
    next(err)
  }
})

module.exports = router

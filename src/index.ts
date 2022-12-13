import * as sharp from 'sharp'

const sampleImagePath = './sample.jpg'


sharp(sampleImagePath).metadata().then(metadata=>{
  console.info(`density:${metadata.density}`)
  console.info(`width:${metadata.width}`)
  console.info(`height:${metadata.height}`)
});

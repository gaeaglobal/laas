var zpl = require('./zplparser')

zpl(process.argv[2], function(err,data){
  if (err)
  {
    console.log(err)
  }else{
    console.log(JSON.parse(data) ) 
  }
})

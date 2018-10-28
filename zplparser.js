var fs = require('fs')
var fields = []

module.exports = function(zplfile, callback ) {
fs.readFile(zplfile, 'utf-8', function(err,fileContents) {
  if (err)
  {
    err.statusCode = ' Label template ' +zplfile + ' not readable. '
    callback(err,fields)
  }
  else
  {
    let  lines = fileContents.split("\n")
    let fieldObject
    let count = 0
    for (var i=0; i<lines.length;i++)
    {
    //  console.log("Index " + i + " " + lines[i])
      if (lines[i].startsWith("^FN"))
      {
         field = lines[i].slice(lines[i].indexOf("^FD")+3,lines[i].indexOf("^FS"))
        fieldObject = {'name' : field, 'values':[], 'type':'string'}
        fields[count] = fieldObject
        count++;
      }

    }
  }
  
  callback(null, JSON.stringify(fields) )

}

)

}

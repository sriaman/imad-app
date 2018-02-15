var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var myfile={
    title:'startup alumni meet',
    heading:'JERC ALUMNI MEET STARTUP',
    contents:` <p>
                    in jecrc aliumni startup meet was happen where lots of alumni's are in the college and share their 
                    startup's and four of them are <b>RAS</b> qualifiers.
                </p>
 <p>
                    one of the best thing is that they all are good motivaters and do there startup's 
                    by self motivating.
                </p>
   <dl>
                    <dt>Arpit Agrawal</dt>
                    <dd>-director of JECRC</dd>
                    <dt>
                        DR.V.k. chandana
                    </dt>
                    <dd>-principal of JECRC</dd>
                </dl>
                <div>
                <p>
                    And many other Guests are  attended.
                </p>
                </div>`
};
function createtemplate(data){
    var title=data.title;
    var heading=data.heading;
    var contents=data.heading;

var htmlTemplate=`<!DOCTYPE html>
<html>
    <head>
        <title>${title}</title>
        <meta name="viewport" content="width=device-width initial-scale=1">
        <link href="/ui/style.css" rel="stylesheet" />
        </head>  
        <body>
            <a  href="/">Home</a>
            <hr>
            <div class="contents">
            <h2>${heading}</h2>
            <div>
                  ${contents}
            
                
            </div>
            </div>
        </body>
</html>

`;
    return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


app.get('/newfile',function(req,res){
 res.send(createtemplate(myfile));
});
app.get('/',function(req,res){
    res.sendFile('this is the second article');
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

const express = require('express');
const fileUpload = require('express-fileupload');

const app = express();
app.use(fileUpload());

app.post('/upload',(req,res)=>{
    let uploadPath;
    if(req.files === null){
        return res.status(400).json({msg:'No  file uploaded'});
    }

    const file = req.files.file;

    uploadPath = __dirname + '/client/public/uploads/'+file.name;

    file.mv(uploadPath,err=>{
        if(err){
            console.log(err);
            return res.status(500).send(err);
        }

        res.json({fileName: file.name, filePath: uploadPath});
    });
});

app.listen(5000, () => console.log('Server Started...'));

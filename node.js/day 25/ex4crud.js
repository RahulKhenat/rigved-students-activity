let express=require('express');
let parser=require('body-parser');
let fs=require('fs');
let app=express();
let PORT=5000;

app.listen(PORT,()=>console.log(`Server is running at ${PORT} Port`));
app.use(parser.json());


app.post('/user',(request,response)=>{
    let data=fs.readFileSync('user.json');
    let dataString=data.toString();
    
    if(dataString.length<1 || dataString ==""){
        jsArray=[];
    }else {
        jsArray=JSON.parse(dataString);
    }
    let content=request.body;
    jsArray.push(content);
    let jsonObject=JSON.stringify(jsArray);
    fs.writeFileSync('user.json',jsonObject);
    response.json('User Added.!!')
});

app.get('/user',(request,response)=>{
    let data=fs.readFileSync('user.json');
    let datastring=data.toString();
    let jsObject=JSON.parse(datastring);
    response.json(jsObject);
});

app.get('/user/:id',(request,response)=>{
    let Id=request.params.id;
    let data=fs.readFileSync('user.json');
    let datastring=data.toString();
    let jsObject=JSON.parse(datastring);
    for(let i=0;i<jsObject.length;i++){
        if(jsObject[i].userId==Id){
            let show={userId: jsObject[i].userId, name: jsObject[i].name, age: jsObject[i].age};
            response.json(show);
        }
    }
});

app.delete('/user/:id',(request,response)=>{
    let Id=request.params.id;
    let data=fs.readFileSync('user.json');
    let datastring=data.toString();
    let jsObject=JSON.parse(datastring);
    for(let i=0;i<jsObject.length;i++){
        if(jsObject[i].userId==Id){
            jsObject.splice(i,1);
            let jsonObject=JSON.stringify(jsObject);
            fs.writeFileSync('user.json',jsonObject);
            response.json(jsObject);
        }
    }
});
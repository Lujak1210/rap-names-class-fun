const express = require ('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())



const rappers ={
    '21 savage':{
    'age':29,
    'birthName':'Sheyaa Bin Abraham-Joseph',
    'birthLocation': 'London, England'
    },
    'chance the rapper':{
        'age':29,
        'birthName':'Chancelor Bennet',
        'birthLocation': 'Chicago, Illinois'   
    },
    'dylan':{
        'age':'Dylan',
        'birthName':'Dylan',
        'birthLocation': 'Dylan'
    }
}


app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName', (request, response) =>{
    const rapperName = request.params.rapperName.toLocaleLowerCase()
    if(rappers[rapperName]){
        response.json(rappers[rapperName])
    }else{
        response.json(rappers['dylan'])
    }
    
})

app.listen(process.env.PORT || PORT,()=>{
    console.log(`the server is running on post ${PORT}, GO CATCH IT!!!`)
})
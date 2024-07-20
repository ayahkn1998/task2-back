//weatherapi//longtitude,latitude//Dinamic

const request= require("request")

const forecast=(latitude,longtitude,callback) =>{

    const url="http://api.weatherapi.com/v1/current.json?key=6f06431ebda3496bbc0170102241907&q="+ latitude + "," + longtitude
    
    request ({url , json:true },(error, response)=>{
       if (error){
          callback("unable to connect weather api servies", undefined)
       
       } else if(response.body.error){
          callback(response.body.error.message, undefined)
        
       } else{
          callback(undefined, response.body.location.name +"it is "+ response.body.current.condition.text)
        
       
       }
     
    })
    }

    module.exports = forecast
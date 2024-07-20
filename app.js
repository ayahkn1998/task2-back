const request= require("request")
//weatherAPI
// const url="http://api.weatherapi.com/v1/current.json?key=6f06431ebda3496bbc0170102241907&q=London&aqi=no"
// request ({url},(error, response)=>{
//     const data1= JSON.parse(response.body)
//     // console.log(data1)
//     console.log(data1.location.name)
//     console.log(data1.current.condition.text)
//     console.log(data1.location.lat)
//     console.log(data1.location.lon)
    

    
// })

/********************************************************* */

// const url="http://api.weatherapi.com/v1/current.json?key=6f06431ebda3496bbc0170102241907&q=London&aqi=no"
// request ({url , json:true },(error, response)=>{
//    if (error){
//    console.log("ERROR HAS OCCURED")
//    } else if(response.body.error){
//     console.log(response.body.error.message)
//    } else{
//     console.log(response.body.location.name,response.body.current.condition.text)
//    //  console.log(response.body.current.condition.text)
//    //  console.log(response.body.location.lat)
//    //  console.log(response.body.location.lon)
//    }
 
// })

/******************************************************************************* */
//weatherStack

// const url=""
// request ({url , json:true },(error, response)=>{
   
//     console.log(response.body.location.name)
//     console.log(response.body.current.weather_descriptions[0])
    
// })

/*********************************************************************************** */
//mapbox
// const geocodeUrl ="https://api.mapbox.com/geocoding/v5/mapbox.places/egypt.json?access_token=pk.eyJ1IjoiaXNsYW0yODQiLCJhIjoiY2wwamEzNmFhMGFtNTNkb3pqaXk4bXNnYSJ9.qYlrWIqo41gXgNNc4h8yIw"
 
// request ({url: geocodeUrl , json :true} , (error , response) => {
//   if(error){
//      console.log("unable to connect geocode servies ")
//   } else if(response.body.message){
//      console.log(response.body.message)
//   } else if(response.body.features.length == 0){
//      console.log("unable to find location")
//   } else{
//      const longtitude= response.body.features[0].center[0]
//      const latitude= response.body.features[0].center[1]
//      console.log(longtitude,latitude)
//   }
     
  
// })


/***************************************************************************************************** */


const forecast = require ("./data1/forecast")
const geocode = require("./data1/geocode")
 const country = process.argv[2]


geocode( country , (error , data) => {
    console.log("ERROR : " , error)
    console.log("DATA : "  , data)


    forecast( data.latitude , data.longtitude , (error , data) => {
        console.log("ERROR : " , error)
        console.log("DATA : " , data)
     } )
 })

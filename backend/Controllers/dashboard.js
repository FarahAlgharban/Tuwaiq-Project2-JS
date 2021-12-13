const {people} = require('../people')


const getPersonInformation = (req,res)=>{
    //find method to get person information!
    console.log(req.body);
    const result = people.find( ({ nationalId }) => nationalId === req.body.nationalId );
    console.log(result)
    if(result)
        res.send(result)
    else
        res.send("Person information not found!")
}

//  const getInformation = (req,res)=>{
//      console.log(typeof dashBoard)
//     const foundInformation = dashBoard.filter((elem, i) =>{
//         return i == req.params.id 
//      })

    

//     if(foundInformation.length > 0){
//     res.send(foundInformation[0])
//          return
//      }
//    res.status(404).send("Information not found")
// }



module.exports = {getPersonInformation}
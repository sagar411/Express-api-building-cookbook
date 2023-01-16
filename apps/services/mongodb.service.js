const {MongoClient} = require("mongodb");
const{     DB_URL,DB_NAME} =require("../../config/db.config")
const dbService = ()=>{
    return new Promise( async(res,rej)=>{
        try{
            let client =await MongoClient.connect(DB_URL);
            let db = client.db(DB_NAME);
            res(db);
        }catch(error){
            rej(error);
        }
    })


}


const insertData=  (table,data)=>{
    return new  Promise ((res,rej)=>{
    dbService()
    .then((db)=>{

        db.collection(table)
        .insertOne(data,(err,ack)=>{
            if(err){
                rej(err);
            }else{
                res(data);
                
            }
        })
    })
    .catch((err)=>{
        rej(err )
        
    })
    })

    

}
const fetchData =()=>{
    
}
const updateData=()=>{

}
const deleteData=()=>{
    
} 

module.exports = {
    dbService,
    insertData
}
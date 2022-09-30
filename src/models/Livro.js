import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
    {
        id:{type:String},
        titulo:{type:String,requerid:true},
        autor:{type:String, requerid:true},
        editora:{type:String, requerid:true},
        numeroPaginas:{type:Number}
    }
);
 
const livros = mongoose.model('livros',livroSchema);

export default livros;
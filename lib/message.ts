import mongoose, {Schema,models,model, SchemaType} from "mongoose";

const messageSchema = new Schema (
{

    Name : {type:String  , required : true , },
    Email : {type: String , required : true , },
    body : {type :String },
    status : {type:String , enum:["New","Read","Closed"],default:"New"},
    



},{

    timestamps:true

}

)

const Message = models.Message || model('Message' , messageSchema);

export default Message;    
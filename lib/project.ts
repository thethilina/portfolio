import mongoose, {Schema,models,model, SchemaType} from "mongoose";

const projectSchema = new Schema (
{

    projectName : {type:String  , required : true , },
    projectDes : {type: String , required : true , },
    githublink : {type :String },
    category : [{type :String }],
    livelink : {type:String  },
    photo : {type:String  , required : true },
    techs : [{type: String , required: true}],
    photos :[{type: String } ],
    type : {type:String , enum:["Solo","Group"],default:"active"},
    collaborators: [{
        name: { type: String, required: true },
        role: { type: String, required: true },
        linkedinUrl: { type: String },
        portfolioUrl: { type: String }
    }]



},{

    timestamps:true

}

)

const Project = models.Project || model('Project' , projectSchema);

export default Project;
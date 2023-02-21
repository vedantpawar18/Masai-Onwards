const {Schema,model}=require('mongoose');

const OTPSchema=new Schema(
    {
        email:{type:String},
        otp:{type:Number,required:true}
       }
    )

const OTPModel=new model('otp',OTPSchema);

module.exports=OTPModel;
const {Schema,model}=require('mongoose');

const otpSchema=new Schema(
    {
        email:{type:String},
        otp:{type:Number,required:true}
       }
    )

const OtpModel=new model('otp',otpSchema);

module.exports=OtpModel;
// import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import mongoose from 'mongoose';

export const User = new mongoose.Schema({
  first_name: String,
  email: String,
  passwords: String,
  user_status: String,
});

// export default mongoose.model('User', User);


// @Schema()
// export class User extends Document {
//   @Prop()
//   first_name: string;

//   @Prop()
//   email: string;

//   @Prop()
//   passwords: string;

//   @Prop()
//   user_status: string;
// }

// export const UserSchema = SchemaFactory.createForClass(User);
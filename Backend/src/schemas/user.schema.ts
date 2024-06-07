// import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
// import {HydratedDocument} from 'mongoose';

// export type UserDocument = HydratedDocument<User>

// @Schema({collection: 'users', timestamps: true})

// export class User{

//   @Prop()
//   first_name: String

//   @Prop()
//   email: String

//   @Prop()
//   passwords: String

//   @Prop()
//   user_status: String
// }


// export const UserSchema = SchemaFactory.createForClass(User)

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User {
  @Prop()
  email: string;

  @Prop()
  firstname: string;

  @Prop()
  lastname: string;

    @Prop()
  passwords: String

  @Prop()
  user_status: String
}

export const UserSchema = SchemaFactory.createForClass(User);
export type UserDocument = User & Document;
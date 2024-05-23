import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import {HydratedDocument} from 'mongoose';

export type UserDocument = HydratedDocument<User>

@Schema({collection: 'users', timestamps: true})

export class User{

  @Prop()
  first_name: String

  @Prop()
  email: String

  @Prop()
  passwords: String

  @Prop()
  user_status: String
}


export const UserSchema = SchemaFactory.createForClass(User)


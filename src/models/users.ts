import { Document, model, Schema } from 'mongoose';

export interface UserModel extends Document {
  id: number;
  firstName: string;
  username: string;
  lastName?: string;
  isAdmin?: boolean;
}

const userSchema = new Schema<UserModel>({
  id: {
    type: Number,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: false,
  },
  username: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    required: false,
  },
});

export const UsersModel = model('Users', userSchema);

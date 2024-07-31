import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';
import bcrypt from "bcryptjs";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "ATENDENTE",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.pre("save", async function (next) {
  // criptografa a senha antes de salvar no bd
  if (!this.isModified("password")) {
    // se pass não foi modificado
    return next();
  }

  this.password = await bcrypt.hash(this.password, 4);
});

// cria um method comparar a senha informada pelo usuario com a senha cryptografada do bd
UserSchema.methods = {
  compareHash(password) {
    return bcrypt.compare(password, this.password);
  },
};

UserSchema.plugin(mongoosePaginate);
const User = mongoose.model("User", UserSchema);

export default User;

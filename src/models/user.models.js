import mongoose from 'mongoose';
import bcrypt from 'bcrypt'

const { Schema, model } = mongoose;

const usuarioSchema = new Schema({
  nombre: {
    type: String,
    required: true, 
    trim: true      // Elimina espacios en blanco al inicio y final
  },
  email: {
    type: String,
    required: true,
    unique: true,    // El email debe ser único
    trim: true,
    lowercase: true  // Guarda el email en minúsculas
  },
  password: {
    type: String,
    required: true
  },
  fechaCreacion: {
    type: Date,
    default: Date.now 
  }
});

//hash
usuarioSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

const Usuario = model('Usuario', usuarioSchema);

export default Usuario;

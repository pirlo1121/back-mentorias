import mongoose from 'mongoose';

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

const Usuario = model('Usuario', usuarioSchema);

export default Usuario;

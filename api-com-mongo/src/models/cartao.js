const mongoose = require("mongoose");

const musicaSchema = new mongoose.Schema(
    {
        id: mongoose.Schema.Types.ObjectId,
        
        titular: {
            type: string,
            required: true,

        },

        numero: {
            type: string,
            required: true,

        },

        validade: {
            type: Date,
          required: true,

        },

        codigoSeguranca: {
            type: string,
            required: true,
        },

        cpf:{
            type: string,
            required: true,
        },
         
         
    }
)

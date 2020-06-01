const usuarCtrl = {};

const UsuarioF = require('../modelo/usuario');



usuarCtrl.getUsuarios = async (req, res) => {
    const usuario = await UsuarioF.find();
     res.json(usuario);
}
usuarCtrl.postUsu = async (req,res) => {
    //console.log(req.body);
    const { usuario, numIdentif, nomUsuario1, nomUsuario2, Apellido1, Apellido2, pass} = req.body;

    const newUsuarios = new UsuarioF ({
        usuario,
        numIdentif,
        nomUsuario1,
        nomUsuario2,
        Apellido1,
        Apellido2,
        pass
    })

    await newUsuarios.save();
    console.log(newUsuarios) //solo para mostrar por consola no tiene trasendencia en el cargue a la base de datos

    res.json({message: 'Usuario guardado>>'})
}


usuarCtrl.getUsu = async (req,res) => {    // funciona con ID
    const usuar =  await UsuarioF.findById(req.params.id);
    console.log(usuar)
  
    res.json({message: 'Consulta exitosa!'}) 
}

usuarCtrl.putUsu = async (req,res) => {                 // funciona con ID

    const{ usuario, numIdentif, nomUsuario1, nomUsuario2, Apellido1, Apellido2, pass } = req.body;
   await UsuarioF.findByIdAndUpdate(req.params.id, {
        usuario,
        numIdentif,
        nomUsuario1,
        nomUsuario2,
        Apellido1,
        Apellido2,
        pass
        
    })
    console.log(req.params.id, req.body)
        
    res.json({message: 'Usuario actualizado'}) 
}

usuarCtrl.deleteUsu = async (req,res) =>{        // funciona con ID
    await UsuarioF.findByIdAndDelete(req.params.id);
     
    res.json({message: 'Usuario Eliminado'})
}



module.exports = usuarCtrl;
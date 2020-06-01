const estadCtrl = {};

const Estad = require('../modelo/estadistica');



/*estadCtrl.getEstads = (req, res) => {res.json({message: 'tolis get-esiado'});
estadCtrl.postEstad = (req,res) => res.json({message: 'estadistica guardada'})
estadCtrl.getEstad = (req,res) => res.json({message: 'jjkfajklfaljkfalskjd'})
estadCtrl.putEstad = (req,res) => res.json({message: 'estadistica actualizada'})
estadCtrl.deleteEstad =(req,res) => res.json({message: 'estadistica borrada'})*/ //se realizan las pruebas

estadCtrl.getEstads = async (req, res) => {
    const estadist = await Estad.find();
     res.json(estadist);
}
estadCtrl.postEstad = async (req,res) => {
    //console.log(req.body);
    const { titulo, content, nombreJugador, campeonganado, fechaUltmCampeon, author} = req.body;

    const newEstadis = new Estad ({
        titulo: titulo,
        content: content,
        nombreJugador: nombreJugador,
        campeonganado: campeonganado,
        fechaUltmCampeon: fechaUltmCampeon,
        author: author})

    await newEstadis.save();
    console.log(newEstadis) //solo para mostrar por consola no tiene trasendencia en el cargue a la base de datos

    res.json({message: 'estadistica guardada'})
}


estadCtrl.getEstad = async (req,res) => {    // funciona con ID
    const estadi =  await Estad.findById(req.params.id);
    console.log(estadi)
  
    res.json({message: 'Consulta exitosa!'}) 
}

estadCtrl.putEstad = async (req,res) => {                 // funciona con ID

    const{ titulo, content, nombreJugador, campeonganado, fechaUltmCampeon, author } = req.body;
   await Estad.findByIdAndUpdate(req.params.id, {
        titulo: titulo,
        content: content,
        nombreJugador: nombreJugador,
        campeonganado: campeonganado,
        fechaUltmCampeon: fechaUltmCampeon,
        author: author
        
    })
    console.log(req.params.id, req.body)
        
    res.json({message: 'estadistica actualizada'}) 
}

estadCtrl.deleteEstad = async (req,res) =>{        // funciona con ID
    await Estad.findByIdAndDelete(req.params.id);
     
    res.json({message: 'estadistica borrada'})
}



module.exports = estadCtrl;
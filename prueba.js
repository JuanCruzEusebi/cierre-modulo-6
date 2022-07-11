const autos = require("./autos");


const concesionaria = {
    autos: autos,
    buscarAuto: function (patente) {
        for (let auto of autos) {
            if (auto.patente === patente) {
                return auto
            }
        }
        return null;
    }, 
    venderAuto: function (patente) {
        let buscador = this.buscarAuto(patente);
        if (buscador.patente !== null) {
            buscador.vendido = true;
        }
         let nuevoAutos = autos;
         return nuevoAutos;
        
    },
    autosParaLaVenta: function () {
        const filtrador = autos.filter(auto => auto.vendido == false);
        return filtrador;
    },
    autosNuevos: function () {
        let autosParaVenta = this.autosParaLaVenta();
        for (let auto of autosParaVenta) {
            if (auto.km <= 100) {
            return auto
            } else {
                return "ningun auto cumple con los requisitos"
            }
        }      
    }
}

// console.log(concesionaria.buscarAuto("APL123"))
console.log(concesionaria.venderAuto("JJK116"))
// console.log(concesionaria.autosParaLaVenta());
console.log(concesionaria.autosNuevos());


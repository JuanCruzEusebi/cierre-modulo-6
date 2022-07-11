const autos = require("./autos");
const potencialComprador = require("./comprador");


const concesionaria = {
    autos: autos,
    potencialComprador: potencialComprador,
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
        buscador.vendido = true;
        return autos;
    },
    autosParaLaVenta: function () {
        const filtrador = autos.filter(auto => auto.vendido == false);
        return filtrador;
    },
    autosNuevos: function () {
        let autosNuevos = []
        let autosParaVenta = this.autosParaLaVenta();
        for (let auto of autosParaVenta) {
            if (auto.km < 100) {
            autosNuevos.push(auto)                
            }
        }
        return autosNuevos;
    },
    listaDeVentas: function () {
        let precios = []
        for (let auto of autos) {
            if (auto.vendido == true) {
                precios.push(auto.precio)
            } else {
                false;
            }
        }
        return precios;
    },
    totalDeVentas: function () {
        let vendidos = this.listaDeVentas()
        let valorInicial = 0;
        let reducir = vendidos.reduce((valorPrevio, nuevoValor) => valorPrevio + nuevoValor, valorInicial);
        return reducir;
    },
    puedeComprar: function (autoAComprar, potencialComprador) {
        let calculadorCuotas = autoAComprar.precio / autoAComprar.cuotas;
        if (autoAComprar.precio < potencialComprador.capacidadDePagoTotal && calculadorCuotas < potencialComprador.capacidadDePagoEnCuotas) {
            return true
        } else {
            return false
        }
    },
    autosQuePuedeComprar: function (cliente) {
        let mostrarCliente = [];
        let autosParaVenta = this.autosParaLaVenta();
        for (let auto of autosParaVenta) {
            if (this.puedeComprar(auto, cliente)) {
               mostrarCliente.push(auto);
            }                   
        }
       return mostrarCliente;
    }
}

// console.log(concesionaria.buscarAuto("APL123"))
console.log(concesionaria.venderAuto("JJK116"))
//  console.log(concesionaria.autosParaLaVenta())
console.log(concesionaria.autosNuevos());
console.log("--------------------------------------------------")


/*
console.log(concesionaria.listaDeVentas());
console.log(concesionaria.totalDeVentas());
console.log(concesionaria.puedeComprar(autos[0], potencialComprador));
console.log(concesionaria.autosQuePuedeComprar(potencialComprador));
*/

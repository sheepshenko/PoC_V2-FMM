import { createStore } from 'vuex'

export default createStore({
  state: {
    fresa: {
      nombre: 'Fresa',
      img: require('@/assets/img/sabores/fresa.jpg'),
      costo: 80,
      cantidad: 25
    },
    chocolate:{
      nombre: 'Chocolate',
      img: require('@/assets/img/sabores/chocolate.jpg'),
      costo: 80,
      cantidad: 96
    },
    vainilla:{
      nombre: 'Vainilla',
      img: require('@/assets/img/sabores/vainilla.jpg'),
      costo: 80,
      cantidad: 84
    },
    red:{
      nombre: 'Red Velvet',
      img: require('@/assets/img/sabores/red-velvet.jpg'),
      costo: 100,
      cantidad: 40
    },
    limon:{
      nombre: 'Limon',
      img: require('@/assets/img/sabores/limon.jpg'),
      costo: 70,
      cantidad: 69
    },
    coco:{
      nombre: 'Coco',
      img: require('@/assets/img/sabores/coco.jpg'),
      costo: 80,
      cantidad: 55
    },
    cajeta:{
      nombre: 'Cajeta',
      img: require('@/assets/img/sabores/cajeta.jpg'),
      costo: 110,
      cantidad: 41
    },
    naranja:{
      nombre: 'Naranja',
      img: require('@/assets/img/sabores/naranja.jpg'),
      costo: 80,
      cantidad: 62
    },
    nuez:{
      nombre: 'Nuez',
      img: require('@/assets/img/sabores/nuez.jpg'),
      costo: 100,
      cantidad: 34
    },

    fruta:{
      nombre: 'Fruta',
      img: require('@/assets/img/decoraciones/fruta.jpg'),
      costo: 150,
      cantidad: 121
    },
    chocolatedec:{
      nombre: 'Chocolate',
      img: require('@/assets/img/decoraciones/chocolate.jpg'),
      costo: 150,
      cantidad: 234
    },
    dulces:{
      nombre: 'Dulces',
      img: require('@/assets/img/decoraciones/dulces.jpg'),
      costo: 150,
      cantidad: 412
    }
    ,
    flores:{
      nombre: 'Flores',
      img: require('@/assets/img/decoraciones/flores.jpg'),
      costo: 150,
      cantidad: 30
    }
    ,
    fondant:{
      nombre: 'Fondant',
      img: require('@/assets/img/decoraciones/fondant.jpg'),
      costo: 150,
      cantidad: 36
    }
    ,
    galletas:{
      nombre: 'Galletas',
      img: require('@/assets/img/decoraciones/galletas.jpg'),
      costo: 150,
      cantidad: 42
    },
    impresion:{
      nombre: 'Impresion',
      img: require('@/assets/img/decoraciones/impresion.jpg'),
      costo: 150,
      cantidad: 51
    },
    nuezdec:{
      nombre: 'Nuez',
      img: require('@/assets/img/decoraciones/nuez.jpg'),
      costo: 150,
      cantidad: 70
    }
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

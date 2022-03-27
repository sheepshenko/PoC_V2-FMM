<template>
    <div class="pastelero">
        <h1 class="txt-steelblue">Maestro Pastelero</h1>
        <div class="container-fluid">
            <div class="row justify-content-around">
                <div class="col-12 col-sm-3">
                    <h2 class="txt-steelblue text-center text-pastel">Decoraciones</h2>
                    <CantidadSabores/>
                    <CantidadDecoraciones/>
                </div>
                <div class="col-12 col-sm-7">
                    <Pedidos/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import CantidadSabores from '@/components/CantidadSabores.vue'
import CantidadDecoraciones from '@/components/CantidadDecoraciones.vue'
import Pedidos from '@/components/Pedidos.vue'


export default {
  name: 'Pastelero',
  components: {
    CantidadSabores,
    CantidadDecoraciones,
    Pedidos
  }
}
</script>

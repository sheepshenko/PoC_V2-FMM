<template>
  <div class="home">
    <Intro/>
    <Sucursal/>
    <section id="intro" class="box-container bg-yellow">
        <div class="container zindex10">
            <div class="row justify-content-center">
                <Sabores/>
                <Decoraciones/>
            </div>
        </div>
        <div class="cakes-brown"></div>
    </section>
    <Crear/>
  </div>
</template>

<script>
// @ is an alias to /src
import Intro from '@/components/Intro.vue'
import Sucursal from '@/components/Sucursal.vue'
import Crear from '@/components/Crear.vue'
import Sabores from '@/components/Sabores.vue'
import Decoraciones from '@/components/Decoraciones.vue'

export default {
  name: 'HomeView',
  components: {
    Intro,
    Sucursal,
    Crear,
    Sabores,
    Decoraciones
  }
}
</script>

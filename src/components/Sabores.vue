<template>
    <div class="col-12 col-sm-6 bg-turquesa">
        <div class="row pt-5 pb-5">
            <h2 class="txt-steelblue text-center text-pastel">Sabores</h2>
            <div class="col-6 col-sm-3">
                <img :src="$store.state.fresa.img" alt="" class="w-100">
                <h4 class="mt-2 text-center txt-steelblue">{{ $store.state.fresa.nombre }}</h4>
                <h5 class="txt-pink">$ {{ $store.state.fresa.costo}}</h5>
            </div>
            <div class="col-6 col-sm-3">
                <img :src="$store.state.chocolate.img" alt="" class="w-100">
                <h4 class="mt-2 text-center txt-steelblue">{{ $store.state.chocolate.nombre }}</h4>
                <h5 class="txt-pink">$ {{ $store.state.chocolate.costo}}</h5>
            </div>
            <div class="col-6 col-sm-3">
                <img :src="$store.state.vainilla.img" alt="" class="w-100">
                <h4 class="mt-2 text-center txt-steelblue">{{ $store.state.vainilla.nombre }}</h4>
                <h5 class="txt-pink">$ {{ $store.state.vainilla.costo}}</h5>
            </div>
            <div class="col-6 col-sm-3">
                <img :src="$store.state.red.img" alt="" class="w-100">
                <h4 class="mt-2 text-center txt-steelblue">{{ $store.state.red.nombre }}</h4>
                <h5 class="txt-pink">$ {{ $store.state.red.costo}}</h5>
            </div>
            
            <div class="col-6 col-sm-3">
                <img :src="$store.state.limon.img" alt="" class="w-100">
                <h4 class="mt-2 text-center txt-steelblue">{{ $store.state.limon.nombre }}</h4>
                <h5 class="txt-pink">$ {{ $store.state.limon.costo}}</h5>
            </div>
            <div class="col-6 col-sm-3">
                <img :src="$store.state.coco.img" alt="" class="w-100">
                <h4 class="mt-2 text-center txt-steelblue">{{ $store.state.coco.nombre }}</h4>
                <h5 class="txt-pink">$ {{ $store.state.coco.costo}}</h5>
            </div>
            <div class="col-6 col-sm-3">
                <img :src="$store.state.cajeta.img" alt="" class="w-100">
                <h4 class="mt-2 text-center txt-steelblue">{{ $store.state.cajeta.nombre }}</h4>
                <h5 class="txt-pink">$ {{ $store.state.cajeta.costo}}</h5>
            </div>
            <div class="col-6 col-sm-3">
                <img :src="$store.state.naranja.img" alt="" class="w-100">
                <h4 class="mt-2 text-center txt-steelblue">{{ $store.state.naranja.nombre }}</h4>
                <h5 class="txt-pink">$ {{ $store.state.naranja.costo}}</h5>
            </div>

            <div class="col-6 col-sm-3">
                <img :src="$store.state.nuez.img" alt="" class="w-100">
                <h4 class="mt-2 text-center txt-steelblue">{{ $store.state.nuez.nombre }}</h4>
                <h5 class="txt-pink">$ {{ $store.state.nuez.costo}}</h5>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Sabores'
}
</script>

<style scoped>
.btn-crear{
    border-radius: 5%;
    background-color: #f4cfdf;
    color: #5784ba;
    font-family: 'Lobster', cursive;
    font-size: 1.3rem;
    display: table;
    margin: auto;
}
img{
    border-radius: 15px;
    box-shadow: 3px 3px 5px grey;
}
</style>
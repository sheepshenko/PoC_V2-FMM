<template>
    <div class="col-12 col-sm-6 bg-linen">
        <div class="row pt-5 pb-5">
            <h2 class="txt-steelblue text-center text-pastel">Decoraciones</h2>
            <div class="col-6 col-sm-3">
                <img :src="$store.state.chocolatedec.img" alt="" class="w-100">
                <h4 class="mt-2 text-center txt-steelblue">{{ $store.state.chocolatedec.nombre }}</h4>
                <h5 class="txt-pink">$ {{ $store.state.chocolatedec.costo}}</h5>
            </div>
            <div class="col-6 col-sm-3">
                <img :src="$store.state.dulces.img" alt="" class="w-100">
                <h4 class="mt-2 text-center txt-steelblue">{{ $store.state.dulces.nombre }}</h4>
                <h5 class="txt-pink">$ {{ $store.state.dulces.costo}}</h5>
            </div>
            <div class="col-6 col-sm-3">
                <img :src="$store.state.flores.img" alt="" class="w-100">
                <h4 class="mt-2 text-center txt-steelblue">{{ $store.state.flores.nombre }}</h4>
                <h5 class="txt-pink">$ {{ $store.state.flores.costo}}</h5>
            </div>
            <div class="col-6 col-sm-3">
                <img :src="$store.state.fondant.img" alt="" class="w-100">
                <h4 class="mt-2 text-center txt-steelblue">{{ $store.state.fondant.nombre }}</h4>
                <h5 class="txt-pink">$ {{ $store.state.fondant.costo}}</h5>
            </div>
            
            <div class="col-6 col-sm-3">
                <img :src="$store.state.fruta.img" alt="" class="w-100">
                <h4 class="mt-2 text-center txt-steelblue">{{ $store.state.fruta.nombre }}</h4>
                <h5 class="txt-pink">$ {{ $store.state.fruta.costo}}</h5>
            </div>
            <div class="col-6 col-sm-3">
                <img :src="$store.state.galletas.img" alt="" class="w-100">
                <h4 class="mt-2 text-center txt-steelblue">{{ $store.state.galletas.nombre }}</h4>
                <h5 class="txt-pink">$ {{ $store.state.galletas.costo}}</h5>
            </div>
            <div class="col-6 col-sm-3">
                <img :src="$store.state.impresion.img" alt="" class="w-100">
                <h4 class="mt-2 text-center txt-steelblue">{{ $store.state.impresion.nombre }}</h4>
                <h5 class="txt-pink">$ {{ $store.state.impresion.costo}}</h5>
            </div>
            <div class="col-6 col-sm-3">
                <img :src="$store.state.nuezdec.img" alt="" class="w-100">
                <h4 class="mt-2 text-center txt-steelblue">{{ $store.state.nuezdec.nombre }}</h4>
                <h5 class="txt-pink">$ {{ $store.state.nuezdec.costo}}</h5>
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
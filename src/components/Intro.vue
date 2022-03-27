<template>
    <section id="intro" class="box-container bg-yellow">
        <div class="container zindex10">
            <div class="row justify-content-center">
                <div class="col-12 col-sm-6">
                    <img src="../assets/img/PoC-logo.png" class="w-75 p-5" alt="Logo">
                </div>
                <div class="col-12 col-sm-6 pt-5">
                    <h1 class="text-pastel text-center txt-steelblue pt-5">¡Bienvenid@!</h1>
                    <p class="text-regular text-center mt-4">Somos una pastelería dedicada a la creación de sueños y los convertimos en pasteles. <br>
                    Aquí podrás crear de cero tu pastel ideal, con los ingredientes y sabores que más te gusten. 
                    </p>
                    <a href="#crear" class="btn btn-crear">Crea tu Pastel</a>
                </div>
            </div>
        </div>
        <div class="cakes-brown"></div>
    </section>
</template>

<script>
export default {
    name: 'Intro'
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
</style>
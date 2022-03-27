<template>
  <!-- As a heading -->
  <nav class="navbar navbar-expand-lg navbar-light bg-bluelight">
    <div class="container">
      <a class="navbar-brand poc-tittle" href="#">Piece of Cake</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item me-5">
            <router-link class="txt-steelblue" to="/">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link class="txt-steelblue" to="/pastelero">Pastelero</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inspiration&family=Lobster&display=swap');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.text-pastel{
    font-family: 'Lobster', cursive;
}

.text-regular{
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
}

.poc-tittle{
  font-family: 'Inspiration', cursive;
  font-size: 2rem;
  color: #5784BA!important;
}

.bg-bluelight{
  background-color: #CEE3EF;
}

.bg-yellow{
    background-color: #F7F6CF;
}
.bg-turquesa{
    background-color: #b6d8f2;
}
.bg-linen{
    background-color: #f4cfdf;
}
.bg-steelblue{
    background-color: #5784ba;
}
.bg-sky{
    background-color: #9ac8eb;
}

.txt-pink{
  color: #EFA8CA!important;
}
.txt-marino{
  color: #2c3e50!important;
}

.txt-steelblue{
    color: #5784ba;
}

.txt-yellow{
    color: #F7F6CF;
}
.txt-turquesa{
    color: #b6d8f2;
}
.txt-linen{
    color: #f4cfdf;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  text-decoration: none;
}

nav a.router-link-exact-active {
  /* color: #f144e9; */
  color: #30c573;
  text-decoration: none;
}

.box-container{
    position: relative;
    overflow: hidden;
}

.zindex10{
    z-index: 10;
    position: relative;
}

.bg-yellow{
    background-color: #F7F6CF;
}

.bg-linen{
    background-color: #f4cfdf;
}

.bg-steelblue{
    background-color: #5784ba;
}

.cakes-brown{
    position: absolute;
    background-image: url(./assets/img/bg-brown.png);
    top: 0;
    background-size: contain;
    width: 100%;
    height: 90vh;
    opacity: .2;
    z-index: 1;
}

.cakes-yellow{
    position: absolute;
    background-image: url(./assets/img/bg-yellow.png);
    top: 0;
    background-size: contain;
    width: 100%;
    height: 90vh;
    opacity: .2;
    z-index: 1;
}

.admin-body{
    background-image: url(./assets/img/bg-brown.png);
}
</style>

<template>
    <section id="crear" class="bg-steelblue box-container">
<div class="container zindex10">
            <div class="row pt-5">
                <div class="col-12">
                    <h2 class="text-center text-pastel txt-linen">Crea Tu Pastel</h2>
                </div>
            </div>
            <form action="" method="post">
                <div class="row justify-content-around pt-4">
                    <div class="col-12 col-sm-5">
                        <div class="mb-3">
                            <label for="NombreCliente" class="form-label txt-yellow text-regular">Nombre Completo</label>
                            <input type="text" class="form-control" id="NombreCliente" name="NombreCliente">
                        </div>
                        <div class="mb-3">
                            <label for="telefono" class="form-label txt-yellow text-regular">Teléfono</label>
                            <input type="number" class="form-control" id="telefono" name="telefono">
                        </div>
                        <div class="mb-3">
                            <label for="correo" class="form-label txt-yellow text-regular">Correo Electrónico</label>
                            <input type="number" class="form-control" id="correo" name="correo">
                        </div>
                        <div class="mb-3">
                            <label for="descripcion" class="form-label txt-yellow text-regular w-100">Descripción</label>
                            <textarea name="descripcion" id="descripcion" class="textarea" rows="10" cols="50"></textarea>
                        </div>
                    </div>
                    <div class="col-12 col-sm-5">
                        <div class="form-box bg-sky mt-4">
                            <h5 class="txt-yellow text-regular">Selecciona los sabores:</h5>
                            <div class="row">
                                <div class="col-6">
                                    <div class="form-check form-switch">
                                        <input class="form-check-input" type="checkbox" role="switch" id="sabor1" name="sabor1" value="Fresa">
                                        <label class="form-check-label" for="sabor1">Fresa  +$100</label>
                                    </div>
                                    <div class="form-check form-switch">
                                        <input class="form-check-input" type="checkbox" role="switch" id="sabor2" name="sabor2" value="Chocolate">
                                        <label class="form-check-label" for="sabor2">Chocolate  +$100</label>
                                    </div>
                                    <div class="form-check form-switch">
                                        <input class="form-check-input" type="checkbox" role="switch" id="sabor3" name="sabor3" value="Vainilla">
                                        <label class="form-check-label" for="sabor3">Vainilla  +$100</label>
                                    </div>
                                    <div class="form-check form-switch">
                                        <input class="form-check-input" type="checkbox" role="switch" id="sabor4" name="sabor4" value="Red Velvet">
                                        <label class="form-check-label" for="sabor4">Red Velvet  +$100</label>
                                    </div>
                                    <div class="form-check form-switch">
                                        <input class="form-check-input" type="checkbox" role="switch" id="sabor5" name="sabor5" value="Limón">
                                        <label class="form-check-label" for="sabor5">Limón  +$100</label>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-check form-switch">
                                        <input class="form-check-input" type="checkbox" role="switch" id="sabor6" name="sabor6" value="Coco">
                                        <label class="form-check-label" for="sabor6">Coco  +$100</label>
                                    </div>
                                    <div class="form-check form-switch">
                                        <input class="form-check-input" type="checkbox" role="switch" id="sabor7" name="sabor7" value="Chocolate Amargo">
                                        <label class="form-check-label" for="sabor7">Chocolate Amargo  +$100</label>
                                    </div>
                                    <div class="form-check form-switch">
                                        <input class="form-check-input" type="checkbox" role="switch" id="sabor8" name="sabor8" value="Cajeta">
                                        <label class="form-check-label" for="sabor8">Cajeta  +$100</label>
                                    </div>
                                    <div class="form-check form-switch">
                                        <input class="form-check-input" type="checkbox" role="switch" id="sabor9" name="sabor9" value="Naranja">
                                        <label class="form-check-label" for="sabor9">Naranja  +$100</label>
                                    </div>
                                    <div class="form-check form-switch">
                                        <input class="form-check-input" type="checkbox" role="switch" id="sabor10" name="sabor10" value="Nuez">
                                        <label class="form-check-label" for="sabor10">Nuez  +$100</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="form-box bg-sky mt-5">
                            <h5 class="txt-linen text-regular">Selecciona las decoraciones:</h5>
                            <div class="row">
                                <div class="col-6">
                                    <div class="form-check form-switch">
                                        <input class="form-check-input" type="checkbox" role="switch" id="deco1" name="deco1" value="Fruta">
                                        <label class="form-check-label" for="deco1">Fresa  +$50</label>
                                    </div>
                                    <div class="form-check form-switch">
                                        <input class="form-check-input" type="checkbox" role="switch" id="deco2" name="deco2" value="Chocolate">
                                        <label class="form-check-label" for="deco2">Chocolate  +$50</label>
                                    </div>
                                    <div class="form-check form-switch">
                                        <input class="form-check-input" type="checkbox" role="switch" id="deco3" name="deco3" value="Nueces">
                                        <label class="form-check-label" for="deco3">Nueces  +$50</label>
                                    </div>
                                    <div class="form-check form-switch">
                                        <input class="form-check-input" type="checkbox" role="switch" id="deco4" name="deco4" value="Fondant">
                                        <label class="form-check-label" for="deco4">Fondant  +$100</label>
                                    </div>
                                    <div class="form-check form-switch">
                                        <input class="form-check-input" type="checkbox" role="switch" id="deco5" name="deco5" value="Flores">
                                        <label class="form-check-label" for="deco5">Flores  +$150</label>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-check form-switch">
                                        <input class="form-check-input" type="checkbox" role="switch" id="deco6" name="deco6" value="Impresión">
                                        <label class="form-check-label" for="deco6">Impresión  +$150</label>
                                    </div>
                                    <div class="form-check form-switch">
                                        <input class="form-check-input" type="checkbox" role="switch" id="deco7" name="deco7" value="Dulces">
                                        <label class="form-check-label" for="deco7">Dulces  +$50</label>
                                    </div>
                                    <div class="form-check form-switch">
                                        <input class="form-check-input" type="checkbox" role="switch" id="deco8" name="deco8" value="Galletas">
                                        <label class="form-check-label" for="deco8">Galletas  +$80</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <input type="submit" class="btn btn-crear mt-5" value="Envia Pedido">
                    </div>
                </div>
            </form>
        </div>
        <div class="cakes-yellow"></div>
    </section>
</template>

<script>
export default {
    name: 'Crear'
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
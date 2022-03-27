<template>
    <table class="table table-success">
        <thead>
            <tr>
                <th scope="col">Sabor</th>
                <th scope="col">Cantidad</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{{ $store.state.fresa.nombre}}</td>
                <td>{{$store.state.fresa.cantidad}}</td>
            </tr>
            <tr>
                <td>{{ $store.state.chocolate.nombre}}</td>
                <td>{{$store.state.chocolate.cantidad}}</td>
            </tr>
            <tr>
                <td>{{ $store.state.vainilla.nombre}}</td>
                <td>{{$store.state.vainilla.cantidad}}</td>
            </tr>
            <tr>
                <td>{{ $store.state.red.nombre}}</td>
                <td>{{$store.state.red.cantidad}}</td>
            </tr>
            <tr>
                <td>{{ $store.state.limon.nombre}}</td>
                <td>{{$store.state.limon.cantidad}}</td>
            </tr>
            <tr>
                <td>{{ $store.state.coco.nombre}}</td>
                <td>{{$store.state.coco.cantidad}}</td>
            </tr>
            <tr>
                <td>{{ $store.state.cajeta.nombre}}</td>
                <td>{{$store.state.cajeta.cantidad}}</td>
            </tr>
            <tr>
                <td>{{ $store.state.naranja.nombre}}</td>
                <td>{{$store.state.naranja.cantidad}}</td>
            </tr>
            <tr>
                <td>{{ $store.state.nuez.nombre}}</td>
                <td>{{$store.state.nuez.cantidad}}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    name: 'CantidadSabores'
}
</script>

<style scoped>

</style>
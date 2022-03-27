<template>
    <table class="table table-danger">
        <thead>
            <tr>
                <th scope="col">Decoraciones</th>
                <th scope="col">Cantidad</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{{ $store.state.dulces.nombre}}</td>
                <td>{{$store.state.dulces.cantidad}}</td>
            </tr>
            <tr>
                <td>{{ $store.state.chocolate.nombre}}</td>
                <td>{{$store.state.chocolate.cantidad}}</td>
            </tr>
            <tr>
                <td>{{ $store.state.flores.nombre}}</td>
                <td>{{$store.state.flores.cantidad}}</td>
            </tr>
            <tr>
                <td>{{ $store.state.fondant.nombre}}</td>
                <td>{{$store.state.fondant.cantidad}}</td>
            </tr>
            <tr>
                <td>{{ $store.state.fruta.nombre}}</td>
                <td>{{$store.state.fruta.cantidad}}</td>
            </tr>
            <tr>
                <td>{{ $store.state.galletas.nombre}}</td>
                <td>{{$store.state.galletas.cantidad}}</td>
            </tr>
            <tr>
                <td>{{ $store.state.impresion.nombre}}</td>
                <td>{{$store.state.impresion.cantidad}}</td>
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
    name: 'CantidadDecoraciones'
}
</script>

<style scoped>

</style>
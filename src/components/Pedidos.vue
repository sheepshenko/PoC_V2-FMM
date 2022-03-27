<template>
    <table class="table">
        <thead class="table-light">
            <tr>
                <th># Pedido</th>
                <th>Nombre del Cliente</th>
                <th>Estado del Pedido</th>
                <th>Fecha de Entrega</th>
                <th>Detalle</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>30</td>
                <td>Fernando Medina</td>
                <td class="bg-verde">Pagado</td>
                <td>05-03-2022</td>
                <td><a href="#!" class="btn" data-bs-toggle="modal" data-bs-target="#detalle-pastel"><img src="@/assets/img/scanning.gif" alt="Detalle" class="detalle-icon"></a></td>
            </tr>
            <tr>
                <td>31</td>
                <td>Gerardo Gonzalez</td>
                <td class="bg-rojo">Pago Pendiente</td>
                <td>23-03-2022</td>
                <td><a href="#!" class="btn" data-bs-toggle="modal" data-bs-target="#detalle-pastel"><img src="@/assets/img/scanning.gif" alt="Detalle" class="detalle-icon"></a></td>
            </tr>

            <tr>
                <td>32</td>
                <td>Monse Martínez</td>
                <td class="">Entregado</td>
                <td>23-03-2022</td>
                <td><a href="#!" class="btn" data-bs-toggle="modal" data-bs-target="#detalle-pastel"><img src="@/assets/img/scanning.gif" alt="Detalle" class="detalle-icon"></a></td>
            </tr>

            <tr>
                <td>33</td>
                <td>Rocio Perez</td>
                <td class="bg-rojo">Pago Pendiente</td>
                <td>23-03-2022</td>
                <td><a href="#!" class="btn" data-bs-toggle="modal" data-bs-target="#detalle-pastel"><img src="@/assets/img/scanning.gif" alt="Detalle" class="detalle-icon"></a></td>
            </tr>

            <tr>
                <td>34</td>
                <td>Laura Landa</td>
                <td class="bg-rojo">Pago Pendiente</td>
                <td>23-03-2022</td>
                <td><a href="#!" class="btn" data-bs-toggle="modal" data-bs-target="#detalle-pastel"><img src="@/assets/img/scanning.gif" alt="Detalle" class="detalle-icon"></a></td>
            </tr>

            <tr>
                <td>35</td>
                <td>Manuel Gonzalez</td>
                <td class="bg-verde">Pagado</td>
                <td>23-03-2022</td>
                <td><a href="#!" class="btn" data-bs-toggle="modal" data-bs-target="#detalle-pastel"><img src="@/assets/img/scanning.gif" alt="Detalle" class="detalle-icon"></a></td>
            </tr>

            <tr>
                <td>36</td>
                <td>Lizzette Díaz</td>
                <td class="bg-verde">Pagado</td>
                <td>23-03-2022</td>
                <td><a href="#!" class="btn" data-bs-toggle="modal" data-bs-target="#detalle-pastel"><img src="@/assets/img/scanning.gif" alt="Detalle" class="detalle-icon"></a></td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    name: 'Pedidos'
}
</script>

<style scoped>
.detalle-icon{
    width: 35px;
}
</style>
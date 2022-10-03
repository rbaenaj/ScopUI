<script setup>
    import { ref } from 'vue'
    const props = defineProps({
        intervention: Object
    })
    const expanderDisplay = ref('none')
    function toggleExpander() { expanderDisplay.value = expanderDisplay.value == 'none' ? 'block' : 'none'; }
</script>
<template>
    <div class="item_pad">
        <div style="margin-right: 50px;">
            <div class="small_title_gray"><font-awesome-icon :icon="['fas', 'fa-chevron-circle-right']" size="xs" style="margin-right: 2px;"/>{{ intervention.ambito }}</div>
            <div class="main_small_title_gray">{{ intervention.nombre }}</div>
        </div>
        <div style="display: flex; flex-direction: column; position: absolute; right: 22px; top: 10%; bottom: 10%;">
            <td class="bar_micro_craddle" style="margin: 1px;">
                <div class="bar_indicator" v-bind:style="{ backgroundColor: (Math.abs(intervention.rendimientoTP) < intervention.desviacionMaxima? '#6176D4' : intervention.rendimiento > 1? 'darkgreen' :'firebrick'), width: (intervention.gastoTP > 100? 100 : intervention.gastoTP) + '%' }">&nbsp;</div>
            </td>
            <td class="bar_micro_craddle" style="margin: 1px;">
                <div class="bar_indicator" v-bind:style="{ backgroundColor: (intervention.velocidadTP < -intervention.desviacionMaxima? 'firebrick' : intervention.velocidadTP > intervention.desviacionMaxima? 'darkgreen' : '#6176D4'), width: (intervention.diasConsumidosTP > 100? 100 : intervention.diasConsumidosTP) + '%' }">&nbsp;</div>
            </td>
            <td class="bar_micro_craddle" style="margin: 1px;">
                <div class="bar_indicator" v-bind:style="{ backgroundColor: (intervention.desviacion < -intervention.desviacionMaxima? 'firebrick' : (intervention.desviacion > intervention.desviacionMaxima? 'darkgreen' : '#6176D4')), width: (intervention.progresoTP > 100? 100 : intervention.progresoTP) + '%' }">&nbsp;</div>
            </td>
        </div>
        <div style="display: flex; flex-direction: column; position: absolute; right: 4px; top: 10%; bottom: 10%;">
            <font-awesome-icon style="margin:1; opacity: .4; height: 16px;" :icon="['fas', 'fa-euro-sign']"/>
            <font-awesome-icon style="margin:1; opacity: .4; height: 16px;" :icon="['far', 'fa-clock']"/>
            <font-awesome-icon style="margin:1; opacity: .4; height: 16px;" :icon="['fas', 'fa-power-off']"/>
        </div>
    </div>
</template>

<style>
/* PAD */
.item_pad {
    display:block;
    max-width: 380px;
    min-height: 50px;
    border-collapse: collapse;
    border-radius: 4px;
    padding: 8px;
    margin: 0 6px 6px 0;
    background-color: white;
    background-image: -moz-linear-gradient( 90deg, rgb(241,241,241) 0%, rgb(255,255,255) 100%);
    background-image: -webkit-linear-gradient( 90deg, rgb(241,241,241) 0%, rgb(255,255,255) 100%);
    background-image: -ms-linear-gradient( 90deg, rgb(241,241,241) 0%, rgb(255,255,255) 100%);
    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.3);
    position: relative;
    left: 0px;
    z-index: 2;
}

.bar_micro_craddle {
    position: relative;
    box-shadow: 0 4px 4px 0px rgba(0, 0, 0, 0.3) inset;
    background-color: darkgray;
    height: 17px; 
    width: 40px;
}

.small_title_gray {
    font-size: 17px;
    text-align: left;
    font-family: "Arial Narrow", Arial, Helvetica, sans-serif;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-weight: bold;
    color: #00000066;
}
.main_small_title_gray {
    font-size: 18px;
    text-align: left;
    font-family: "Arial Narrow", Arial, Helvetica, sans-serif;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
}

.bar_indicator {
    position: absolute;
    box-shadow: 0 2px 2px 0px rgba(0, 0, 0, 0.3) inset;
    top: 0px;
    bottom: 0px;
    left: 0px;
    border-right: 1px solid white;
}
</style>
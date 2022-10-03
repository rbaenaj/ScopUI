<script setup>
    import { ref } from 'vue'
    const props = defineProps({
        intervention: Object
    })

    const expanderDisplay = ref('none')

    function toggleExpander() {
        expanderDisplay.value = expanderDisplay.value == 'none' ? 'block' : 'none';
    }

</script>
<template>
    <div class="nodex">
        <div class="header_tab">
            <font-awesome-icon :icon="['fas', 'fa-chevron-circle-right']"/>
            [{{ intervention.codigo }}]
            <spam>{{ intervention.bloqueFuncional }}</spam>
        </div>
        <div class="node_pad">
            <div class="header_dependencies">
                <font-awesome-icon :icon="['fas', 'fa-upload']" size="xs"/>00
                <font-awesome-icon style="color:firebrick" :icon="['fas', 'fa-download']" size="xs"/>00&nbsp;
            </div>
            <div class="pad_header">
                <div class="medium_title_gray">{{ intervention.ambito }}</div>
                <div class="main_title_gray">{{ intervention.nombre }}</div>
            </div>
            <div class="pad_lowleft_corner">
                <font-awesome-icon class="pad_lowleft_icon" :icon="['fas', 'fa-caret-down']" size="xl"/>
            </div>
            <div class="info_table">
                <table>
                    <tbody>
                        <tr>
                            <th class="info_table_col1">
                                <font-awesome-icon class="info_table_icon" :icon="['fas', 'fa-euro-sign']"/>
                            </th>
                            <td class="info_table_td" v-bind:style="{ color: (intervention.gastoTP > 100? 'firebrick' : '') }">{{ parseFloat(intervention.gastoTP).toFixed(0) }}&#x25;</td>
                            <td class="bar_craddle bar_width">
                                <div class="bar_indicator" v-bind:style="{ backgroundColor: (Math.abs(intervention.rendimientoTP) < intervention.desviacionMaxima? '#6176D4' : intervention.rendimiento > 1? 'darkgreen' :'firebrick'), width: (intervention.gastoTP > 100? 100 : intervention.gastoTP) + '%' }">&nbsp;</div>
                                <div class="bar_overflow" v-bind:style="{ width: (intervention.gastoTP > 100? (intervention.gastoTP - 100) / intervention.gastoTP * 100 : 0) + '%' }">&nbsp;</div>
                            </td>
                            <td class="bar_craddle" style="background-color: #888;">
                                <div class="bar_vindicator" v-bind:style="{ height: (Math.abs(intervention.rendimientoTP) * 100) + '%', backgroundColor: intervention.rendimientoTP < 0? 'firebrick' : 'darkgreen' }"></div>
                                <div class="info_vtext">
                                    <spam>{{ (Math.abs(intervention.rendimientoTP) == 1? '!!' : Math.round(intervention.rendimientoTP * 100)) }}</spam>
                                </div>
                            </td>
                            <td class="info_table_td">{{ intervention.gasto.toFixed(0) }}&euro;</td>
                            <td class="info_table_td">{{ intervention.presupuesto.toFixed(0) }}&euro;</td>
                            <td class="info_table_td">&nbsp;</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <th class="info_table_col1">
                                <font-awesome-icon class="info_table_icon" :icon="['far', 'fa-clock']"/>
                                <i class="far fa-clock info_table_icon"></i>
                            </th>
                            <td class="info_table_td" v-bind:style="{ color: (intervention.gastoTP > 100? 'firebrick' : '') }">{{ parseFloat(intervention.diasConsumidosTP).toFixed(0) }}&#x25;</td>
                            <td class="bar_craddle bar_width">
                                <div class="bar_indicator" v-bind:style="{ backgroundColor: (intervention.velocidadTP < -intervention.desviacionMaxima? 'firebrick' : intervention.velocidadTP > intervention.desviacionMaxima? 'darkgreen' : '#6176D4'), width: (intervention.diasConsumidosTP > 100? 100 : intervention.diasConsumidosTP) + '%' }">&nbsp;</div>
                                <div class="bar_overflow" v-bind:style="{ width: (intervention.diasConsumidosTP > 100? (intervention.diasConsumidosTP - 100) / intervention.diasConsumidosTP * 100 : 0) + '%' }">&nbsp;</div>
                            </td>
                            <td class="bar_craddle" style="background-color: #888;">
                                <div class="bar_vindicator" v-bind:style="{ height: (Math.abs(intervention.velocidadTP) * 100) + '%', backgroundColor: intervention.velocidad < 1? 'firebrick' : 'darkgreen' }"></div>
                                <div class="info_vtext">
                                    <spam>{{ (Math.abs(intervention.velocidadTP) == 1? '!!' : Math.round(intervention.velocidadTP * 100)) }}</spam>
                                </div>
                            </td>
                            <td class="info_table_td">{{ intervention.diasConsumidosPositivos }}d&iacute;as</td>
                            <td class="info_table_td">{{ intervention.diasTotales }}d&iacute;as</td>
                            <td class="info_table_td">&nbsp;</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr class="info_table_foot">
                            <th @click="toggleExpander" style="cursor: pointer;"></th>
                            <td colspan="2">CONSUMO</td>
                            <td>R</td>
                            <td>ACTUAL</td>
                            <td>PREVISTO</td>
                            <td colspan="2" class="ring_column">PROGRESO</td>
                        </tr>
                    </tbody>
                </table>
                <!-- rangos rojo - azul - verde? -->
                <div class="ring_indicator" 
                v-bind:style="{ background: 'conic-gradient( ' + (intervention.desviacion < -intervention.desviacionMaxima? 'firebrick' : (intervention.desviacion > intervention.desviacionMaxima? 'darkgreen' : '#6176D4')) + ' 0deg ' + 360 * intervention.progreso + 'deg, darkgray ' + 360 * intervention.progreso + 'deg 360deg )' }">
                    <div class="ring_indicator_hole" v-bind:style="{ color: (intervention.desviacion < -intervention.desviacionMaxima? 'firebrick' : (intervention.desviacion > intervention.desviacionMaxima? 'darkgreen' : '#6176D4')) }">
                        {{ parseFloat(intervention.progresoTP).toFixed(0) }}<span class="ring_indicator_percent">&#x25;</span>
                        <!-- <font-awesome-icon class="ring_icon" :icon="['fas', 'fa-power-off']"/> -->
                    </div>
                </div>
            </div>
        </div>
        <div class="pad_expander" :style="{ 'display': expanderDisplay, 'textAlign': 'left' }">
            <div style="padding: 10px;">
                <br />
                <b>&aacute;rea de informaci&oacute;n extendida</b>
                <br />
                <br />
                progreso:{{intervention.progreso.toFixed(2)}}
                <br />
                progresoTP:{{intervention.progresoTP.toFixed(2)}}%
                <br />
                <br />
                presupuesto:{{intervention.presupuesto.toFixed(2)}}&euro;
                <br />
                gasto:{{intervention.gasto.toFixed(2)}}&euro;
                <br />
                gastoTP:{{intervention.gastoTP.toFixed(2)}}%
                <br />
                rendimiento:{{intervention.rendimiento.toFixed(2)}} ({{intervention.rendimientoTP.toFixed(2)}}%) = ProgresoTP / GastoTP
                <br />
                rendimientoTP:{{intervention.rendimientoTP.toFixed(2)}}% ( Rendimiento - 1 )
                <br />
                <br />
                velocidad:<b>{{intervention.velocidad.toFixed(2)}}</b> = ProgresoTP / DiasConsumidosTP
                <br />
                velocidadTP:{{intervention.velocidadTP.toFixed(2)}}%
                <br />
                diasTotales:{{intervention.diasTotales}}d&iacute;as
                <br />
                diasConsumidos:{{intervention.diasConsumidos}}d&iacute;as
                <br />
                diasConsumidosTP:{{intervention.diasConsumidosTP.toFixed(2)}}%
                <br />
                diasConsumidosPositivos:{{intervention.diasConsumidosPositivos}}d&iacute;as
                <br />
                <br />
                desviacionMaxima = {{intervention.desviacionMaxima}}
                <br />
                Desviación: ({{intervention.rendimientoTP.toFixed(2)}} | ${{intervention.velocidadTP.toFixed(2)}}) {{intervention.desviacion.toFixed(2)}} 
                <br/>
                .desviacion &lt; -.desviacionMaxima? 'firebrick'
                <br />
                <br />
                rendimientoTP:{{intervention.rendimientoTP.toFixed(2)}}% ( Rendimiento - 1 )
                <br />
                velocidadTP:{{intervention.velocidadTP.toFixed(2)}}%
                <br />
            </div>
        </div>
    </div>
</template>

<style>
.nodex {
    margin: 0px 0px 10px 0px;
}
.header_tab {
    max-width: 380px;
    border-width: 0px;
    border-collapse: collapse;
    border-top-left-radius: 6px;
    border-top-right-radius: 40px;
    background-color: #6176D4;
    color: white;
    font-family: "Arial Narrow", Arial, Helvetica, sans-serif;
    font-weight: bold;
    height: 35px;
    padding: 5px 30px 0px 8px;
    position: absolute;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    z-index: 1;
}
.header_dependencies {
    font-family: "Arial Narrow", Arial, Helvetica, sans-serif;
    font-size: 22px;
    font-weight: bold;
    text-shadow: 0 0 3px white, 0 0 3px white;
    position: absolute;
    top: -27px;
    right: 0px;
    color: #6176D4;
}


/* PAD */
.node_pad {
    display:block;
    max-width: 380px;
    border-collapse: collapse;
    border-radius: 10px;   
    padding: 0px;
    margin-bottom:38px; /* header_tab.height + pad shadow */
    background-color: white;
    background-image: -moz-linear-gradient( 90deg, rgb(241,241,241) 0%, rgb(255,255,255) 100%);
    background-image: -webkit-linear-gradient( 90deg, rgb(241,241,241) 0%, rgb(255,255,255) 100%);
    background-image: -ms-linear-gradient( 90deg, rgb(241,241,241) 0%, rgb(255,255,255) 100%);
    box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.3);
    position: relative;
    left: 0px;
    top: 28px;
    z-index: 2;
}
.pad_header {
    padding: 8px;
}
.pad_expander {
    width: 100%;
    max-width: 380px;
    border-width: 0px;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    color: #FFFFFF66;
    font-family: "Arial Narrow", Arial, Helvetica, sans-serif;
    background-color: #6176D4;
    background-image: -moz-linear-gradient( 90deg, #4d62c4 0%, #6176D4 100%);
    background-image: -webkit-linear-gradient( 90deg, #4d62c4 0%, #6176D4 100%);
    background-image: -ms-linear-gradient( 90deg, #4d62c4 0%, #6176D4 100%);
    box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.3);
    margin-top: -20px;
    z-index: 1;
}

.medium_title_gray {
    text-align: left;
    font-family: "Arial Narrow", Arial, Helvetica, sans-serif;
    font-weight: bold;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    color: silver;
}
.main_title_gray {
    text-align: left;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
}


.pad_lowleft_corner {
    border-width: 0px;
    border-collapse: collapse;
    border-bottom-left-radius: 10px;
    background-color: #6176D4;
    color: whitesmoke;
    position: absolute;
    bottom: 0px;
    width: 32px;
    height: 20px;
    cursor: pointer;
    z-index: 3;
}

.pad_lowleft_icon {
    position: absolute;
    left: 50%;
    top: 9px;
    transform: translate(-50%,-50%);
    color: #ffffffCC;
}

/* INFO TABLE */
.info_table {
    position: relative;
    margin-left: -2px;
    font-family: "Arial Narrow", Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 20px;
    color: dimgray;
    height: 100%;
    z-index: 4;
}

.info_table_td {
    background-color: gainsboro;
    padding-left: 4px;
    padding-right: 4px;
    text-align: right;
}

.info_table_col1 {
    position: relative;
    color: whitesmoke;
    background-color: #6176D4;
    width: 30px;
}

.info_table_icon {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    color: #ffffffCC;
}

.info_table_foot > td {
    font-size: 14px;
    color: darkgray;
    padding-left: 6px;
    text-align: left;
}

.bar_craddle {
    position: relative;
    box-shadow: 0 4px 4px 0px rgba(0, 0, 0, 0.3) inset;
    background-color: darkgray;
}

.bar_mini_width {
    min-width: 20px;
    width: 20px;
}

.bar_width {
    min-width: 50px;
}

.bar_minicraddle {
    position: relative;
    padding: 0px;
    box-shadow: 0 4px 4px 0px rgba(0, 0, 0, 0.3) inset;
    background-color: darkgray;
    min-width: 8px;
    width: 30px;
}
.bar_miniindicador {
    position: absolute;
    bottom:0px;
    width: 30px;
    background-color: firebrick;
    padding: 0px;
    margin: 0px;
}

.bar_indicator {
    position: absolute;
    box-shadow: 0 2px 2px 0px rgba(0, 0, 0, 0.3) inset;
    top: 0px;
    bottom: 0px;
    left: 0px;
}

.bar_vindicator {
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 0px;
    border-top: white 1px solid;
}

.info_vtext {
    color: white;
    min-width: 16px;
    font-size: 15px;
    transform: rotate(-90deg);
    text-align: center;
    text-shadow: 0 0 2px black, 0 0 2px black;
}

.bar_overflow {
    background-color: firebrick;
    position: absolute;
    box-shadow: 0 2px 2px 0px rgba(0, 0, 0, 0.3) inset;
    top: 0px;
    bottom: 0px;
    right: 0px;
}

.style_good {
    background-color: green;
}

.style_normal {
    background-color: #6176D4;
}

.style_bad {
    background-color: firebrick;
}

.ring_indicator {
    position: absolute;
    bottom: 20px;
    right: 8px;
    width: 67px;
    height: 67px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 5px 0px rgba(0, 0, 0, 0.3) inset, 0 0 5px 0px white;
}

.ring_indicator_hole {
    font-family: "Arial", Arial, Helvetica, sans-serif;
    font-stretch: extra-condensed;
    font-size: 34px;
    font-weight: bold;
    letter-spacing: -0.03em;
    color: firebrick;
    width: 67%;
    height: 67%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: whitesmoke;
    box-shadow: 0 3px 4px 0px rgba(0, 0, 0, 0.3);
}

.ring_indicator_percent {
    font-family: "Arial", Arial, Helvetica, sans-serif;
    font-size: 14px;
    font-weight: bold;
    margin-left: 1px;
}

.ring_column {
    width: 68px;
    padding: 0px;
    text-align: center;
}

.ring_icon {
    position: absolute;
    font-size: 16px;
    top: 0px;
    right: 0px;
    text-shadow:
        0 0 3px white,
        0 0 3px white,
        0 0 3px white,
        0 0 3px white,
        0 0 3px white,
        0 0 3px white,
        0 0 3px white,
        0 0 3px white,
        0 0 3px white
}
</style>
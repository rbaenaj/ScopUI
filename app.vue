<template>
  <section class="container">
    <div class="app-layout">
      <!-- <NuxtWelcome /> -->
      <div class="app-header">
        <div class="pad-header">
          <div class="header-title" style="bottom: 14px; text-align: center;">
            Proyectator - Mapa de Proyectos (versión usuarios avanzados PMO)
          </div>
        </div>
        <div style="position:absolute; left: 0px; right:0px; bottom:0px; top:40px; text-align: center; background-color: #eeeeee; color:#999999; padding-top: 10px;">
          controles de aplicación
        </div>
      </div>
      <div class="context-controls">
        <div class="craddle">
          <span class="pad-title">Perspectiva</span>
          <div class="pad" style="top:30px; bottom:30px;">
            <br/>
            <span style="color: silver;">controles de perspectiva</span>
          </div>
        </div>
      </div>
      <div class="context-selector">
        <div class="craddle">
          <span class="pad-title">Proyectos</span>
          <div style="position: absolute; top:40px; bottom:40px; overflow: auto;">
            <Proyectos_list />
          </div>
        </div>
      </div>
      <div class="map">
        <ScopIntervenciones_map />
      </div>
      <div class="selection-info">
        <div class="craddle" >
          <span class="pad-title">Detalle</span>
          <div class="pad" style="top:30px; bottom:30px;">información del elemento seleccionado</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import ScopIntervenciones_map from './components/ScopIntervenciones_map.vue';
  import Proyectos_list from './components/Proyectos_list.vue';
</script>

<style>
  body{
    margin: 0;
    padding: 0;
    background-color: #004ab7; /* #0082ff; //azul claro */
    font-family: Arial, Helvetica, sans-serif;
  }
        
  .craddle{
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    padding: 8px;
    border-radius: 6px;
    background-color: #00000009;
    box-shadow: 0 2px 2px 0px rgba(0, 0, 0, 0.1) inset;
  }

  .pad{
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    padding: 4px;
    margin: 4px;
    border-radius: 6px;
    background-color: white;
    box-shadow: 0 2px 2px 0px #00000022;
  }
  .map {
    grid-area: map;
    padding: 20px;
    position: relative;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    border: 1px solid #fff3;
    overflow: auto;
    background-color: #00000022;
    box-shadow: 0 8px 8px 0px rgba(0, 0, 0, 0.2) inset;
  }

  .pad-title{
    color: #004ab7;
    font-size:larger;
    font-weight: bold;
    text-shadow: 0 2px 2px #00000033;
  }

  .pad-header{
    position: absolute;
    border-bottom-left-radius: 70px;
    border-bottom-right-radius: 70px;
    background-color: #004ab7;
    min-height: 70px;
    top:-40px;
    left: 200px;
    right: 200px;
    box-shadow: 0 -3px 0px 0px rgba(0, 0, 0, 0.1) inset;
  }
  .header-title{
    color: white;
    font-size:medium;
    font-weight: bold;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 14px;
    text-align: center;
  }

  .container{
    top: 10px;
    bottom: 60px;
    left: 10px;
    right: 10px;
    margin: 0;
    padding: 0;
    position: absolute;
  }
  .app-layout {
    position: relative;
    height: 100%;
    padding: 4px;
    gap: 10px;
    border-radius: 10px;
    background-color: white;
    
    display: grid;
    grid-template-columns: 320px auto auto 320px;
    grid-template-rows: 80px 250px auto auto;
    grid-template-areas:
        'app-header app-header app-header app-header'
        'context-controls map map selection-info'
        'context-selector map map selection-info'
        'context-selector map map selection-info';
  }
  .app-header {
    position: relative;
    grid-area: app-header;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .app-footer {
    position: relative;
    grid-area: app-footer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .context-controls {
    position: relative;
    grid-area: context-controls;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .context-selector {
    position: relative;
    grid-area: context-selector;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .selection-info {
    position: relative;
    grid-area: selection-info;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

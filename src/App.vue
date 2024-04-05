<template>
  <div id="app">>
    <div class="padlr padtop uk-position-top-center">
      <RouterView />
    </div>
  </div>
</template>

<style>
html {
  background-color: #222 !important;
}
.padlr {
  padding-left: calc(15px + 1vw);
  padding-right: calc(15px + 1vw);
}
.padtop {
  padding-top: calc(15px + 4vh);
}
.highlightheading {
  letter-spacing: 2px;
  background: linear-gradient(to bottom, #0000 65%, #228B22 50%);
  color: #d7d7d7;
}
.green {
  color: #228B22;
}
.gold {
  color: gold;
}
.mlig {
  color: #d2d2d2;
}
.lig {
  color: #d7d7d7;
}
</style>

<template>
  <div class="main padlr padtop uk-position-top-center">
      <RouterView />
  </div>
</template>
 
<style>
.padlr {
  padding-left: calc(15px + 1vw);
  padding-right: calc(15px + 1vw);
}
.padtop {
  padding-top: calc(15px + 8vh);
}
.highlight {
  background: url(//s2.svgbox.net/pen-brushes.svg?ic=brush-9&color=228B22);
  margin: -2px -6px;
  padding:  2px  6px;
}
.highlightheading {
  letter-spacing: 2px;
  padding: 0 5px;
  background: linear-gradient(to bottom, #0000 65%, #228B22 50%);
}
tr:nth-child(even) {
  background-color: #eaf4ea;
}
.green {
  color: #228B22;
}
.gold {
  color: gold;
}
</style>
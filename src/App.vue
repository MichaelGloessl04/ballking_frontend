<template>
  <div class="main padlr padtop">
    <div class="uk-position-center">
      <RouterView />
    </div>
  </div>
</template>

<script>
import "../node_modules/uikit/src/less/uikit.less";
</script>

<style>
.padlr {
  padding-left: calc(15px + 1vw);
  padding-right: calc(15px + 1vw);
}
.padtop {
  padding-top: calc(15px + 2vh);
}
.highlight {
  background: url(//s2.svgbox.net/pen-brushes.svg?ic=brush-9&color=228B22);
  margin: -2px -6px;
  padding:  2px  6px;
}
.highlightheading {
  color: #f8f8f8;
}

</style>

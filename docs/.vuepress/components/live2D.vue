<template>
  <!-- 参考链接https://nocilol.me/archives/lab/add-dynamic-poster-girl-with-live2d-to-your-blog-02/ -->
  <div class="waifu">
    <div class="waifu-tips"></div>
    <canvas id="live2d" width="280" height="250" class="live2d"></canvas>
  </div>
</template>


<script>
import "../path/live2dw/lib/L2Dwidget.min.js";
import "../path/to/live2d";
export default {
  mounted() {
    setTimeout(() => {
      console.log(window.L2Dwidget)
      window.L2Dwidget.init({
        pluginRootPath: "../path/live2dw/",
        pluginJsPath: "lib/",

        pluginModelPath: "live2d-widget-model-haru_2/assets/",
        tagMode: false,
        debug: false,
        model: {
          jsonPath:
            "../path/live2dw/live2d-widget-model-haru_2/assets/haru02.model.json",
        },
        display: { position: "right", width: 150, height: 300 },
        mobile: { show: true },
        log: false,
      });
    }, 1000);
  },
};
</script>

<style scoped>
</style>
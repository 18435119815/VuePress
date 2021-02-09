<template>
  <!--
        可替换的模型名称
        2D模型全名称：
            live2d-widget-model-haruto      小娃娃（男）
            live2d-widget-model-koharu      小娃娃（女）
            live2d-widget-model-ni-j        小娃娃（不知道怎么描述，带这个耳机）
            live2d-widget-model-nico        小娃娃（狐狸？？）
            live2d-widget-model-nipsilon    小娃娃（粉长头发小娃娃）
            live2d-widget-model-nito        小娃娃（粉短头发小娃娃）
            live2d-widget-model-unitychan   小娃娃（黄色长头发小娃娃）
            live2d-widget-model-chitose     一个帅哥
            live2d-widget-model-shizuku     坐在课桌上的小美女
            live2d-widget-model-hibiki      一个小妹妹
            live2d-widget-model-izumi       一个妹子
            live2d-widget-model-tsumiki     绿萝？？？？
            live2d-widget-model-miku        初音
            live2d-widget-model-z16         这个妹子好看
            live2d-widget-model-hijiki      黑猫
            live2d-widget-model-tororo      白猫
            live2d-widget-model-wanko       趴在碗里的狗
    -->
  <div id="live2d-widget">
    <canvas id="live2dcanvas" />
  </div>
</template>


<script src="https://cdn.bootcdn.net/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="https://eqcn.ajz.miesnfu.com/wp-content/plugins/wp-3d-pony/live2dw/lib/L2Dwidget.min.js"></script>


<script>
export default {
  mounted() {
    // const body = document.body

    // var script2 = document.createElement("script"); //创建一个script标签
    // script2.type = "text/javascript";
    // script2.src =
    //   "https://cdn.bootcdn.net/ajax/libs/jquery/1.12.4/jquery.min.js";
    // script2.appendChild(body);

    
    // var script1 = document.createElement("script"); //创建一个script标签
    // script1.type = "text/javascript";
    // script1.src =
    //   "https://eqcn.ajz.miesnfu.com/wp-content/plugins/wp-3d-pony/live2dw/lib/L2Dwidget.min.js";
    // script1.appendChild(body);

    // L2Dwidget.init({
    //   model: {
    //     jsonPath:
    //       "https://unpkg.com/live2d-widget-model-hijiki/assets/hijiki.model.json", //这里改模型，前面后面都要改
    //     scale: 1,
    //   },
    //   display: {
    //     position: "left", //设置看板娘的上下左右位置
    //     width: 200,
    //     height: 500,
    //     hOffset: 70,
    //     vOffset: 70,
    //   },
    //   mobile: {
    //     show: true,
    //     scale: 0.5,
    //   },
    //   react: {
    //     opacityDefault: 0.7, //设置透明度
    //     opacityOnHover: 0.2,
    //   },
    // });
    window.onload = function () {
      // $("#live2dcanvas").attr(
      //   "style",
      //   "position: fixed; opacity: 0.7; left: 170px; bottom: 0px; z-index: 1; pointer-events: none;"
      // );
    };
  },
};
</script>

<style scoped>
#live2dcanvas {
  border: 0 !important;
}
</style>
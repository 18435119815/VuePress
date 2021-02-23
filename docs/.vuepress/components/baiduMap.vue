<template>
  <div>
    <el-input
      v-model="addressKeyword"
      placeholder="请输入地址来直接查找相关位置"
    ></el-input>
    <baidu-map
      class="bmView"
      :scroll-wheel-zoom="true"
      :center="location"
      :zoom="zoom"
      @click="getLocationPoint"
      ak="Lgr6GuWg5m31ySlUOz6Gf8ImjtUt1iNr"
    >
      <bm-view style="width: 100%; height: 500px; flex: 1"></bm-view>
      <bm-local-search
        :keyword="addressKeyword"
        :auto-viewport="true"
        style="display: none"
      ></bm-local-search>
    </baidu-map>
  </div>
</template>

<script>
// 局部注册报错 global is not defined
// import BaiduMap from "vue-baidu-map/components/map/Map.vue";
// import BmView from "vue-baidu-map/components/map/MapView.vue";
// import BmLocalSearch from "vue-baidu-map/components/search/LocalSearch.vue";
export default {
  // components: {
  //   BaiduMap,
  //   BmView,
  //   BmLocalSearch,
  // },
  data() {
    return {
      location: {
        lng: 116.404,
        lat: 39.915,
      },
      zoom: 12.8,
      addressKeyword: "",
    };
  },
  methods: {
    getLocationPoint(e) {
      this.lng = e.point.lng;
      this.lat = e.point.lat;
      /* 创建地址解析器的实例 */
      let geoCoder = new BMap.Geocoder();
      /* 获取位置对应的坐标 */
      geoCoder.getPoint(this.addressKeyword, (point) => {
        this.selectedLng = point.lng;
        this.selectedLat = point.lat;
      });
      /* 利用坐标获取地址的详细信息 */
      geocoder.getLocation(e.point, (res) => {
        console.log(res);
      });
    },
  },
};
</script>

<style>
.bmView {
  width: 100%;
  height: 500px;
}
</style>
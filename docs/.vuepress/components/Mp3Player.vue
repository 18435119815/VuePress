<template>
  <div style="margin-left: 20px; margin-right: 20px">
    音乐
    <el-switch v-model="isPlay" @change="play"> </el-switch>
    <audio ref="music" loop>
      <source src='../public/mp3/一人行者.mp3' type="audio/mpeg" ref="mp3"/>
      <!-- <source :src="musicPlay" type="audio/mpeg" ref="mp3" /> -->
    </audio>
  </div>
</template>

<script>
import yirenxingzhe from "../public/mp3/一人行者.mp3";
import zuoriqingkong from "../public/mp3/昨日青空.mp3";
import haishifenkai from "../public/mp3/还是分开.mp3";

export default {
  data() {
    return {
      dialogTableVisible: false,
      isPlay: false,
      musicPlay: "", //当前播放的歌曲名称
      musicList: [yirenxingzhe, zuoriqingkong, haishifenkai], //歌曲列表
    };
  },
  methods: {
    play() {
      if (this.$refs.music.paused) {
        var index = Math.floor(Math.random() * this.musicList.length);
        this.musicPlay = this.musicList[index];
        this.$nextTick(() => {
          this.$refs.music.play();
        });
      } else {
        this.$refs.music.pause();
      }
    },
  },
  mounted() {},
};
</script>
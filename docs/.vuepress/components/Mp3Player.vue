<template>
  <div style="margin-left: 20px; margin-right: 20px">
    音乐
    <el-switch v-model="isPlay" @change="play"> </el-switch>
    <audio ref="music" loop>
      <source src='../public/mp3/一人行者.mp3' type="audio/mpeg" />
    </audio>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogTableVisible: false,
      isPlay: false,
      musicPlay: "", //当前播放的歌曲名称
      musicList: ["一人行者", "昨日青空", "还是分开"], //歌曲列表
    };
  },
  methods: {
    play() {
      if (this.$refs.music.paused) {
        var index = Math.floor(Math.random() * this.musicList.length);
        this.musicPlay = `../public/mp3/${this.musicList[index]}.mp3`;
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
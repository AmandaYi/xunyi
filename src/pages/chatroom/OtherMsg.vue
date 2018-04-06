<template>
  <div class="other-msg">
    <div class="headpic">
      <img :src="msg.headPic" alt="headpic" width="100%" height="100%"/>
    </div>
    <span class="name" v-text="msg.nickname"></span>
    <div class="msg-text" v-if="msg.img">
      <img :src="msg.img" alt="" width="100%" height="100%">
    </div>
    <div class="msg-text" v-if="msg.text" v-text="msg.text"></div>
  </div>
</template>

<script type="text/javascript">
  export default{
    data() {
      return {}
    },
    props: ['msg', 'index']
  }
</script>
<style lang="scss" scoped>
$white: #FFF;
$black: #000;
.other-msg {
  position: relative;
  float: left;
  clear: both;
  .headpic {
    position: absolute;
    left: 10px;
    top: 22px;
    width: 56px;
    height: 56px;
    img {
      border-radius: 50%;
    }
  }
  .name {
    position: absolute;
    width: 100px;
    text-align: left;
    left: 80px;
    top: 25px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .msg-text {
    position: relative;
    margin:50px 10px 10px 80px;
    background: $white;
    padding: 10px;
    border-radius: 10px;
    color: $black;
  }
  .msg-text:after {
    content: '';
    position: absolute;
    left: -22px;
    top: 5px;
    border: solid 8px transparent;
    border-right: solid 20px $white;
  }
}
</style>

<template>
  <div class="msg" :key="index">
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
$blue: #12B7F5;
$white: #FFF;
$black: #000;
.msg {
  position: relative;
  float: right;
  clear: both;
  .headpic {
    position: absolute;
    right:10px;
    top:22px;
    width: 56px;
    height: 56px;
    img{
      border-radius: 50%;
    }
  }
  .name {
    position: absolute;
    width: 100px;
    text-align: right;
    right: 80px;
    margin-top: 25px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .msg-text {
    position: relative;
    margin:50px 80px 10px 10px;
    background: $blue;
    padding: 10px;
    border-radius: 10px;
    color: $white;
  }
  .msg-text:after {
    content: '';
    position: absolute;
    right: -22px;
    top: 5px;
    border: solid 8px transparent;
    border-left: solid 20px $blue;
  }
}
</style>

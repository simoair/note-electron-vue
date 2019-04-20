<template>
  <div class="login theme-deep">
      <div class="content">
        <form type="login">
          <label for="">账户名</label>
          <input type="text" class="username" v-model="form.login.username" placeholder="" value=""/>
          <label for="">密码</label>
          <input type="text" class="password" v-model="form.login.password" placeholder="" value=""/>
          <input type="button" value="登录" @click="login()">
        </form>
        <div class="button-register">注册账户</div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'login',
  data: function () {
    return {
      form: {
        login: {
          username: 'admin',
          password: 'admin'
        },
        register: {

        }
      }
    }
  },
  methods: {
    login () {
      this.$server.User.login(this.form.login).then((flag) => {
        if (flag) {
          this.$store.dispatch('panel/close')
          // let menu = this.$store.getters['panel/getMenu']
          // this.$router.push(menu.list[menu.index].url)
        }
      })
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import '../../assets/less/theme.less';  /*引入公共21样式*/
.login{
    width: 100%;
    height: 100%;
    position: absolute;
    .content{
      width: 300px;
      height: 350px;
      margin:0 auto;
      margin-top: 10%;
      padding: 0 20px;
      background: #282828;
      position: relative;
      box-shadow: 2px 2px 30px #111;
      &:after{
        content:'';
        width: 80px;
        height: 80px;
        position: absolute;
        right: 2px;
        top: -15px;
        background-repeat: no-repeat;
        background-size: cover;
        background-image: url(../../assets/img/icon/cloud2.png)
      }
      .button-register{
        float: right;
        margin-top: -25px;
        color: #888;
      }
      form[type="login"]{
        width: 100%;
        padding-top:80px;
        color:#999;
        label{
          color: #777;
        }
        input{
          position: relative;
          &[type = "text"]{
            width: 100%;
            height: 20px;
            color:#bbb;
            margin-bottom: 20px;
            padding-left: 10px;
            border-bottom:1px solid rgba(255,204,153, .5);
            &:focus{
              border-bottom:1px solid rgba(255,204,153, 1);
            }
          }
          &[type = "button"]{
              width: 100px;
              color:#999;
              padding: 5px 20px;
              border-radius: 30px;
              border: 2px solid #666;
              cursor: pointer;
              &:hover{
                color: rgba(255,204,153, .7);
                border:2px solid rgba(255,204,153, .7);
              }
          }
        }
      }
    }

}
</style>

<template>
  <div class="login">
    <div class="logo">
      <img src="~assets/img/login/logo.jpg" alt="my logo image">
    </div>
    <!--手机号-->
    <InputGroup type="number" v-model="phone" placeholder="请输入手机号" :disabled="disabled" :btnTitle="btnTitle" :error="errors.phone" @btnClick="getVerityCode" />
    <!--验证码-->
    <InputGroup type="number" v-model="verifyCode" placeholder="请输入验证码" :error="errors.code" />

    <div class="login_des">
      <p>
        新用户登记即自动注册，表示同意
        <span> 《用户服务协议》 </span>
      </p>
    </div>

    <!--登录按钮-->
    <div class="login_btn">
      <button :disabled="dis" @click="loginBtnClick">登录</button>
    </div>

  </div>
</template>

<script>
  import InputGroup from 'components/content/login/InputGroup'
  export default {
    name: "Login",
    data(){
      return {
        phone:'',
        verifyCode:'',
        btnTitle: '获取验证码',
        disabled:false,
        errors:{},

      }
    },
    computed:{
      dis(){
        if (!this.phone || !this.verifyCode){
          return true
        }else {
          return false
        }
      }
    },
    methods:{
      //登录按钮被点击
      loginBtnClick() {
        //取消错误提醒
        this.errors ={};
        this.$axios.post('/api/posts/sms_back',{
          phone:this.phone,
          code:this.verifyCode
        })
          .then(res => {
            console.log(res)
            localStorage.setItem('ele_login',true);
            this.$router.push('/');

          }).catch(err =>{
            this.errors = {
              code: err.response.data.msg
            }
        })
      },
      getVerityCode(){
        if (this.validatePhone()) {
          this.validataBtn()

          //发送网络请求
          this.$axios.post('/api/posts/sms_send',{
            phone:this.phone,
            tpl_id:'180424',
            key:'3124d357f151c0b52833c431fe9ba437'
           // tpl_value:urlencode("#code#=1234&#company#=聚合数据")
          }).then((result) => {
              console.log(result);
            }
          )

        }
      },
      validataBtn() {
        let time = 60;
        let timer =setInterval(() => {
          if (time == 0){
            clearInterval(timer);
            this.disabled = false
            this.btnTitle='获取验证码'
          } else {
            this.btnTitle = time +'秒后重试';
            this.disabled =true;
            time--
          }
        },1000)
      },
      validatePhone(){
        //手机号为空
        if (!this.phone) {
          this.errors = {
            phone: '手机号不能为空！'
          }
          return false;
        }else if(!(/^1[3456789]\d{9}$/.test(this.phone))) {
          this.errors = {
            phone: '手机号格式错误！'
          }
          return false
        }else {
          this.errors= {}
          return true
        }
      }

    },
    components:{
      InputGroup
    }
  }
</script>

<style scoped>
   @import '~assets/css/login/login.css';



</style>

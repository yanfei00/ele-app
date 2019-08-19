<template>
  <div class="text_group">
    <!--组件结构-->
    <div class="input_group" :class="{'is-invalid':error}">
      <!--组件容器 :value="value"-->
      <input :type="type"  :placeholder="placeholder" :name="name" @input="$emit('input',$event.target.value )"/>
      <!--输入框后边的按钮-->
      <button v-if="btnTitle" :disabled="disabled" @click="$emit('btnClick')">{{btnTitle}}</button>
    </div>
    <!--错误信息-->
    <div v-if="error" class="invalid-feedback">{{error}}</div>

  </div>
</template>

<script>
  export default {
    name: "InputGroup",
    props:{
      //输入的类型
      type:{
        type: String,
        default:'text'
      },
      value:String,
      placeholder:String,
      name:String,
      btnTitle:String,
      disabled:Boolean,
      error:String
    }
  }
</script>

<style scoped>

  .input_group {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .input_group input {
    width: 60%;
    height: 100%;
  }
  .input_group button {
    background: #fff;
  }
  .input_group button[disabled] {
    color: #aaa;
  }
  .is-invalid {
    border: 1px solid red;
    box-shadow: 0 0 10px rgba(100,100,100,.1);
  }
  .invalid-feedback {
    color: red;
    padding-top: 5px;
  }
</style>

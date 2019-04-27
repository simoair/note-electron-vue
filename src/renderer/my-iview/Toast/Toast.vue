
<template>
	<div class="toast"  v-if="isShow">
		<div class="toast-div">{{ text }}</div>
	</div>
</template>
 
<script>
export default{
  name: 'toast',
  data () {
    return {
      text: '内容',
      isShow: true,
      duration: 2500
    }
  }
}
</script>
 
<style>
.toast{
   	position: fixed;
    right: 10px;
    top: 50px;
    z-index: 1112;
    background: #444;
    line-height: 0.7rem;
    color: #ebebeb;
    padding: 0.3rem 1rem;
    border-radius: 0.1rem;
    animation: myfirst .2s;
}
@keyframes myfirst
{
    from {right: -50px;}
    to {right: 20px;}
}
</style>

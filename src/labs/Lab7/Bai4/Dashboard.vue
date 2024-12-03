<!-- Dashboard.vue --> 
<template> 
    <div class="container"> 
    <h2>Trang Dashboard</h2> 
    <p>Chào mừng đến với trang Dashboard!</p> 
    </div> 
    </template> 
     
<script setup> 
import { ref } from "vue"; 
const user = ref(JSON.parse(localStorage.getItem("user"))); 
if (!user.value) { 
// Nếu không có thông tin người dùng, chuyển hướng về trang đăng nhập 
window.location.href = "/login"; 
} 
</script>
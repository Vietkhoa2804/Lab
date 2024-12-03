<template> 
    <div class="container"> 
    <h2>Đăng nhập</h2> 
    <form @submit.prevent="login"> 
    <div class="mb-3"> 
    <input v-model="username" placeholder="Tên đăng nhập" class="form-control" /> 
    </div> 
    <div class="mb-3"> 
    <input type="email" v-model="email" placeholder="Email" class="form-control" /> 
    </div> 
    <div class="mb-3"> 
    <input 
    type="password" 
    v-model="password" 
    placeholder="Mật khẩu" 
    class="form-control" 
    /> 
    </div> 
    <button type="submit" class="btn btn-primary">Đăng nhập</button> 
    </form> 
    <p v-if="error" class="text-danger">{{ error }}</p> 
    </div> 
    </template> 
    <script setup> 
    import { ref } from "vue";
    import { useRouter } from "vue-router"; 
    const username = ref(""); 
    const email = ref(""); 
    const password = ref(""); 
    const error = ref(""); 
    const router = useRouter(); 
    const login = async () => { 
    try { 
    const response = await axios.post("http://localhost:3000/login", { 
    username: username.value, 
    email: email.value, 
    password: password.value, 
    }); 
    localStorage.setItem("token", response.data.token); 
    router.push("/"); 
    } catch (err) { 
    error.value = "Đăng nhập không thành công"; 
    } 
    }; 
    </script> 
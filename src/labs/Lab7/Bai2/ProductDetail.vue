<template> 
    <div class="container"> 
    <h2>Chi tiết sản phẩm</h2> 
    <div v-if="product"> 
    <h3>{{ product.name }}</h3> 
    <p>Giá: {{ product.price }} VND</p> 
    <p>Mô tả: {{ product.description }}</p> 
    <p>Thể loại: {{ product.category }}</p> 
    <p>Số lượng: {{ product.quantity }}</p> 
    <img :src="product.imageUrl" alt="Hình ảnh sản phẩm" class="img-fluid" /> 
    </div> 
    <div v-else> 
    <p>Đang tải dữ liệu sản phẩm...</p> 
    </div> 
</div> 
</template> 
 
<script setup> 
import { ref, onMounted } from "vue"; 
import { useRoute } from "vue-router";
const product = ref(null); 
const route = useRoute(); 
const fetchProduct = async () => { 
const response = await axios.get(`http://localhost:3000/products/${route.params.id}`); 
product.value = response.data; 
}; 
onMounted(() => { 
fetchProduct(); 
}); 
</script> 
<template>

  <h1>Entidad relación encuesta</h1>
      <h2>Datos:</h2>
      <ul v-for="(item, index) in info" :key="index">
          <li>{{ item }}</li>
      </ul>
</template>

<script>
import axios from 'axios';
export default {
data() {
    return {
        info: [],
    }
},

created() {
    this.consultar()
},

methods: {
    consultar() {
        axios.get('http://localhost:80/api/encuesta')
            .then(resp => {
                this.info = resp.data
                console.log(resp)
            }).catch((error)=>{console.log(error)})
     
    }, },     
}

</script>

<style  scoped>

</style>
<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>
  <div>
    <a-button type="primary">Primary Button</a-button>
  </div>
  
</template>
<script>
    // import {getUserId} from '../api/indexapi'; 
    export default {
        computed: {
            username() {
            // 我们很快就会看到 `params` 是什么
            return this.$route.params.username
            },
        },
        methods: {
            goToDashboard() {
            if (isAuthenticated) {
                this.$router.push('/dashboard')
            } else {
                this.$router.push('/login')
            }
            },
        },
    }
    // const handleUserId=(pam)=>{

    // }
</script>
<style scoped>
.read-the-docs {
  color: #888;
}
</style>

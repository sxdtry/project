<template>
    <div class="user">
        <van-tabs v-model="active">
            <van-tab title="登陆">
                <van-cell-group>
                    <van-field
                     v-model="value1" placeholder="请输入用户名" label="用户名:" clearable required />
                    <van-field v-model="password1" placeholder="请输入密码" type="password" label="密码:" clearable required />
                    <van-button type="primary" size="large" @click="landing" >登陆</van-button>
                </van-cell-group>
            </van-tab>
            <van-tab title="注册">
                <van-cell-group>
                    <van-field
                     v-model="value2" placeholder="请输入用户名" label="用户名:" clearable required />
                    <van-field v-model="password2" placeholder="请输入密码" type="password" label="密码:" clearable required />
                    <van-button type="primary" size="large" @click="logon">注册</van-button>
                </van-cell-group>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
export default {
    name:"user",
    data(){
        return {
            active:"0",
            value1:"",
            password1:"",
            value2:"",
            password2:"",
        }
    },
    methods:{
        landing(){
            if(!this.value1 || !this.password1)return;
            const user = JSON.parse(localStorage.getItem('user'));
            if(this.value1 == user.value2 && this.password1 == user.password2){
                localStorage.setItem('user',JSON.stringify({value2:this.value2,password2:this.password2,flag:true}))
                this.$router.replace({name:"home"})
            }
        },
        logon(){
            localStorage.setItem('user',JSON.stringify({value2:this.value2,password2:this.password2,flag:false}))
        }
    },
    mounted(){
    }
}
</script>

<style lang="less" scoped>
.user{
    display:flex;
    height:100vh;
    justify-content:center;
    align-items:center;
}
</style>
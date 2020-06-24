<template>
    <div>
        <toolbar></toolbar>
        <router-view></router-view>
        <appfooter></appfooter>
    </div>
</template>

<script>
import toolbar from './Toolbar';
import appfooter from './AppFooter'
export default {
components:{toolbar,appfooter}
}
</script>

<style>

</style>
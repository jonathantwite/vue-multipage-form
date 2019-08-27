<template>
    <div class="input-field">
        <input  />
        <div v-if="isDirty">
            <p v-if="!isValid">Error</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['id', 'isDirty', 'isValid'],
    data: function(){
        return {
            value: ''
        }
    },
    mounted(){
        console.log(this.$props.isValid);
    }
}
</script>

<style lang="scss">

</style>
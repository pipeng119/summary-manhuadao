<template>
    <ul class="book-list">
        <li class="book-list-item">
            <div class="book-list-item-pic"></div>
            <div class="book-list-item-info">
                <h4 class="book-list-item-info-title"></h4>
                <h4 class="book-list-item-info-author"></h4>
                <h4 class="book-list-item-info-fans"></h4>
            </div>
        </li>
    </ul>
</template>
<script>
export default {
    name: 'BookList',
    data(){
        return {

        }
    }
}
</script>
<style lang="stylus" scoped>
@import './'
</style>
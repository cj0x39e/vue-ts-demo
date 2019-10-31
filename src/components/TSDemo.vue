<template>
    <div>
        <ul>
            <li v-for="item in eventList" :key="item">{{item}}</li>
        </ul>
        <Show
         text="你好，世界!"
         @hello="hello"
        />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Show from './Show.vue';

@Component({
    components: {
        Show   
    }
})
export default class TSDemo extends Vue {

    public list: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    get eventList () {
        return this.list.filter((item: number) => item %2 === 0)
    }

    public hello (msg: string) {
        alert(msg);
    }
}

// export default {
//     data () {
//         retu
//     },
        // methods
// }
</script>

<style>

</style>
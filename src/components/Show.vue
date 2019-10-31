<template>
  <div>
      <button @click="hello">hello</button>
      {{text}}
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';

@Component
export default class extends Vue {
    @Prop(String) public readonly text!: string;

    @Emit()
    public hello() {
        return '你好，丰橙';
        // this.$emit('')
    }
}

// props:{
//     text: {
//         type: 
//     }
// }
</script>

<style>

</style>
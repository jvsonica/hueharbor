<template>
    <ColorForm @colorAdded="addColor" />

    <draggable
        v-model="colorList"
        :move="checkMove"
        class="color-list"
        item-key="color"
        @start="drag = true"
        @end="drag = false"
    >
        <template #item="{ element }">
            <ColorBox :color="element.color" />
        </template>
    </draggable>
</template>
  
<script>
import draggable from "vuedraggable";
import ColorForm from "./ColorForm.vue";
import ColorBox from "./ColorBox.vue";
import uuid from "../services/uuid";

export default {
    components: {
        ColorForm,
        ColorBox,
        draggable,
    },
    data() {
        return {
            drag: false,
            colorList: []
        };
    },
    methods: {
        addColor(newColor) {
            this.colorList.push({ color: newColor, uuid: uuid() });
        },
        checkMove(move) {
            console.log("checking move", move);
        },
    },
};
</script>
<style scoped>
.color-list {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    margin-top: 2rem;
}
</style>

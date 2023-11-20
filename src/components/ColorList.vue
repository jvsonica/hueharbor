<template>
    <ColorForm @addColor="addColor" />

    <draggable
        v-model="colorList"
        :move="checkMove"
        class="color-list"
        item-key="hex"
        @start="drag = true"
        @end="drag = false"
    >
        <template #item="{ element }">
            <ColorBox :color="element" @removeColor="removeColor" />
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
        addColor(newColorHex) {
            this.colorList.push({ hex: newColorHex, uuid: uuid() });
        },
        removeColor(colorToBeRemoved) {
            this.colorList = this.colorList.filter(c => c.uuid !== colorToBeRemoved.uuid);
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

<template>
    <ColorForm @addColor="addColor" />

    <draggable
        class="color-list"
        tag="transition-group"
        :component-data="{
            tag: 'div',
            type: 'transition-group',
            name: 'flip-list',
        }"
        v-model="colorList"
        v-bind="dragOptions"
        @start="drag = true"
        @end="drag = false"
        item-key="colorList.length"
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
    computed: {
        dragOptions() {
            return {
                animation: 200,
                ghostClass: "ghost",
            };
        },
    },
    methods: {
        addColor(newColorHex) {
            this.colorList.push({ hex: newColorHex, uuid: uuid() });
        },
        removeColor(colorToBeRemoved) {
            this.colorList = this.colorList.filter(
                (c) => c.uuid !== colorToBeRemoved.uuid
            );
        }
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

.flip-list-move {
    transition: transform 0.5s;
}

.no-move {
    transition: transform 0s;
}

.ghost {
    opacity: 0.1;
    background: #c8ebfb;
}
</style>

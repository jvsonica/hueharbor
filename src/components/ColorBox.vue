<template>
    <div class="color-box" :style="{ backgroundColor: color.hex }">
        <button @click="copyToClipboard" class="button-copy">
            {{ color.hex }} &nbsp; <IconCopy />
        </button>
        <button @click="removeColor" class="button-delete">
            <IconDelete />
        </button>
    </div>
</template>
  
<script>
import Clipboard from "clipboard";
import IconDelete from "@/assets/delete.svg";
import IconCopy from "@/assets/copy.svg";

export default {
    props: {
        color: {
            type: Object,
            required: true,
        },
    },
    components: {
        IconCopy,
        IconDelete,
    },
    mounted() {
        // Initialize clipboard.js for the copy button
        this.clipboard = new Clipboard(this.$el.querySelector(".button-copy"), {
            text: () => this.color?.hex,
        });
    },
    beforeDestroy() {
        // Destroy clipboard.js instance to avoid memory leaks
        if (this.clipboard) {
            this.clipboard.destroy();
        }
    },
    methods: {
        copyToClipboard() {
            // Programmatically trigger the copy action
            this.clipboard.onClick({
                currentTarget: this.$el.querySelector(".button-copy"),
            });
        },
        removeColor() {
            this.$emit("removeColor", this.color);
        },
    },
};
</script>
  
<style scoped>
.color-box {
    width: 100%;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: end;
    border: 1px solid #fff;
    cursor: grab;
}

.color-box > * {
    margin-right: 5px;
}

svg {
    height: 1rem;
    width: auto;
    fill: #fff;
}

button {
    cursor: pointer;
    background-color: #000;
    color: #fff;
    border: none;
    font-size: 0.8rem;
    padding: 5px;
    border-radius: 3px;
    display: flex;
    align-content: center;
}

button:hover {
    background-color: #333;
}
</style>
  
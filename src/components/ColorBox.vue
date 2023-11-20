<template>
    <div class="color-box" :style="{ backgroundColor: color }">
        <button @click="copyToClipboard" class="copy-button">
            {{ color }} <CopyIcon />
        </button>
    </div>
</template>
  
  <script>
import Clipboard from "clipboard";
import CopyIcon from "@/assets/copy-icon.vue";

export default {
    props: {
        color: {
            type: String,
            required: true,
        },
    },
    components: {
        CopyIcon,
    },
    mounted() {
        // Initialize clipboard.js for the copy button
        this.clipboard = new Clipboard(this.$el.querySelector(".copy-button"), {
            text: () => this.color,
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
                currentTarget: this.$el.querySelector(".copy-button"),
            });
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

.copy-button {
    cursor: pointer;
    background-color: #000;
    color: #fff;
    border: none;
    padding: 5px;
    font-size: 0.8rem;
    margin-right: 5px;
    border-radius: 3px;
    display: flex;
    align-content: center;
}

.copy-button svg {
    height: 1rem;
    width: auto;
    margin: 0 3px;
    fill: #fff
}
</style>
  
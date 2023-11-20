<template>
    <form @submit.prevent="addColor" class="color-form">
        <input v-model="newColor" placeholder="#RRGGBB" />
        <button type="submit">Add</button>
    </form>
</template>
  
  <script>
export default {
    data() {
        return {
            newColor: "",
        };
    },
    methods: {
        addColor() {
            const isValidColor = this.isValidColor(this.newColor);

            if (isValidColor) {
                this.$emit("colorAdded", this.newColor);
                this.newColor = "";
            } else {
                alert("Please enter a valid CSS color name or hex color code.");
            }
        },
        isValidColor(color) {
            // Check if the entered color is a valid CSS color name or hex color code
            return CSS.supports("color", color) || this.isValidHexColor(color);
        },
        isValidHexColor(color) {
            const hexColorRegex = /^#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})$/;
            return hexColorRegex.test(color);
        },
    },
};
</script>
<style scoped>
.color-form {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    margin-bottom: 10px;
}

input {
    padding: 1rem;
    width: 100%;
}

button {
    padding: 1rem;
    border: none;
    cursor: pointer;
}
</style>
  
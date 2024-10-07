export type FileTypes = "javascript" | "css" | "html";

export type FEATURE_NAMES = "v-model" | "v-if" | "v-for";

export const FEATURES = {
  "v-model": "",
  "v-if": "",
  "v-for": "",
};

export const CODE_SNIPPETS: { [K in FileTypes]: string } = {
  html: `
<div id="app">
    <div class="title">Parent Component</div>
    <input type="text" v-model="message">
    <input type="checkbox" v-model="visible">
    <span>{{ visible ? "🔓" : "🔒" }}</span>
    <vue-propsviewer :propsdata="message" :handlecheck="handlecheck"></vue-propsviewer>
    <vue-propsviewer :propsdata="message" :handlecheck="handlecheck"></vue-propsviewer>
</div>

<template id="propsviewer">
    <div id="wrapper">
        <div class="title">Child Component</div>
        <div>{{ message }}</div>
        <div>{{ propsdata }}</div>
        <button @click="handlecheck">event emit</button>
    </div>
</template>`,
  css: ``,
  javascript: `
new Vuelite.default({
    el: "#app",
    data() {
        return {
            visible: true,
            message: "parent message",
        };
    },
    methods: {
        handlecheck() {
            this.visible = !this.visible;
        },
    },
    components: {
        "vue-propsviewer": {
            props: ["propsdata", "handlecheck"],
            el: "#propsviewer",
            data() {
                return {
                    message: "local message",
                };
            },
            styles: {
                "#wrapper": {
                    border: "1px solid red",
                    margin: "1rem",
                    padding: "10px",
                },
            },
        },
    },
    styles: {
        "#app": {
            border: "1px solid blue",
            borderRadius: "5px",
            padding: "10px",
            margin: "3rem",
        },
        ".title": {
            "font-weight": "bold",
        },
    },
});`,
};

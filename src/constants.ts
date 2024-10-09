import { FeatureNames, CodeSnipet } from "./types";

export const FEATURES_TITLES: Record<FeatureNames, string> = {
  "v-bind": "Binding Data to Attributes (v-bind)",
  "v-model": "Two-Way Data Binding (v-model)",
  "another-directive": "Another Directive",
  "directive-shortcut": "Directive Shortcuts",
  "inline-format-bind": "Inline Format Binding (style, class, object)",
  "template-syntax": "Template Syntax",
  "expression-support": "Expression Support",
  "conditional-rendering": "Conditional Rendering (v-if, v-show)",
  "list-rendering": "List Rendering (v-for)",
  "lifecycle-hooks": "Lifecycle Hooks",
  watch: "Data Change Watching (watch)",
  ref: "Reference to Reactive Data (ref)",
  "component-based": "Component-Based Architecture",
  "composition-api": "Composition API",
};

export const CODE_SNIPPETS: Record<FeatureNames, CodeSnipet> = {
  "v-bind": {
    html: `<div id="app">
    <input type="text" v-bind:value="title" @input="handleInput" />
    <div>{{ title }}</div>
    <input type="checkbox" :checked="isChecked" @change="handleCheck" />
    <span>{{ isChecked ? "checked" : "unChecked" }}</span>
</div>`,
    javascript: `new Vuelite({
    el: "#app",
    data() {
        return {
        title: "hello world!",
        isChecked: true,
        };
    },
    methods:{
        handleInput(event){
            this.title = event.target.value
        },
        handleCheck(event){
            this.isChecked = event.target.checked
        }
    }
});`,
  },
  "v-model": {
    html: `<div id="app">
    <input type="text" v-model="title" />
    <div>{{ title }}</div>

    <input type="checkbox" v-model="visible" />
    <span>{{ visible ? "🔓" : "🔒" }}</span>

    <label> male<input type="radio" value="male" v-model="selectedValue" /> </label>
    <label> female<input type="radio" value="female" v-model="selectedValue" /> </label>
    <div>{{ selectedValue }}</div>

    <textarea v-model="title"></textarea>

    <div>{{ selectedOption }}</div>
    <select v-model="selectedOption">
        <option value="React">React</option>
        <option value="Vue">Vue</option>
        <option value="Angular">Angular</option>
    </select>
</div>`,
    javascript: `new Vuelite({
    el: "#app",
    data() {
        return {
            title: "Hello World!",
            visible: false,
            selectedValue: "male",
            selectedOption: "React"
        };
    }
});`,
  },
  "another-directive": {
    html: `<div id="app">
    <div v-text="text"></div>
    <div v-html="world"></div>
    <div v-class="classData">class</div>
    <div v-style="textStyle">text</div>
    <button v-on:click="increase">+</button>
</div>
`,
    javascript: `new Vuelite({
    el: "#app",
    data() {
        return {
            text: "Hello, Vuelite!",
            world: "<strong>This is bold text.</strong>",
            classData: {
                active: true,
                'text-primary': true,
            },
            textStyle: {
                color: 'blue',
                fontSize: '20px'
            },
            count: 0,
        };
    },
    methods: {
        increase() {
            this.count += 1;
            this.text = \`Hello, Vuelite! Count: \${this.count}\`;
        }
    },
    styles: {
        ".active": {
            "font-weight": "bold"
        },
        ".text-primary": {
            "color": "green"
        }
    }
});`,
  },
  "directive-shortcut": {
    html: `<div id="app">
    <input v-bind:value="title" v-bind:style="textStyle" v-on:input="handleInput" />
    <!-- 축약 표현 -->
    <input :value="title" :style="textStyle" @input="handleInput" />
</div>`,
    javascript: `new Vuelite({
    el: "#app",
    data() {
        return {
            title: "Hello, Vuelite!",
            textStyle: {
                color: 'blue',
                fontSize: '20px',
                border: '1px solid #ccc',
                padding: '5px',
            },
        };
    },
    methods: {
        handleInput(event) {
            this.title = event.target.value;
        }
    }
});`,
  },
  "inline-format-bind": {
    html: `<div id="app">
    <div :class="{ active: isActive, 'text-danger': hasError }">Active Status</div>
    <div :class="classData">Class Binding</div>

    <div :style="{ 'font-size': fontSize + 'px', backgroundColor: '#FF0000' }">Dynamic Font Size</div>
    <div :style="textStyle">Styled Text</div>

    <div v-bind="{ id: 'testId', class: 'testClass', customKey: 'customValue' }">Static Bindings</div>
    <div v-bind="objectBind">Dynamic Bindings</div>
</div>`,
    javascript: `new Vuelite({
    el: "#app",
    data() {
        return {
            isActive: true,
            hasError: false,
            fontSize: 24,
            classData: {
                'text-primary': true,
                'text-secondary': false,
            },
            textStyle: {
                color: 'blue',
                fontWeight: 'bold',
            },
            objectBind: {
                id: 'dynamicId',
                class: 'dynamicClass',
                customAttribute: 'dynamicValue',
            }
        };
    }
});`,
  },
  "template-syntax": {
    html: `<div id="app">
    <div>first: {{ firstName }}, last: {{ lastName }}</div>
    <div>{{ checked ? "checked" : "unChecked" }} {{ 5 + 6 }}</div>
</div>`,
    javascript: `new Vuelite({
    el: "#app",
    data() {
        return {
            firstName: "Jiheon",
            lastName: "Kim",
            checked: true,
        };
    }
});`,
  },
  "expression-support": {
    html: `<div id="app">
    <button @click="visible = !visible">click</button>
    <span v-show="visible && hasPermission">Visible</span>
    
    <div>
        <button @click="increase">++</button>
        <span>{{ count }}</span>
        <div v-if="count > 5">Count is greater than 5</div>
    </div>

    <input v-bind:disabled="isDisabled ? true : false" />
    
    <p>{{ age + 5 }}</p>
    <p>{{ isAdult ? 'Adult' : 'Minor' }}</p>
    <p>{{ items[0] }}</p>
</div>
`,
    javascript: `new Vuelite({
    el: "#app",
    data() {
        return {
            visible: true,
            hasPermission: true,
            count: 0,
            isDisabled: false,
            age: 20,
            isAdult: true,
            items: ["Item 1", "Item 2", "Item 3"],
        };
    },
    methods: {
        increase(){
            this.count++
        }
    }
});`,
  },
  "conditional-rendering": {
    html: `<div id="app">
    <div v-if="inputValue === '30'">{{ "Correct 😄" }}</div>
    <div v-else>{{ "10 + 20 = " }}</div>
    <input type="text" v-model="inputValue" /> 
    <div>
        <input type="checkbox" v-model="visible" />
        <span>{{ visible ? "🔓" : "🔒" }}</span>
        <div v-show="visible">{{ "👻" }}</div>
    </div>
</div>`,
    javascript: `new Vuelite({
    el: "#app",
    data() {
        return {
            inputValue: '',
            visible: false,
        };
    }
});`,
  },
  "list-rendering": {
    html: `<div id="app">
    <div v-for="(value, key, index) in myObject" :key="index">
      <div>{{ \`\${key}로 시작하는 단어 \${value}\` }}</div>
    </div>

    <div v-for="(item, index) in items" :key="item.id">
      <div>{{ \`\${item.id} 번째 아이템의 메시지 \${item.message}\` }}</div>
    </div>

    <div v-for="(value, index) in 5">
      <div>{{ value }}</div>
    </div>
</div>
`,
    javascript: `new Vuelite({
    el: "#app",
    data() {
        return {
            myObject: {
                a: "Apple",
                b: "Banana",
                c: "Cherry",
            },
            items: [
                { id: 1, message: "Hello" },
                { id: 2, message: "World" },
                { id: 3, message: "Vuelite" },
            ],
        };
    }
});`,
  },
  "lifecycle-hooks": {
    html: `<div id="app">
    <div>Please check the console.</div>
    <p>count: {{ count }}</p>
    <button @click="increment">++</button>
</div>`,
    javascript: `new Vuelite({
    el: "#app",
    data() {
        return {
            count: 0,
        };
    },
    methods: {
        increment(){
            this.count++
        }
    },
    beforeCreate() {
        console.log("Before create.");
    },
    created() {
        console.log("Created.");
    },
    beforeMount() {
        console.log("Before mount.");
    },
    mounted() {
        console.log("Mounted.");
    },
    beforeUpdate() {
        console.log("Before update.");
    },
    updated() {
        console.log("Updated.");
    }
});`,
  },
  watch: {
    html: `<div id="app">
    <div>message: {{ message }}</div>
    <div>count: {{ count }}</div>
    <button @click="increment">count up</button>
</div>`,
    javascript: `new Vuelite({
    el: "#app",
    data() {
        return {
            count: 0,
            message: "Count is 0.",
        };
    },
    methods: {
        increment() {
            this.count++;
        },
    },
    watch: {
        count(newVal, oldVal) {
            console.log(\`Count changed from \${oldVal} to \${newVal}\`);
            this.message = \`Count is \${newVal}.\`;
        }
    }
});`,
  },
  ref: {
    html: `<div id="app">
    <input type="text" ref="textInput" />
    <button @click="focusInput">Focus Input</button>
    <p>Current Value: {{ inputValue }}</p>
</div>`,
    javascript: `new Vuelite({
    el: "#app",
    data() {
        return {
            inputValue: ""
        };
    },
    methods: {
        focusInput() {
            this.$refs.textInput.focus();
        }
    },
    mounted() {
        this.$refs.textInput.addEventListener("input", (event) => {
            this.inputValue = event.target.value;
        });
    }
});`,
  },
  "component-based": {
    html: `<div id="app">
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
    javascript: `new Vuelite({
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
  },
  "composition-api": {
    html: `<div id="app">
  <input type="text" v-model="message">
  <div>{{ message }}</div>
  <vue-child :propsmessage="message"></vue-child>
</div>

<template id="child">
  <div>{{ message }}</div>
  <div>{{ propsmessage }}</div>
</template>`,
    javascript: `const ChildComponent = {
  el: "#child",
  props: ["propsmessage"],
  data() {
    return {
      message: "local message",
    };
  },
  scopedStyles: {
    div: {
      padding: "10px",
      border: "1px solid red",
      "font-weight": "bold",
    }
  }
}

createApp({
  components: {
    "vue-child": ChildComponent,
  },
  setup(props) {
    const message = ref("parent message");
    return { message }; 
  },
}).mount("#app");`,
  },
};

export function createSrcDoc(htmlContents: string, jsContents: string) {
  return `
    <html>
      <head><script src="https://unpkg.com/vue-lite-js@latest"></script></head>
      <script>
        const _log = console.log;
        console.log = function (...rest) {
          window.parent.postMessage({ source: "iframe", message: rest }, "*" );
          // _log.apply(console, arguments);
        };
      </script>
      <body>${htmlContents}</body>
      <script>
        for (const key in Vuelite) {
            if (Vuelite.hasOwnProperty(key)) {
                window[key] = Vuelite[key];
            }
        }
        window.Vuelite = Vuelite.default
        ${jsContents}
      </script>
    </html>`;
}

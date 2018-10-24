# VueSvg

Loads a SVG image as an inline SVG.

## dependencies

- [Vue](https://github.com/vuejs/vue)

## setup

### npm

```shell
npm install @seregpie/vuesvg
```

### ES module

Register the component globally.

```javascript
import Vue from 'vue';
import VueSvg from '@seregpie/vuesvg';

Vue.component(VueSvg.name, VueSvg);
```

*or*

Register the component in the scope of another component.

```javascript
import VueSvg from '@seregpie/vuesvg';

export default {
  components: {
    [VueSvg.name]: VueSvg,
  },
  /*...*/
};
```

### browser

```html
<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/@seregpie/vuesvg"></script>
```

If Vue is detected, the component will be registered automatically.

## usage

```html
<vue-svg
  height="24px"
  src="https://unpkg.com/simple-icons/icons/github.svg"
  width="24px"
/>
```

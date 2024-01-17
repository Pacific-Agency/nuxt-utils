import MyModule from "../../../src/module"

export default defineNuxtConfig({
  imports: {
    autoImport: true,
  },
  modules: [MyModule],
})

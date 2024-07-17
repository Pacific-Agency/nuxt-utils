import exer7umConfig from "@exer7um/eslint-config"
import { createConfigForNuxt } from "@nuxt/eslint-config/flat"

export default createConfigForNuxt().append(exer7umConfig)

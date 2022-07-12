import {defineConfig} from 'vite'
import vuePlugin from '@vitejs/plugin-vue2'
import Unocss from "unocss/vite"
import path from 'path'
export default defineConfig({
    resolve: {
       alias :[
           {find:'@',replacement:path.resolve(__dirname,'src')}
       ]
    },
    plugins:[
        vuePlugin(),
        Unocss()
    ]
})
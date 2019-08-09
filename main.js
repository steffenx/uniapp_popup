import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

import './static/app.scss';

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

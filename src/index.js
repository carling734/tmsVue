import Vue from 'vue';
import ElementUI from 'element-ui'

import tmsContainer from "@/components/layout/tmsContainer";
import tmsBreadcrumbHeader from "@/components/layout/tmsBreadcrumbHeader";
import tmsHeader from "@/components/layout/tmsHeader";

Vue.config.productionTip = false
Vue.use(ElementUI, { size: 'small' });

function addComponent(component) {
    Vue.component(component.name, component);
}

const GlobalComponents = {
    install(Vue, options) {
        addComponent(tmsContainer);
        addComponent(tmsBreadcrumbHeader);
        addComponent(tmsHeader);
    }
};

export default GlobalComponents
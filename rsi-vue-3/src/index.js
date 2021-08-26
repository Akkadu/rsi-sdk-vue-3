import InterpretationPlayer from './components/interpretation-player.vue'

const install = function(app) {
    const components = { InterpretationPlayer }
    Object.keys(components).forEach(name => {
        app.component(name, components[name])
    })
}

const AkkaduRsi = { InterpretationPlayer, install }

export default AkkaduRsi
export { InterpretationPlayer }
 
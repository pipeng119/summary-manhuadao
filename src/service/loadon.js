import Loading from 'components/RouterLoading.vue'

const loadon = asyncFunction => {
    const component = () => ({
        component: asyncFunction(),
        loading: Loading
    })

    return {
        render(h) {
            return h(component)
        }
    }
}

export default loadon
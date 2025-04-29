import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters("DictionaryModule", ["dictionaryList"]),
    },
    methods: {
        getNameFromDictionary(field, id) {
            const list = this.dictionaryList[field];
            if (!list) return null;

            const item = list.find(entry => entry.id === id);
            return item ? item.name : '-';
        },
        degreeImage(name) {
            const availableImages = ['BACHELOR', 'MASTERS', 'PHD']
            const imageName = availableImages.includes(name) ? name : 'other'
            return `/img/degrees/${imageName}.png`
        }
    }
}

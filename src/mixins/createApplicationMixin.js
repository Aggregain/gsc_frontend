import {mapActions, mapGetters} from 'vuex'

export default {
    computed:{
        ...mapGetters("UniversityModule", ["universityInfo"]),
    },
    methods: {
        ...mapActions("ApplicationModule", ["CREATE_APPLICATION"]),

        async createApplication() {
            if(this.universityInfo?.id){
                try {
                    const result = await this.CREATE_APPLICATION(this.universityInfo.id);
                    if (result.success) {
                        this.$router.push({ name: "ViewApplication", params:{ application_id: result.application_id } });
                    }
                } catch (error) {
                    console.error("Ошибка при создании заявки:", error);
                }
            }
        }
    }
}

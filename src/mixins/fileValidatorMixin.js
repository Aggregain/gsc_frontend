export default {
    methods: {
        validateAvatar(file) {
            const isJPGorPNG = file.type === "image/jpeg" || file.type === "image/png";
            const isLt300KB = file.size / 1024 < 300;

            if (!isJPGorPNG) {
                this.$message.error("Файл должен быть в формате JPG или PNG!");
            }

            if (!isLt300KB) {
                this.$message.error("Размер файла не должен превышать 300 КБ!");
            }

            return isJPGorPNG && isLt300KB;
        },

        validateFile(file) {
            const allowedTypes = [
                "application/pdf",
                "application/msword", // .doc
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document" // .docx
            ];
            const isAllowedType = allowedTypes.includes(file.type);
            const isLt800KB = file.size / 1024 < 800;

            if (!isAllowedType) {
                this.$message.error("Файл должен быть в формате PDF, DOC или DOCX!");
            }

            if (!isLt800KB) {
                this.$message.error("Размер файла не должен превышать 800 КБ!");
            }

            return isAllowedType && isLt800KB;
        }
    }
}
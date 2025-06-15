import { ElNotification } from 'element-plus';

export function handleApiError(error, fallbackMessage = 'Ошибка при отправке.') {
    const detail = error?.response?.data?.detail;
    let message = fallbackMessage;

    if (Array.isArray(detail)) {
        message = detail.filter(Boolean).join('\n');
    } else if (typeof detail === 'string') {
        message = detail.trim() || fallbackMessage;
    } else if (typeof detail === 'object' && detail !== null) {
        message = Object.values(detail).flat().filter(Boolean).join('\n') || fallbackMessage;
    }

    ElNotification({
        title: 'Ошибка',
        message,
        type: 'error'
    });
}

type locale = 'en' | 'kr';

const translation = {
    en: {
        title: 'Ctrl Seoul',
        description: 'This is a description',
        language: 'English',
        ingress: {
            anomaly: {
                location: 'Songpa, Seoul, South Korea',
            }
        }
    },
    kr: {
        title: 'Ctrl Seoul',
        description: '이것은 설명입니다',
        language: '한국어',
        ingress: {
            anomaly: {
                location: '서울 송파구',
            }
        }
    }
}

export default translation;

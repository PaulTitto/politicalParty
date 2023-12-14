import { ref, onMounted, onErrorCaptured } from 'vue';
import axios from 'axios';

export function useFetch(url) {
    const data = ref(null);
    const loading = ref(true);
    const error = ref(null);


    const fetchData = async () => {
        try {
            const response = await axios.get(url);
            data.value = response.data;
        } catch (err) {
            error.value = err;
        } finally {
            loading.value = false;
        }
    };

    onMounted(() => {
        fetchData();
    });

    
    onErrorCaptured(() => {
        console.log('An Error has occured while fetching data', error.value)
    })
    
    return {
        data,
        loading,
        error
    }
}





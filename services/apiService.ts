const apiService = {
    get: async function(url: string): Promise<any> {
        console.log('GET Request URL:', url);
        return new Promise((resolve, reject) => {
            fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then((response) => response.json())
                .then((data) => resolve(data))
                .catch((error) => reject(error));
        })
    },

    post: async function(url: string, data: any): Promise<any> {
        console.log('POST Request URL:', url);
        return new Promise((resolve, reject) => {
            fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then((response) => response.json())
                .then((data) => resolve(data))
                .catch((error) => reject(error));
        })
    },
};

export default apiService;

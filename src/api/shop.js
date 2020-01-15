export default {
    getProduct() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve([{
                        id: 1,
                        title: 'js全栈书',
                        price: 10
                    },
                    {
                        id: 2,
                        title: 'java全栈书',
                        price: 15
                    },
                    {
                        id: 3,
                        title: 'python全栈书',
                        price: 20
                    }
                ])
            }, 2000);
        });
    }
}
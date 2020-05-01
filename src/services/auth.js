export function signIn() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                toke: 'sdh2xFG4Hax',
                user: {
                    name: 'Murillo',
                    email: 'mfs.murillo@gmail.com'
                }
            })
        }, 2000);
    });
}
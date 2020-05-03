export function signIn() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                token: 'sdh2xFG4Hax',
                user: {
                    name: '',
                    email: 'mfs.murillo@gmail.com',
                    characters: [
                        {
                            id: 1,
                            bio: 'Cloud Strife',
                            slug: 'cloud',
                            builds: [
                                { 
                                    id: 1,
                                    name: 'Overpower',
                                    build: {
                                        weapon: [
                                            { weapon: 0, name: '-- empty', type: '' },
                                            { weapon: 1, name: '-- empty', type: '' },
                                            { weapon: 2, name: '-- empty', type: '' },
                                            { weapon: 3, name: '-- empty', type: '' },
                                            { weapon: 4, name: '-- empty', type: '' },
                                            { weapon: 5, name: '-- empty', type: '' },
                                            { weapon: 6, name: '-- empty', type: '' },
                                        ],
                                        armor: [
                                            { armor: 0, name: '-- empty', type: '' },
                                            { armor: 1, name: '-- empty', type: '' },
                                            { armor: 2, name: '-- empty', type: '' },
                                            { armor: 3, name: '-- empty', type: '' }
                                        ],
                                    },
                                },
                            ]   
                        },
                        {
                            id: 2,
                            bio: 'Tifa Lockhart',
                            slug: 'tifa',
                            builds: [],
                        },
                        {
                            id: 3,
                            bio: 'Barret Wallace',
                            slug: 'barret',
                            builds: [],
                        },
                        {
                            id: 4,
                            bio: 'Aerith Gainsborough',
                            slug: 'cloud',
                            builds: [],
                        },
                        {
                            id: 5,
                            bio: 'Red XIII',
                            slug: 'red-xiii',
                            builds: [],
                        },
                    ]
                }
            })
        }, 2000);
    });
}
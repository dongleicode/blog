export default {
    base: '/blog/',
    head: [['meta', {name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no'}]],
    title: 'JINRUI',
    description: 'Just do it.',
    themeConfig: {
        siteTitle: 'JINRUI',
        // logo: '/favicon.ico',
        nav: [
            {
                text: 'contact',
                items: [
                    { text: 'github', link: 'https://github.com/dongleicode' },
                    { 
                        text: 'email：mhwgodl@163.com' 
                    }
                ]
            }
        ],
        sidebar: {
            '/': [
                {
                    text: 'Vue',
                    collapsible: true,
                    items: [
                        {
                            text: 'vue相关主题',
                            link: '../vue/',
                            collapsible: true, 
                            items: [
                                {
                                    text: 'vue2和vue3核心原理差异',
                                    link: '../vue/core'
                                }    
                            ]
                        }
                    ]
                },
                {
                    text: 'React',
                    collapsible: true,
                    items: [
                        {
                            text: 'React核心',
                            link: '../react/',
                        }
                    ]
                },
                {
                    text: '前端架构',
                    collapsible: true,
                    items: [
                        {
                            text: '架构设计',
                            link: '../framework/',
                        }
                    ]
                }
            ]
        }
    }
}
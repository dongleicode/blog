export default {
    base: '/',
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
                            text: 'vue相关',
                            link: '/vue/',
                            collapsible: true, 
                            items: [
                                {
                                    text: 'vue2和vue3核心原理差异',
                                    link: '/vue/core'
                                },    
                                {
                                    text: 'vue2的双向数据绑定',
                                    link: '/vue/reactive2'
                                },
                                {
                                    text: 'vue3的双向数据绑定',
                                    link: '/vue/reactive3'
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
                            text: 'React相关',
                            link: '/react/',
                        }
                    ]
                },
                {
                    text: '前端架构',
                    collapsible: true,
                    items: [
                        {
                            text: '架构设计',
                            link: '/framework/',
                        }
                    ]
                }
            ]
        }
    }
}
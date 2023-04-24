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
                        },
                        {
                            text: '前端规范',
                            link: '/framework/codeSpecification',
                        }
                    ]
                },
                {
                    text: 'Interview question',
                    collapsible: true,
                    items: [{
                        text: 'js相关',
                        link: '/js/',
                        collapsible: true,
                        items: [
                            {
                                text: 'stone',
                                link: '/js/face/event_bus',
                            },
                            {
                                text: 'Landscape cloud map',
                                link: '/js/face/landscape_cloud_map',
                            }
                        ]
                        }
                    ]
                },
            ]
        }
    }
}
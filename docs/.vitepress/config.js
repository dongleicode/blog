export default {
    title: 'JINRUI',
    description: 'Just do it.',
    themeConfig: {
        siteTitle: 'JINRUI',
        // logo: '/favicon.ico',
        nav: [
            { text: 'github', link: 'https://github.com/dongleicode' },
            // {
            //     text: '联系',
            //     items: [
            //         { text: 'email', link: 'https://dongleicode.github.io/blog' },
            //     ]
            // }
        ],
        sidebar: {
            '/': [
              {
                text: 'Vue',
                collapsible: true,
                items: [
                  {
                    text: 'vue2和vue3核心原理差异',
                    link: '../vue/core'
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
export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f5c5771da13e37e06ccc0c2',
                  title: 'Sanity Studio',
                  name: 'taboola-ui-repository-studio',
                  apiId: 'b07bf425-7035-43ab-915c-143a653b184f'
                },
                {
                  buildHookId: '5f5c5771a21a978cacb9862c',
                  title: 'Portfolio Website',
                  name: 'taboola-ui-repository',
                  apiId: '7c8d0ed3-b02d-4198-82b3-0b8b8f7b3c91'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/teppei-k/taboola-ui-repository',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://taboola-ui-repository.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}

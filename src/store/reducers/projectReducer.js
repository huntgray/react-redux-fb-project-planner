const initState = {
  projects: [
    {id: '1', title: 'Write primary navbar stylesheet', content: "The primary navbar sits at the top of the application and contains the main links to the application's primary pages. The main links should include animated hover effects. Dropdown considerations are necessary for subpages especially under the Products and Services sections." },
    {id: '2', title: 'Review templating language options', content: "The web application framwwork can be used with a number of popular templating lnaguages including Mustache, Handlebars, EJS, Jade, and many more. Review the three most popular options and determine which one best suits our needs and explain why."},
    {id: '3', title: 'Apply advanced CSS3 selectors', content: "Some of our existing client projects have inefficient and outdated stylesheets. Update the stylesheets for client projects 2021-2024 with advanced CSS selectors."}
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT_SUCCESS':
      console.log('create project success');
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('create project error');
      return state;
    default:
      return state;
  }
};

export default projectReducer;

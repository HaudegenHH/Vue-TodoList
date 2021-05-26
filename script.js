new Vue({
    el: '#app',
    data: {
        selectedProject: null,
      projects: [
          {
            id: 1,
          title: 'Ninox',
          isActive: false,
          tasks: [
            {
                  id: 1,
                  title: 'Module',
              assignedTo: ["Ben"],
              status: 'hoch',
              dueDate: "30.05.2021",
                  completed: false,
              },
              {
                  id: 2,
                  title: 'typo3 extension',
              assignedTo: ["Martin","Ben"],
              status: 'mittel',
              dueDate: "15.06.2021",
                  completed: false,
              },
            {
              id: 3,
                  title: 'deploy ninox app',
              assignedTo: ["Martin","Wolfgang","Taissa"],
              status: 'niedrig',
              dueDate: "10.07.2021",
                  completed: false,
            }
          ]
        },
        {
            id: 2,
          title: 'SEO',
          isActive: false,
          tasks: [
              {
                  id: 1,
                  title: 'impressum',
              status: 'hoch',                        
              assignedTo: ["Wolfgang"],            
              dueDate: "10.07.2021",            
                  completed: false,
              },
            {
              id: 2,
                  title: 'robots.txt',
              status: 'orange',            
              assignedTo: ["Frederik"],            
              dueDate: "10.07.2021",            
                  completed: false,
            }
          ]
        }
      ]
    },
    methods: {
        changeActiveState(id){
          this.projects = this.projects.map(project => {
            if(project.id === +id){
              project.isActive = true;
          } else {
                project.isActive = false; 
          }
          return project;
        })			
      },
      displayTasks(id){
          this.changeActiveState(id);
        this.selectedProject = this.projects.find(project => project.id === +id);
        
        
      }
    }
  })
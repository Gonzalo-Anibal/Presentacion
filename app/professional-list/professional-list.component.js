angular.
  module('professionalList').
  component('professionalList', {  // This name is what AngularJS uses to match to the `<phone-list>` element.
    templateUrl:
        'professional-list/professional-list.template.html',
    controller: [ '$scope', '$http',
      function ProfessionalListController($scope, $http) {
        var self = this;
        $scope.limitProfessional = 1;
        $http.get('json/professionals.json').then(function(response) {
          self.professionals = response;
        });
        /*
        this.professionals = [
          {
              id: 1,
              name: "Gonzalo Anibal Marin Rojas",
              phone: "+56 9 6224 3710",
              email: "gonzalo.marin.r@usach.cl",
              image: "img/gonzalo_marin.jpg",
              about: "Mi camino recién ha comenzado, lo que más busco son oportunidades de seguir aprendiendo. Las Matemáticas son mi fuerte y me gusta aplicarlas en la Computación. Conociendo metodologías y aptitudes con motivación propia y el apoyo de los más cercanos.",
              knowledge: [
                  "Tecnologías: C, C++, Python, Goland, MatLab, AngularJS, Angular, Ionic, TypeScript, CakePHP.",
                  "Desarrollo de Servicios API REST.",
                  "Metodologías: SCRUM, XP, KANBAN, Incremental.",
                  "Framework: AngularJS, Angular, Ionic, NodeJS, CakePHP.",
                  "Conocimientos en MySQL, Postgres, HTML, Docker y AWS."
              ],
              work_experience: [
                  {
                      company: "Babytuto.com",
                      company_description: "Babytuto.com es una empresa que vende productos a través de su plataforma web.",
                      job: "Junior Sofware Developer",
                      description: "Práctica de Verano, en la cual mis labores y responsabilidades eran Desarrollo y Mantenimiento de software: catálogo de productos, gestión de publicaciones y usuarios. Utilicé Php (CakePHP), MySQL y herramientas como Docker.",
                      start_date: "01/2020",
                      end_date: "03/2020"
                  },
                  {
                      company: "IBM Chile",
                      company_description: "IBM es una empresa de tecnología y consultoría que ofrece una amplia gama de servicios en las áreas de informática.",
                      job: "Programa en el que puedes conocer gestión de clientes y nuevas tecnologías creando nuevas soluciones a los desafíos. Logramos construir una plataforma web que mostraba alertas de fallas repetitivas de las máquinas TransBank en tiempo real al Call Center además de generar reportes semanales. Utilizamos Python, AngularJS, DB2 y Automation Anywhere.",
                      description: "",
                      start_date: "03/2018",
                      end_date: "08/2018"
                  },
                  {
                      company: "PRICEWATERHOUSECOOPERS CONSULTORES AUDITORES SpA.",
                      company_description: "PWC es una empresa que brinda servicios de consultoría, auditoría y asesoría legal a numerosas empresas en todo el mundo.",
                      job: "Práctica Profesional",
                      description: "Práctica Profesional, en la cual mis labores y responsabilidades incluían realizar Soporte a Usuarios, Mantención a equipos empresariales y Migración de SO.",
                      start_date: "01/2018",
                      end_date: "03/2018"
                  }
              ],
              experience: "La utilizacion de AngularJS para la creacion de un dashboard informativo para la mesa de ayuda con diversos indicadores de los tickets cumpliento los requerimientos solicitados en el Student Program en mi paso por IBM Chile."
          }
        ];*/
      }
    ]
  });
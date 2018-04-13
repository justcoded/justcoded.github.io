(() => {
  let el = document.getElementById('filter');

  if ( !el ) {
    return;
  }

  const filter = new Vue({
    el: el,
    mounted: function() {
      let _this = this;
      let resizeTimer;

      $(document).off('click.toggleDropDown touchend.toggleDropDown').on('click.toggleDropDown touchend.toggleDropDown', function(e) {

        if ( window.innerWidth < 640 ) {
          if ( $(e.target).hasClass('filter__categories') || $(e.target).parent().hasClass('filter__categories') || $(e.target).hasClass('filter__title') ) {
            return;
          } else {
            _this.mobileDropDown.isVisible = false;
          }
        }
      });

      $(window).on('resize', (e) => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
          this.onResize();
        }, 250);
      });

    },
    data: {
      urlHash: {},
      timeoutDelay: 250,
      filters: [],
      filterText: 'Select Technology',
      isLoading: false,
      mobileDropDown: {
        isVisible: false,
      },
      currentPage: 1,
      projectPerPage: 12,
      filterButtons: [
        { text: 'WordPress', filter: 'WordPress', isActive: false, isDisabled: false },
        { text: 'PHP', filter: 'PHP', isActive: false, isDisabled: false },
        { text: 'HTML5/CSS3', filter: 'HTML5/CSS3', isActive: false, isDisabled: false },
        { text: 'JavaScript', filter: 'JavaScript', isActive: false, isDisabled: false },
        { text: 'Vue.js', filter: 'Vue.js', isActive: false, isDisabled: false },
        { text: 'React.js', filter: 'React.js', isActive: false, isDisabled: false },
        { text: 'Node.js', filter: 'Node.js', isActive: false, isDisabled: false },
        { text: 'Magento', filter: 'Magento', isActive: false, isDisabled: false },
        { text: 'Mobile App', filter: 'Mobile App', isActive: false, isDisabled: false },
      ],
      filterProjects: [
        {
          id: 0,
          title: 'Yii2 Starter',
          description: 'JustCoded Project Starter for all projects based on the YII2 PHP Framework.',
          link: 'https://github.com/justcoded/yii2-starter',
          img: {
            src: 'assets/images/yii2_starter.jpg',
            srcset: 'assets/images/yii2_starter.jpg 1x, assets/images/yii2_starter-2x.jpg 2x'
          },
          tags: ['PHP'],
          isVisible: true,
        },
        {
          id: 1,
          title: 'Just Image Optimizer',
          description: 'WordPress plugin to compress image files, improve performance and boost your SEO rank using Google Page Speed Insights compression and optimization.',
          link: 'https://github.com/justcoded/just-image-optimizer',
          img: {
            src: 'assets/images/just_image_optimizer.jpg',
            srcset: 'assets/images/just_image_optimizer.jpg 1x, assets/images/just_image_optimizer-2x.jpg 2x',
          },
          tags: ['PHP', 'WordPress'],
          isVisible: true,
        },
        {
          id: 2,
          title: 'Just Responsive Images',
          description: 'WordPress Plugin to support better responsive images with <picture> tag, backgrounds, retina support, etc.',
          link: 'https://github.com/justcoded/just-responsive-images',
          img: {
            src: 'assets/images/just_responsive_images.jpg',
            srcset: 'assets/images/just_responsive_images.jpg 1x, assets/images/just_responsive_images-2x.jpg 2x',
          },
          tags: ['PHP', 'WordPress'],
          isVisible: true,
        },
        {
          id: 3,
          title: 'Dribbble Oauth-2',
          description: 'Simple proxy server with NodeJS and ExpressJS that handles authorisation and gets an access token using our library.',
          link: 'https://github.com/justcoded/dribbble-oauth2',
          img: {
            src: 'assets/images/dribbble.jpg',
            srcset: 'assets/images/dribbble.jpg 1x, assets/images/dribbble-2x.jpg 2x',
          },
          tags: ['JavaScript', 'React.js'],
          isVisible: true,
        },
        {
          id: 4,
          title: 'Web Starter Kit',
          description: 'Web Starter Kit is an opinionated boilerplate for web development.A solid starting point for both professionals and newcomers to the industry.',
          link: 'https://github.com/justcoded/web-starter-kit',
          img: {
            src: 'assets/images/web_starter.jpg',
            srcset: 'assets/images/web_starter.jpg, assets/images/web_starter-2x.jpg 2x',
          },
          tags: ['HTML5/CSS3', 'Node.js'],
          isVisible: true,
        },
        {
          id: 5,
          title: 'WordPress Theme Boilerplate',
          description: 'WordPress theme boilerplate with an improved classes-based code structure, theme wrapper, and security patches.',
          link: 'https://github.com/justcoded/wordpress-theme-boilerplate',
          img: {
            src: 'assets/images/wp_boilerplate.jpg',
            srcset: 'assets/images/wp_boilerplate.jpg 1x, assets/images/wp_boilerplate-2x.jpg 2x',
          },
          tags: ['PHP', 'WordPress'],
          isVisible: true,
        },
        {
          id: 6,
          title: 'WordPress Theme Framework',
          description: 'Lightweight MVC theming framework for developers who want to better organize their own custom themes with an MVC approach.',
          link: 'https://github.com/justcoded/wordpress-theme-framework',
          img: {
            src: 'assets/images/wp_theme.jpg',
            srcset: 'assets/images/wp_theme.jpg 1x, assets/images/wp_theme-2x.jpg 2x',
          },
          tags: ['PHP', 'WordPress'],
          isVisible: true,
        },
        {
          id: 7,
          title: 'PHP CodeSniffer',
          description: 'PHP Code Sniffer custom rules pack. This package contains a default set of rules and custom rules which are used in all best IT projects.',
          link: 'https://github.com/justcoded/phpcodesniffer',
          img: {
            src: 'assets/images/codeSniffer.jpg',
            srcset: 'assets/images/codeSniffer.jpg 1x, assets/images/codeSniffer-2x.jpg 2x',
          },
          tags: ['PHP'],
          isVisible: true,
        },
        {
          id: 8,
          title: 'jQuery Star',
          description: 'This is a jQuery plugin that adds some "Magic" to your site. By "Magic" we mean shining stars, which appear when you move your mouse.',
          link: 'https://github.com/justcoded/jquery-stars',
          img: {
            src: 'assets/images/jQuery_star.jpg',
            srcset: 'assets/images/jQuery_star.jpg 1x, assets/images/jQuery_star-2x.jpg 2x',
          },
          tags: ['HTML5/CSS3'],
          isVisible: true,
        },
        {
          id: 9,
          title: 'WordPress Starter',
          description: 'WordPress Project Template is a skeleton best for rapidly creating projects with modern development tools, has easy configuration, and an improved folder structure.',
          link: 'https://github.com/justcoded/wordpress-starter',
          img: {
            src: 'assets/images/wp_starter.jpg',
            srcset: 'assets/images/wp_starter.jpg 1x, assets/images/wp_starter-2x.jpg 2x',
          },
          tags: ['PHP', 'WordPress'],
          isVisible: true,
        },
        {
          id: 10,
          title: 'Wordpress Composer Scripts',
          description: 'Custom Composer scripts for WordPress Project Template.',
          link: 'https://github.com/justcoded/wordpress-composer-scripts',
          img: {
            src: 'assets/images/composer.jpg',
            srcset: 'assets/images/composer.jpg 1x, assets/images/composer-2x.jpg 2x',
          },
          tags: ['PHP', 'WordPress'],
          isVisible: true,
        },
        {
          id: 11,
          title: 'NPM jcn',
          description: 'Command line tool for JustCoded which allows the creation of a starter boilerplate for different kinds of projects.',
          link: 'https://github.com/justcoded/npm-jcn',
          img: {
            src: 'assets/images/npm_jcn.jpg',
            srcset: 'assets/images/npm_jcn.jpg 1x, assets/images/npm_jcn-2x.jpg 2x',
          },
          tags: ['JavaScript', 'Node.js'],
          isVisible: true,
        },
        {
          id: 12,
          title: 'Form Handler',
          description: 'Validate simple HTML form requests, send email notifications with ease. Best for pure HTML websites.',
          link: 'https://github.com/justcoded/form-handler',
          img: {
            src: 'assets/images/form_handler.jpg',
            srcset: 'assets/images/form_handler.jpg 1x, assets/images/form_handler-2x.jpg 2x',
          },
          tags: ['PHP'],
          isVisible: true,
        },
        {
          id: 13,
          title: 'Yii2 Settings',
          description: 'Yii2 Settings Component with IDE autocompletion for setting keys, replace params.',
          link: 'https://github.com/justcoded/yii2-settings',
          img: {
            src: 'assets/images/yii2_settings.jpg',
            srcset: 'assets/images/yii2_settings.jpg 1x, assets/images/yii2_settings-2x.jpg 2x',
          },
          tags: ['PHP'],
          isVisible: true,
        },
        {
          id: 14,
          title: 'React.JS Example',
          description: 'Web Application for booking meeting rooms using Google Calendar and based on the React.js library.',
          link: 'https://github.com/justcoded/react.js-example',
          img: {
            src: 'assets/images/react_example.jpg',
            srcset: 'assets/images/react_example.jpg 1x, assets/images/react_example-2x.jpg 2x',
          },
          tags: ['JavaScript', 'React.js'],
          isVisible: true,
        },
        {
          id: 15,
          title: 'Yii2 Rbac',
          description: 'Yii2 RBAC Manager with nice graphic interface and advanced AccessFilter with automatic route-based access.',
          link: 'https://github.com/justcoded/yii2-rbac',
          img: {
            src: 'assets/images/yii2_rbac.jpg',
            srcset: 'assets/images/yii2_rbac.jpg 1x, assets/images/yii2_rbac-2x.jpg 2x',
          },
          tags: ['PHP'],
          isVisible: true,
        },
        {
          id: 16,
          title: 'Tutorial Shopify Nodejs App',
          description: 'Example of a Shopify embedded app on Node.js that demonstrates how to create applications for a Shopify platform.',
          link: 'https://github.com/justcoded/tutorial_shopify_nodejs_app',
          img: {
            src: 'assets/images/tutorial_shopify.jpg',
            srcset: 'assets/images/tutorial_shopify.jpg 1x, assets/images/tutorial_shopify-2x.jpg 2x',
          },
          tags: ['JavaScript', 'Node.js'],
          isVisible: true,
        },
        {
          id: 17,
          title: 'Examples SCSS Bem Code',
          description: 'Small website that was developed using SCSS and BEM methodology. Also we used our Web Starter Kit and Node.js modules to optimize images.',
          link: 'https://github.com/justcoded/examples-scss-bem-code',
          img: {
            src: 'assets/images/bem_scss.jpg',
            srcset: 'assets/images/bem_scss.jpg 1x, assets/images/bem_scss-2x.jpg 2x',
          },
          tags: ['HTML5/CSS3'],
          isVisible: true,
        },
        {
          id: 18,
          title: 'Just Tinymce Custom Styles',
          description: 'WordPress Plugin to modify TinyMCE style_formats option. Also there is a preset for Bootstrap styles.',
          link: 'https://github.com/justcoded/just-tinymce-custom-styles',
          img: {
            src: 'assets/images/just_tinymce_custom_styles.jpg',
            srcset: 'assets/images/just_tinymce_custom_styles.jpg 1x, assets/images/just_tinymce_custom_styles-2x.jpg 2x',
          },
          tags: ['PHP', 'WordPress'],
          isVisible: true,
        },
        {
          id: 19,
          title: 'WP Host Update',
          description: 'When you move WordPress to another host you usually need to update the database with new URLs inside a lot of pages.',
          link: 'https://github.com/justcoded/wp-host-update',
          img: {
            src: 'assets/images/wp_host.jpg',
            srcset: 'assets/images/wp_host.jpg 1x, assets/images/wp_host-2x.jpg 2x',
          },
          tags: ['PHP', 'WordPress'],
          isVisible: true,
        },
        {
          id: 20,
          title: 'Magento2: configurable back in stock',
          description: 'Default product alerts in Magento 2 work only for the whole configurable products. This module allows customers to select specific configurations to get notified about.',
          link: 'https://github.com/justcoded/magento2-configurable-back-in-stock',
          img: {
            src: 'assets/images/magento.jpg',
            srcset: 'assets/images/magento.jpg 1x, assets/images/magento-2x.jpg 2x',
          },
          tags: ['PHP', 'Magento'],
          isVisible: true,
        },
        {
          id: 21,
          title: 'Magento2: local config',
          description: 'The module helps developers who work with remote databases or need to import databases frequently to the local machine.',
          link: 'https://github.com/justcoded/magento2-local-config',
          img: {
            src: 'assets/images/magento_local_config.jpg',
            srcset: 'assets/images/magento_local_config.jpg 1x, assets/images/magento_local_config-2x.jpg 2x',
          },
          tags: ['PHP', 'Magento'],
          isVisible: true,
        },
        {
          id: 22,
          title: 'Magento pci auth',
          description: ' This module helps make Magento 1.x installation more PCI-compliant by controlling user password behavior.',
          link: 'https://github.com/justcoded/magento-pci-auth',
          img: {
            src: 'assets/images/magento_pci_auth.jpg',
            srcset: 'assets/images/magento_pci_auth.jpg 1x, assets/images/magento_pci_auth-2x.jpg 2x',
          },
          tags: ['PHP', 'Magento'],
          isVisible: true,
        },
        {
          id: 23,
          title: 'Vue.js-grid-filter',
          description: 'This module provides a filtered view of posts (or any kind of listing data), filtering/pagination/sorting should be realized on backend.',
          link: 'https://github.com/justcoded/vuejs-grid-filter',
          img: {
            src: 'assets/images/vuejs_filter.jpg',
            srcset: 'assets/images/vuejs_filter.jpg 1x, assets/images/vuejs_filter-2x.jpg 2x',
          },
          tags: ['JavaScript', 'Vue.js'],
          isVisible: true,
        },
        {
          id: 24,
          title: 'React-newsapi.org-app',
          description: 'News App based on the React Native framework that provides news from different countries and categories.',
          link: 'https://github.com/justcoded/react-newsapi.org-app',
          img: {
            src: 'assets/images/react_newsapi.jpg',
            srcset: 'assets/images/react_newsapi.jpg 1x, assets/images/react_newsapi-2x.jpg 2x',
          },
          tags: ['JavaScript', 'React.js', 'Mobile App'],
          isVisible: true,
        },
        {
          id: 25,
          title: 'Animations-city',
          description: 'Web-page filled with animations which respond to the actions of users. The view of the city has many shifting details, so we chose a template which you’ll notice on the right hand side.',
          link: 'https://github.com/justcoded/animations-city',
          img: {
            src: 'assets/images/animations_city.jpg',
            srcset: 'assets/images/animations_city.jpg 1x, assets/images/animations_city-2x.jpg 2x',
          },
          tags: ['JavaScript', 'HTML5/CSS3'],
          isVisible: true,
        },
        {
          id: 26,
          title: 'justcoded.github.io',
          description: 'This is a handy list of our modules and components available at GitHub.',
          link: 'https://github.com/justcoded/justcoded.github.io',
          img: {
            src: 'assets/images/github_io.jpg',
            srcset: 'assets/images/github_io.jpg 1x, assets/images/github_io-2x.jpg 2x',
          },
          tags: ['Vue.js', 'JavaScript', 'HTML5/CSS3'],
          isVisible: true,
        },
      ],
    },

    created: function(e) {
      if ( !this.getUrlTags() ) {
        return;
      }

      let urlObj = this.getUrlTags();
      this.filters = Array.isArray(urlObj.tags) ? urlObj.tags : urlObj.tags.split();
      this.urlHash.tags = this.filters;

      this.filters.map((filter) => {
        this.filterButtons.map((btn) => {
          if ( btn.filter === filter ) {
            btn.isActive = true;
          }
        });
      });
    },

    methods: {
      disableButtons: function(e) {
        this.filterButtons.map((btn) => {
          btn.isDisabled = true;
          setTimeout(() => btn.isDisabled = false, 500);
        });
      },

      onResize: function() {
        let $selectTitle = $('.filter__title');

        if ( window.innerWidth < 640 ) {
          if ( this.filters.length ) {
            $selectTitle.text(this.filters.join(', '));
          } else {
            $selectTitle.text(this.filterText);
          }
        } else {
          $selectTitle.text(this.filterText);
        }
      },

      setFilter: function(e) {
        let el = e.target;
        let filterTag = el.dataset.filter;
        let found = this.filters.indexOf(filterTag) >= 0;

        let $selectTitle = $('.filter__title');
        let selectText = this.filterText;

        this.isLoading = true;
        this.disableButtons(e);

        setTimeout(() => {
          setTimeout(() => this.isLoading = false, 200);

          if ( el.classList.contains('projects__tag') ) {
            this.filters = [filterTag];
            this.filterButtons.map(function(btn) {
              if ( btn.filter !== filterTag ) {
                btn.isActive = false;
              } else {
                btn.isActive = true;
              }
            });
          } else {
            if ( !found ) {
              this.filters.push(filterTag);
            } else if ( found ) {
              this.filters.splice(this.filters.indexOf(filterTag), 1);
            }

            this.filterButtons.map(function(btn) {
              let target = filterTag === btn.filter;
              if ( target && !btn.isActive ) {
                btn.isActive = true;
              } else if ( target && btn.isActive ) {
                btn.isActive = false;
              }
            });
          }

          if ( window.innerWidth < 640 ) {
            if ( this.filters.length ) {
              $selectTitle.text(this.filters.join(', '));
            } else {
              $selectTitle.text(selectText);
            }
          }

          this.currentPage = 1;
          this.setUrlTags('#tags=');

        }, 300);
      },

      clearAll: function() {
        this.isLoading = true;

        setTimeout(() => {
          setTimeout(() => this.isLoading = false, 200);
          this.filters = [];

          this.filterButtons.map(btn => {
            btn.isActive = false;
          });

          if ( window.innerWidth < 640 ) {
            $('.filter__title').text('Select Technology');
          }

          this.setUrlTags('#tags=');

        }, 300);
      },

      getUrlTags: function() {
        return location.hash.replace('#', '').split('&').reduce((filters, data) => {
          const key = data.split('=')[0];
          const value = data.split('=')[1];

          if ( !key || !value ) {
            return;
          } else {
            return Object.assign({},
              filters, {
                [key]: value.indexOf(',') !== -1 ? value.replace('%20', ' ').split(',') : value.replace('%20', ' ')
              }
            );
          }
        }, {});
      },

      setUrlTags: function(str) {
        this.urlHash.tags = this.filters;

        if ( this.urlHash.tags.length ) {
          history.pushState(null, null, str + this.urlHash.tags);
        } else {
          history.pushState(null, null, ' ');
        }
      },

      toggleMobileCategories: function(e) {
        if ( window.innerWidth < 640 ) {
          this.mobileDropDown.isVisible = !this.mobileDropDown.isVisible;
        }
      },

    },
    computed: {
      getFilteredProjects: function() {
        if ( this.filters.length < 1 ) {
          return this.filterProjects;
        }

        let _this = this;

        return this.filterProjects.filter(function(project) {
          return project.tags.some(tag => _this.filters.indexOf(tag) >= 0);
        });
      },
      updatePage: function() {
        return this.currentPage;
      }
    },
    components: {
      'filter-button': {
        props: ['button', 'callback'],
        template:
          `<button type="button" class="filter__button" @click.prevent="callback">
            {{ button.text }}
          </button>`,
      },
      'filter-projects': {
        props: ['projects', 'callback', 'currentPage'],
        data: function() {
          return {
            projectsPerPage: 12,
            pagesTotal: null,
          };
        },
        methods: {
          getPages: function() {
            this.pagesTotal = Math.ceil(this.$props.projects.length / this.projectsPerPage);
            return this.pagesTotal;
          },
          setCurrentPage: function(page) {
            const { currentPage } = this.$parent;
            let $btns = $('.projects__page');

            this.$parent.isLoading = true;

            setTimeout(() => {
              setTimeout(() => this.$parent.isLoading = false, 200);

              $btns.each(function(i, el) {
                let dataPage = $(this).attr('data-page');
                if ( dataPage == page ) {
                  $(this).addClass('projects__page--active');
                } else {
                  $(this).removeClass('projects__page--active');
                }
              });

              if (currentPage === page) {
                return currentPage;
              }

              this.$parent.currentPage = page;
              return this.$parent.currentPage;
            }, 300);
          },
          goPrevPage: function() {
            const page = this.$parent.currentPage - 1;
            if ( page < 1 ) {
              return;
            }

            return this.setCurrentPage(page);
          },
          goNextPage: function() {
            const page = this.$parent.currentPage + 1;
            if ( page > this.getPages() ) {
              return;
            }

            return this.setCurrentPage(page);
          },
        },
        computed: {
          getProjectsPerPage() {
            const { $props, currentPage, projectsPerPage} = this;

            return this.$props.projects.concat().splice((currentPage - 1) * projectsPerPage, projectsPerPage);
          },
          updatePage: function() {
            return this.$parent.currentPage;
          },
        },
        template:
          `<div class="projects">
            <div class="projects__inner">
              <div class="projects__item" v-for="project in getProjectsPerPage" :key="project.id">
                <div class="projects__item-inner">
                  <div class="projects__logo">
                    <a :href="project.link" target="_blank">
                      <img :srcset="project.img.srcset" :src="project.img.src" alt="image description">
                    </a>
                  </div>
                  <div class="projects__descr">
                    <h2 class="projects__title">
                      <a :href="project.link" target="_blank">{{ project.title }}</a>
                    </h2>
                    <p class="projects__txt">{{ project.description }}</p>
                    <div class="projects__tags">
                      <button v-for="tag in project.tags" @click.prevent="callback" :data-filter="tag" type="button" class="projects__tag">
                        {{ tag }}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="projects__pagination" v-if="getPages() !== 1">
              <button type="button" class="projects__prev" @click.prevent="goPrevPage" :disabled="currentPage === 1">Previous</button>
              <button type="button" class="projects__page" v-for="page in getPages()" @click.prevent="setCurrentPage(page)" :data-page="page" :class="{ 'projects__page--active': updatePage == page }">
                {{page}}
              </button>
              <button type="button" class="projects__next" @click.prevent="goNextPage" :disabled="currentPage === pagesTotal">Next</button>
            </div>
          </div>`,
      },
    }
  });

})();
(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
'use strict';

var _vue_filter = require('./modules/vue_filter');

var _vue_filter2 = _interopRequireDefault(_vue_filter);

var _detectChrome = require('./modules/detectChrome');

var _detectChrome2 = _interopRequireDefault(_detectChrome);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

(function ($) {
  'use strict';

  // When DOM is ready

  $(function () {

    _detectChrome2.default.init();
  });
})(jQuery);

},{"./modules/detectChrome":2,"./modules/vue_filter":3}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var detectChrome = {
  init: function init() {
    if (this.detectChrome()) {
      document.body.classList.add('chrome');
    }
  },
  detectChrome: function detectChrome() {
    return (/Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)
    );
  }
};

exports.default = detectChrome;

},{}],3:[function(require,module,exports){
'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(function () {
  var el = document.getElementById('filter');

  if (!el) {
    return;
  }

  var filter = new Vue({
    el: el,
    mounted: function mounted() {
      var _this2 = this;

      var _this = this;
      var resizeTimer = void 0;

      $(document).off('click.toggleDropDown touchend.toggleDropDown').on('click.toggleDropDown touchend.toggleDropDown', function (e) {

        if (window.innerWidth < 640) {
          if ($(e.target).hasClass('filter__categories') || $(e.target).parent().hasClass('filter__categories') || $(e.target).hasClass('filter__title')) {
            return;
          } else {
            _this.mobileDropDown.isVisible = false;
          }
        }
      });

      $(window).on('resize', function (e) {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
          _this2.onResize();
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
        isVisible: false
      },
      currentPage: 1,
      projectPerPage: 12,
      filterButtons: [{ text: 'WordPress', filter: 'WordPress', isActive: false, isDisabled: false }, { text: 'PHP', filter: 'PHP', isActive: false, isDisabled: false }, { text: 'HTML5/CSS3', filter: 'HTML5/CSS3', isActive: false, isDisabled: false }, { text: 'JavaScript', filter: 'JavaScript', isActive: false, isDisabled: false }, { text: 'Vue.js', filter: 'Vue.js', isActive: false, isDisabled: false }, { text: 'React.js', filter: 'React.js', isActive: false, isDisabled: false }, { text: 'Node.js', filter: 'Node.js', isActive: false, isDisabled: false }, { text: 'Magento', filter: 'Magento', isActive: false, isDisabled: false }, { text: 'Mobile App', filter: 'Mobile App', isActive: false, isDisabled: false }],
      filterProjects: [{
        id: 0,
        title: 'Yii2 Starter',
        description: 'JustCoded Project Starter for all projects based on the YII2 PHP Framework.',
        link: 'https://github.com/justcoded/yii2-starter',
        img: {
          src: 'assets/images/yii2_starter.jpg',
          srcset: 'assets/images/yii2_starter.jpg 1x, assets/images/yii2_starter-2x.jpg 2x'
        },
        tags: ['PHP'],
        isVisible: true
      }, {
        id: 1,
        title: 'Just Image Optimizer',
        description: 'WordPress plugin to compress image files, improve performance and boost your SEO rank using Google Page Speed Insights compression and optimization.',
        link: 'https://github.com/justcoded/just-image-optimizer',
        img: {
          src: 'assets/images/just_image_optimizer.jpg',
          srcset: 'assets/images/just_image_optimizer.jpg 1x, assets/images/just_image_optimizer-2x.jpg 2x'
        },
        tags: ['PHP', 'WordPress'],
        isVisible: true
      }, {
        id: 2,
        title: 'Just Responsive Images',
        description: 'WordPress Plugin to support better responsive images with <picture> tag, backgrounds, retina support, etc.',
        link: 'https://github.com/justcoded/just-responsive-images',
        img: {
          src: 'assets/images/just_responsive_images.jpg',
          srcset: 'assets/images/just_responsive_images.jpg 1x, assets/images/just_responsive_images-2x.jpg 2x'
        },
        tags: ['PHP', 'WordPress'],
        isVisible: true
      }, {
        id: 3,
        title: 'Dribbble Oauth-2',
        description: 'Simple proxy server with NodeJS and ExpressJS that handles authorisation and gets an access token using our library.',
        link: 'https://github.com/justcoded/dribbble-oauth2',
        img: {
          src: 'assets/images/dribbble.jpg',
          srcset: 'assets/images/dribbble.jpg 1x, assets/images/dribbble-2x.jpg 2x'
        },
        tags: ['JavaScript', 'React.js'],
        isVisible: true
      }, {
        id: 4,
        title: 'Web Starter Kit',
        description: 'Web Starter Kit is an opinionated boilerplate for web development.A solid starting point for both professionals and newcomers to the industry.',
        link: 'https://github.com/justcoded/web-starter-kit',
        img: {
          src: 'assets/images/web_starter.jpg',
          srcset: 'assets/images/web_starter.jpg, assets/images/web_starter-2x.jpg 2x'
        },
        tags: ['HTML5/CSS3', 'Node.js'],
        isVisible: true
      }, {
        id: 5,
        title: 'WordPress Theme Boilerplate',
        description: 'WordPress theme boilerplate with an improved classes-based code structure, theme wrapper, and security patches.',
        link: 'https://github.com/justcoded/wordpress-theme-boilerplate',
        img: {
          src: 'assets/images/wp_boilerplate.jpg',
          srcset: 'assets/images/wp_boilerplate.jpg 1x, assets/images/wp_boilerplate-2x.jpg 2x'
        },
        tags: ['PHP', 'WordPress'],
        isVisible: true
      }, {
        id: 6,
        title: 'WordPress Theme Framework',
        description: 'Lightweight MVC theming framework for developers who want to better organize their own custom themes with an MVC approach.',
        link: 'https://github.com/justcoded/wordpress-theme-framework',
        img: {
          src: 'assets/images/wp_theme.jpg',
          srcset: 'assets/images/wp_theme.jpg 1x, assets/images/wp_theme-2x.jpg 2x'
        },
        tags: ['PHP', 'WordPress'],
        isVisible: true
      }, {
        id: 7,
        title: 'PHP CodeSniffer',
        description: 'PHP Code Sniffer custom rules pack. This package contains a default set of rules and custom rules which are used in all best IT projects.',
        link: 'https://github.com/justcoded/phpcodesniffer',
        img: {
          src: 'assets/images/codeSniffer.jpg',
          srcset: 'assets/images/codeSniffer.jpg 1x, assets/images/codeSniffer-2x.jpg 2x'
        },
        tags: ['PHP'],
        isVisible: true
      }, {
        id: 8,
        title: 'jQuery Star',
        description: 'This is a jQuery plugin that adds some "Magic" to your site. By "Magic" we mean shining stars, which appear when you move your mouse.',
        link: 'https://github.com/justcoded/jquery-stars',
        img: {
          src: 'assets/images/jQuery_star.jpg',
          srcset: 'assets/images/jQuery_star.jpg 1x, assets/images/jQuery_star-2x.jpg 2x'
        },
        tags: ['HTML5/CSS3'],
        isVisible: true
      }, {
        id: 9,
        title: 'WordPress Starter',
        description: 'WordPress Project Template is a skeleton best for rapidly creating projects with modern development tools, has easy configuration, and an improved folder structure.',
        link: 'https://github.com/justcoded/wordpress-starter',
        img: {
          src: 'assets/images/wp_starter.jpg',
          srcset: 'assets/images/wp_starter.jpg 1x, assets/images/wp_starter-2x.jpg 2x'
        },
        tags: ['PHP', 'WordPress'],
        isVisible: true
      }, {
        id: 10,
        title: 'Wordpress Composer Scripts',
        description: 'Custom Composer scripts for WordPress Project Template.',
        link: 'https://github.com/justcoded/wordpress-composer-scripts',
        img: {
          src: 'assets/images/composer.jpg',
          srcset: 'assets/images/composer.jpg 1x, assets/images/composer-2x.jpg 2x'
        },
        tags: ['PHP', 'WordPress'],
        isVisible: true
      }, {
        id: 11,
        title: 'NPM jcn',
        description: 'Command line tool for JustCoded which allows the creation of a starter boilerplate for different kinds of projects.',
        link: 'https://github.com/justcoded/npm-jcn',
        img: {
          src: 'assets/images/npm_jcn.jpg',
          srcset: 'assets/images/npm_jcn.jpg 1x, assets/images/npm_jcn-2x.jpg 2x'
        },
        tags: ['JavaScript', 'Node.js'],
        isVisible: true
      }, {
        id: 12,
        title: 'Form Handler',
        description: 'Validate simple HTML form requests, send email notifications with ease. Best for pure HTML websites.',
        link: 'https://github.com/justcoded/form-handler',
        img: {
          src: 'assets/images/form_handler.jpg',
          srcset: 'assets/images/form_handler.jpg 1x, assets/images/form_handler-2x.jpg 2x'
        },
        tags: ['PHP'],
        isVisible: true
      }, {
        id: 13,
        title: 'Yii2 Settings',
        description: 'Yii2 Settings Component with IDE autocompletion for setting keys, replace params.',
        link: 'https://github.com/justcoded/yii2-settings',
        img: {
          src: 'assets/images/yii2_settings.jpg',
          srcset: 'assets/images/yii2_settings.jpg 1x, assets/images/yii2_settings-2x.jpg 2x'
        },
        tags: ['PHP'],
        isVisible: true
      }, {
        id: 14,
        title: 'React.JS Example',
        description: 'Web Application for booking meeting rooms using Google Calendar and based on the React.js library.',
        link: 'https://github.com/justcoded/react.js-example',
        img: {
          src: 'assets/images/react_example.jpg',
          srcset: 'assets/images/react_example.jpg 1x, assets/images/react_example-2x.jpg 2x'
        },
        tags: ['JavaScript', 'React.js'],
        isVisible: true
      }, {
        id: 15,
        title: 'Yii2 Rbac',
        description: 'Yii2 RBAC Manager with nice graphic interface and advanced AccessFilter with automatic route-based access.',
        link: 'https://github.com/justcoded/yii2-rbac',
        img: {
          src: 'assets/images/yii2_rbac.jpg',
          srcset: 'assets/images/yii2_rbac.jpg 1x, assets/images/yii2_rbac-2x.jpg 2x'
        },
        tags: ['PHP'],
        isVisible: true
      }, {
        id: 16,
        title: 'Tutorial Shopify Nodejs App',
        description: 'Example of a Shopify embedded app on Node.js that demonstrates how to create applications for a Shopify platform.',
        link: 'https://github.com/justcoded/tutorial_shopify_nodejs_app',
        img: {
          src: 'assets/images/tutorial_shopify.jpg',
          srcset: 'assets/images/tutorial_shopify.jpg 1x, assets/images/tutorial_shopify-2x.jpg 2x'
        },
        tags: ['JavaScript', 'Node.js'],
        isVisible: true
      }, {
        id: 17,
        title: 'Examples SCSS Bem Code',
        description: 'Small website that was developed using SCSS and BEM methodology. Also we used our Web Starter Kit and Node.js modules to optimize images.',
        link: 'https://github.com/justcoded/examples-scss-bem-code',
        img: {
          src: 'assets/images/bem_scss.jpg',
          srcset: 'assets/images/bem_scss.jpg 1x, assets/images/bem_scss-2x.jpg 2x'
        },
        tags: ['HTML5/CSS3'],
        isVisible: true
      }, {
        id: 18,
        title: 'Just Tinymce Custom Styles',
        description: 'WordPress Plugin to modify TinyMCE style_formats option. Also there is a preset for Bootstrap styles.',
        link: 'https://github.com/justcoded/just-tinymce-custom-styles',
        img: {
          src: 'assets/images/just_tinymce_custom_styles.jpg',
          srcset: 'assets/images/just_tinymce_custom_styles.jpg 1x, assets/images/just_tinymce_custom_styles-2x.jpg 2x'
        },
        tags: ['PHP', 'WordPress'],
        isVisible: true
      }, {
        id: 19,
        title: 'WP Host Update',
        description: 'When you move WordPress to another host you usually need to update the database with new URLs inside a lot of pages.',
        link: 'https://github.com/justcoded/wp-host-update',
        img: {
          src: 'assets/images/wp_host.jpg',
          srcset: 'assets/images/wp_host.jpg 1x, assets/images/wp_host-2x.jpg 2x'
        },
        tags: ['PHP', 'WordPress'],
        isVisible: true
      }, {
        id: 20,
        title: 'Magento2: configurable back in stock',
        description: 'Default product alerts in Magento 2 work only for the whole configurable products. This module allows customers to select specific configurations to get notified about.',
        link: 'https://github.com/justcoded/magento2-configurable-back-in-stock',
        img: {
          src: 'assets/images/magento.jpg',
          srcset: 'assets/images/magento.jpg 1x, assets/images/magento-2x.jpg 2x'
        },
        tags: ['PHP', 'Magento'],
        isVisible: true
      }, {
        id: 21,
        title: 'Magento2: local config',
        description: 'The module helps developers who work with remote databases or need to import databases frequently to the local machine.',
        link: 'https://github.com/justcoded/magento2-local-config',
        img: {
          src: 'assets/images/magento_local_config.jpg',
          srcset: 'assets/images/magento_local_config.jpg 1x, assets/images/magento_local_config-2x.jpg 2x'
        },
        tags: ['PHP', 'Magento'],
        isVisible: true
      }, {
        id: 22,
        title: 'Magento pci auth',
        description: ' This module helps make Magento 1.x installation more PCI-compliant by controlling user password behavior.',
        link: 'https://github.com/justcoded/magento-pci-auth',
        img: {
          src: 'assets/images/magento_pci_auth.jpg',
          srcset: 'assets/images/magento_pci_auth.jpg 1x, assets/images/magento_pci_auth-2x.jpg 2x'
        },
        tags: ['PHP', 'Magento'],
        isVisible: true
      }, {
        id: 23,
        title: 'Vue.js-grid-filter',
        description: 'This module provides a filtered view of posts (or any kind of listing data), filtering/pagination/sorting should be realized on backend.',
        link: 'https://github.com/justcoded/vuejs-grid-filter',
        img: {
          src: 'assets/images/vuejs_filter.jpg',
          srcset: 'assets/images/vuejs_filter.jpg 1x, assets/images/vuejs_filter-2x.jpg 2x'
        },
        tags: ['JavaScript', 'Vue.js'],
        isVisible: true
      }, {
        id: 24,
        title: 'React-newsapi.org-app',
        description: 'News App based on the React Native framework that provides news from different countries and categories.',
        link: 'https://github.com/justcoded/react-newsapi.org-app',
        img: {
          src: 'assets/images/react_newsapi.jpg',
          srcset: 'assets/images/react_newsapi.jpg 1x, assets/images/react_newsapi-2x.jpg 2x'
        },
        tags: ['JavaScript', 'React.js', 'Mobile App'],
        isVisible: true
      }, {
        id: 25,
        title: 'Animations-city',
        description: 'Web-page filled with animations which respond to the actions of users. The view of the city has many shifting details, so we chose a template which you’ll notice on the right hand side.',
        link: 'https://github.com/justcoded/animations-city',
        img: {
          src: 'assets/images/animations_city.jpg',
          srcset: 'assets/images/animations_city.jpg 1x, assets/images/animations_city-2x.jpg 2x'
        },
        tags: ['JavaScript', 'HTML5/CSS3'],
        isVisible: true
      }, {
        id: 26,
        title: 'justcoded.github.io',
        description: 'This is a handy list of our modules and components available at GitHub.',
        link: 'https://github.com/justcoded/justcoded.github.io',
        img: {
          src: 'assets/images/github_io.jpg',
          srcset: 'assets/images/github_io.jpg 1x, assets/images/github_io-2x.jpg 2x'
        },
        tags: ['Vue.js', 'JavaScript', 'HTML5/CSS3'],
        isVisible: true
      }]
    },

    created: function created(e) {
      var _this3 = this;

      if (!this.getUrlTags()) {
        return;
      }

      var urlObj = this.getUrlTags();
      this.filters = Array.isArray(urlObj.tags) ? urlObj.tags : urlObj.tags.split();
      this.urlHash.tags = this.filters;

      this.filters.map(function (filter) {
        _this3.filterButtons.map(function (btn) {
          if (btn.filter === filter) {
            btn.isActive = true;
          }
        });
      });
    },

    methods: {
      disableButtons: function disableButtons(e) {
        this.filterButtons.map(function (btn) {
          btn.isDisabled = true;
          setTimeout(function () {
            return btn.isDisabled = false;
          }, 500);
        });
      },

      onResize: function onResize() {
        var $selectTitle = $('.filter__title');

        if (window.innerWidth < 640) {
          if (this.filters.length) {
            $selectTitle.text(this.filters.join(', '));
          } else {
            $selectTitle.text(this.filterText);
          }
        } else {
          $selectTitle.text(this.filterText);
        }
      },

      setFilter: function setFilter(e) {
        var _this4 = this;

        var el = e.target;
        var filterTag = el.dataset.filter;
        var found = this.filters.indexOf(filterTag) >= 0;

        var $selectTitle = $('.filter__title');
        var selectText = this.filterText;

        this.isLoading = true;
        this.disableButtons(e);

        setTimeout(function () {
          setTimeout(function () {
            return _this4.isLoading = false;
          }, 200);

          if (el.classList.contains('projects__tag')) {
            _this4.filters = [filterTag];
            _this4.filterButtons.map(function (btn) {
              if (btn.filter !== filterTag) {
                btn.isActive = false;
              } else {
                btn.isActive = true;
              }
            });
          } else {
            if (!found) {
              _this4.filters.push(filterTag);
            } else if (found) {
              _this4.filters.splice(_this4.filters.indexOf(filterTag), 1);
            }

            _this4.filterButtons.map(function (btn) {
              var target = filterTag === btn.filter;
              if (target && !btn.isActive) {
                btn.isActive = true;
              } else if (target && btn.isActive) {
                btn.isActive = false;
              }
            });
          }

          if (window.innerWidth < 640) {
            if (_this4.filters.length) {
              $selectTitle.text(_this4.filters.join(', '));
            } else {
              $selectTitle.text(selectText);
            }
          }

          _this4.currentPage = 1;
          _this4.setUrlTags('#tags=');
        }, 300);
      },

      clearAll: function clearAll() {
        var _this5 = this;

        this.isLoading = true;

        setTimeout(function () {
          setTimeout(function () {
            return _this5.isLoading = false;
          }, 200);
          _this5.filters = [];

          _this5.filterButtons.map(function (btn) {
            btn.isActive = false;
          });

          if (window.innerWidth < 640) {
            $('.filter__title').text('Select Technology');
          }

          _this5.setUrlTags('#tags=');
        }, 300);
      },

      getUrlTags: function getUrlTags() {
        return location.hash.replace('#', '').split('&').reduce(function (filters, data) {
          var key = data.split('=')[0];
          var value = data.split('=')[1];

          if (!key || !value) {
            return;
          } else {
            return Object.assign({}, filters, _defineProperty({}, key, value.indexOf(',') !== -1 ? value.replace('%20', ' ').split(',') : value.replace('%20', ' ')));
          }
        }, {});
      },

      setUrlTags: function setUrlTags(str) {
        this.urlHash.tags = this.filters;

        if (this.urlHash.tags.length) {
          history.pushState(null, null, str + this.urlHash.tags);
        } else {
          history.pushState(null, null, ' ');
        }
      },

      toggleMobileCategories: function toggleMobileCategories(e) {
        if (window.innerWidth < 640) {
          this.mobileDropDown.isVisible = !this.mobileDropDown.isVisible;
        }
      }

    },
    computed: {
      getFilteredProjects: function getFilteredProjects() {
        if (this.filters.length < 1) {
          return this.filterProjects;
        }

        var _this = this;

        return this.filterProjects.filter(function (project) {
          return project.tags.some(function (tag) {
            return _this.filters.indexOf(tag) >= 0;
          });
        });
      },
      updatePage: function updatePage() {
        return this.currentPage;
      }
    },
    components: {
      'filter-button': {
        props: ['button', 'callback'],
        template: '<button type="button" class="filter__button" @click.prevent="callback">\n            {{ button.text }}\n          </button>'
      },
      'filter-projects': {
        props: ['projects', 'callback', 'currentPage'],
        data: function data() {
          return {
            projectsPerPage: 12,
            pagesTotal: null
          };
        },
        methods: {
          getPages: function getPages() {
            this.pagesTotal = Math.ceil(this.$props.projects.length / this.projectsPerPage);
            return this.pagesTotal;
          },
          setCurrentPage: function setCurrentPage(page) {
            var _this6 = this;

            var currentPage = this.$parent.currentPage;

            var $btns = $('.projects__page');

            this.$parent.isLoading = true;

            setTimeout(function () {
              setTimeout(function () {
                return _this6.$parent.isLoading = false;
              }, 200);

              $btns.each(function (i, el) {
                var dataPage = $(this).attr('data-page');
                if (dataPage == page) {
                  $(this).addClass('projects__page--active');
                } else {
                  $(this).removeClass('projects__page--active');
                }
              });

              if (currentPage === page) {
                return currentPage;
              }

              _this6.$parent.currentPage = page;
              return _this6.$parent.currentPage;
            }, 300);
          },
          goPrevPage: function goPrevPage() {
            var page = this.$parent.currentPage - 1;
            if (page < 1) {
              return;
            }

            return this.setCurrentPage(page);
          },
          goNextPage: function goNextPage() {
            var page = this.$parent.currentPage + 1;
            if (page > this.getPages()) {
              return;
            }

            return this.setCurrentPage(page);
          }
        },
        computed: {
          getProjectsPerPage: function getProjectsPerPage() {
            var $props = this.$props,
                currentPage = this.currentPage,
                projectsPerPage = this.projectsPerPage;


            return this.$props.projects.concat().splice((currentPage - 1) * projectsPerPage, projectsPerPage);
          },

          updatePage: function updatePage() {
            return this.$parent.currentPage;
          }
        },
        template: '<div class="projects">\n            <div class="projects__inner">\n              <div class="projects__item" v-for="project in getProjectsPerPage" :key="project.id">\n                <div class="projects__item-inner">\n                  <div class="projects__logo">\n                    <a :href="project.link" target="_blank">\n                      <img :srcset="project.img.srcset" :src="project.img.src" alt="image description">\n                    </a>\n                  </div>\n                  <div class="projects__descr">\n                    <h2 class="projects__title">\n                      <a :href="project.link" target="_blank">{{ project.title }}</a>\n                    </h2>\n                    <p class="projects__txt">{{ project.description }}</p>\n                    <div class="projects__tags">\n                      <button v-for="tag in project.tags" @click.prevent="callback" :data-filter="tag" type="button" class="projects__tag">\n                        {{ tag }}\n                      </button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class="projects__pagination" v-if="getPages() !== 1">\n              <button type="button" class="projects__prev" @click.prevent="goPrevPage" :disabled="currentPage === 1">Previous</button>\n              <button type="button" class="projects__page" v-for="page in getPages()" @click.prevent="setCurrentPage(page)" :data-page="page" :class="{ \'projects__page--active\': updatePage == page }">\n                {{page}}\n              </button>\n              <button type="button" class="projects__next" @click.prevent="goNextPage" :disabled="currentPage === pagesTotal">Next</button>\n            </div>\n          </div>'
      }
    }
  });
})();

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYXBwLmpzIiwic3JjL2pzL21vZHVsZXMvZGV0ZWN0Q2hyb21lLmpzIiwic3JjL2pzL21vZHVsZXMvdnVlX2ZpbHRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDS0E7Ozs7QUFDQTs7Ozs7O0FBTkE7QUFDQTtBQUNBO0FBQ0E7O0FBS0EsQ0FBRSxVQUFDLENBQUQsRUFBTztBQUNQOztBQUVBOztBQUNBLElBQUUsWUFBTTs7QUFFTiwyQkFBYSxJQUFiO0FBRUQsR0FKRDtBQU1ELENBVkQsRUFVRyxNQVZIOzs7Ozs7OztBQ1JBLElBQUksZUFBZTtBQUNqQixRQUFNLGdCQUFXO0FBQ2YsUUFBSyxLQUFLLFlBQUwsRUFBTCxFQUEyQjtBQUN6QixlQUFTLElBQVQsQ0FBYyxTQUFkLENBQXdCLEdBQXhCLENBQTRCLFFBQTVCO0FBQ0Q7QUFDRixHQUxnQjtBQU1qQixnQkFBYyx3QkFBVztBQUN2QixXQUFPLFVBQVMsSUFBVCxDQUFjLFVBQVUsU0FBeEIsS0FBc0MsYUFBYSxJQUFiLENBQWtCLFVBQVUsTUFBNUI7QUFBN0M7QUFDRDtBQVJnQixDQUFuQjs7a0JBV2UsWTs7Ozs7OztBQ1hmLENBQUMsWUFBTTtBQUNMLE1BQUksS0FBSyxTQUFTLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBVDs7QUFFQSxNQUFLLENBQUMsRUFBTixFQUFXO0FBQ1Q7QUFDRDs7QUFFRCxNQUFNLFNBQVMsSUFBSSxHQUFKLENBQVE7QUFDckIsUUFBSSxFQURpQjtBQUVyQixhQUFTLG1CQUFXO0FBQUE7O0FBQ2xCLFVBQUksUUFBUSxJQUFaO0FBQ0EsVUFBSSxvQkFBSjs7QUFFQSxRQUFFLFFBQUYsRUFBWSxHQUFaLENBQWdCLDhDQUFoQixFQUFnRSxFQUFoRSxDQUFtRSw4Q0FBbkUsRUFBbUgsVUFBUyxDQUFULEVBQVk7O0FBRTdILFlBQUssT0FBTyxVQUFQLEdBQW9CLEdBQXpCLEVBQStCO0FBQzdCLGNBQUssRUFBRSxFQUFFLE1BQUosRUFBWSxRQUFaLENBQXFCLG9CQUFyQixLQUE4QyxFQUFFLEVBQUUsTUFBSixFQUFZLE1BQVosR0FBcUIsUUFBckIsQ0FBOEIsb0JBQTlCLENBQTlDLElBQXFHLEVBQUUsRUFBRSxNQUFKLEVBQVksUUFBWixDQUFxQixlQUFyQixDQUExRyxFQUFrSjtBQUNoSjtBQUNELFdBRkQsTUFFTztBQUNMLGtCQUFNLGNBQU4sQ0FBcUIsU0FBckIsR0FBaUMsS0FBakM7QUFDRDtBQUNGO0FBQ0YsT0FURDs7QUFXQSxRQUFFLE1BQUYsRUFBVSxFQUFWLENBQWEsUUFBYixFQUF1QixVQUFDLENBQUQsRUFBTztBQUM1QixxQkFBYSxXQUFiO0FBQ0Esc0JBQWMsV0FBVyxZQUFNO0FBQzdCLGlCQUFLLFFBQUw7QUFDRCxTQUZhLEVBRVgsR0FGVyxDQUFkO0FBR0QsT0FMRDtBQU9ELEtBeEJvQjtBQXlCckIsVUFBTTtBQUNKLGVBQVMsRUFETDtBQUVKLG9CQUFjLEdBRlY7QUFHSixlQUFTLEVBSEw7QUFJSixrQkFBWSxtQkFKUjtBQUtKLGlCQUFXLEtBTFA7QUFNSixzQkFBZ0I7QUFDZCxtQkFBVztBQURHLE9BTlo7QUFTSixtQkFBYSxDQVRUO0FBVUosc0JBQWdCLEVBVlo7QUFXSixxQkFBZSxDQUNiLEVBQUUsTUFBTSxXQUFSLEVBQXFCLFFBQVEsV0FBN0IsRUFBMEMsVUFBVSxLQUFwRCxFQUEyRCxZQUFZLEtBQXZFLEVBRGEsRUFFYixFQUFFLE1BQU0sS0FBUixFQUFlLFFBQVEsS0FBdkIsRUFBOEIsVUFBVSxLQUF4QyxFQUErQyxZQUFZLEtBQTNELEVBRmEsRUFHYixFQUFFLE1BQU0sWUFBUixFQUFzQixRQUFRLFlBQTlCLEVBQTRDLFVBQVUsS0FBdEQsRUFBNkQsWUFBWSxLQUF6RSxFQUhhLEVBSWIsRUFBRSxNQUFNLFlBQVIsRUFBc0IsUUFBUSxZQUE5QixFQUE0QyxVQUFVLEtBQXRELEVBQTZELFlBQVksS0FBekUsRUFKYSxFQUtiLEVBQUUsTUFBTSxRQUFSLEVBQWtCLFFBQVEsUUFBMUIsRUFBb0MsVUFBVSxLQUE5QyxFQUFxRCxZQUFZLEtBQWpFLEVBTGEsRUFNYixFQUFFLE1BQU0sVUFBUixFQUFvQixRQUFRLFVBQTVCLEVBQXdDLFVBQVUsS0FBbEQsRUFBeUQsWUFBWSxLQUFyRSxFQU5hLEVBT2IsRUFBRSxNQUFNLFNBQVIsRUFBbUIsUUFBUSxTQUEzQixFQUFzQyxVQUFVLEtBQWhELEVBQXVELFlBQVksS0FBbkUsRUFQYSxFQVFiLEVBQUUsTUFBTSxTQUFSLEVBQW1CLFFBQVEsU0FBM0IsRUFBc0MsVUFBVSxLQUFoRCxFQUF1RCxZQUFZLEtBQW5FLEVBUmEsRUFTYixFQUFFLE1BQU0sWUFBUixFQUFzQixRQUFRLFlBQTlCLEVBQTRDLFVBQVUsS0FBdEQsRUFBNkQsWUFBWSxLQUF6RSxFQVRhLENBWFg7QUFzQkosc0JBQWdCLENBQ2Q7QUFDRSxZQUFJLENBRE47QUFFRSxlQUFPLGNBRlQ7QUFHRSxxQkFBYSw2RUFIZjtBQUlFLGNBQU0sMkNBSlI7QUFLRSxhQUFLO0FBQ0gsZUFBSyxnQ0FERjtBQUVILGtCQUFRO0FBRkwsU0FMUDtBQVNFLGNBQU0sQ0FBQyxLQUFELENBVFI7QUFVRSxtQkFBVztBQVZiLE9BRGMsRUFhZDtBQUNFLFlBQUksQ0FETjtBQUVFLGVBQU8sc0JBRlQ7QUFHRSxxQkFBYSxzSkFIZjtBQUlFLGNBQU0sbURBSlI7QUFLRSxhQUFLO0FBQ0gsZUFBSyx3Q0FERjtBQUVILGtCQUFRO0FBRkwsU0FMUDtBQVNFLGNBQU0sQ0FBQyxLQUFELEVBQVEsV0FBUixDQVRSO0FBVUUsbUJBQVc7QUFWYixPQWJjLEVBeUJkO0FBQ0UsWUFBSSxDQUROO0FBRUUsZUFBTyx3QkFGVDtBQUdFLHFCQUFhLDRHQUhmO0FBSUUsY0FBTSxxREFKUjtBQUtFLGFBQUs7QUFDSCxlQUFLLDBDQURGO0FBRUgsa0JBQVE7QUFGTCxTQUxQO0FBU0UsY0FBTSxDQUFDLEtBQUQsRUFBUSxXQUFSLENBVFI7QUFVRSxtQkFBVztBQVZiLE9BekJjLEVBcUNkO0FBQ0UsWUFBSSxDQUROO0FBRUUsZUFBTyxrQkFGVDtBQUdFLHFCQUFhLHNIQUhmO0FBSUUsY0FBTSw4Q0FKUjtBQUtFLGFBQUs7QUFDSCxlQUFLLDRCQURGO0FBRUgsa0JBQVE7QUFGTCxTQUxQO0FBU0UsY0FBTSxDQUFDLFlBQUQsRUFBZSxVQUFmLENBVFI7QUFVRSxtQkFBVztBQVZiLE9BckNjLEVBaURkO0FBQ0UsWUFBSSxDQUROO0FBRUUsZUFBTyxpQkFGVDtBQUdFLHFCQUFhLGdKQUhmO0FBSUUsY0FBTSw4Q0FKUjtBQUtFLGFBQUs7QUFDSCxlQUFLLCtCQURGO0FBRUgsa0JBQVE7QUFGTCxTQUxQO0FBU0UsY0FBTSxDQUFDLFlBQUQsRUFBZSxTQUFmLENBVFI7QUFVRSxtQkFBVztBQVZiLE9BakRjLEVBNkRkO0FBQ0UsWUFBSSxDQUROO0FBRUUsZUFBTyw2QkFGVDtBQUdFLHFCQUFhLGlIQUhmO0FBSUUsY0FBTSwwREFKUjtBQUtFLGFBQUs7QUFDSCxlQUFLLGtDQURGO0FBRUgsa0JBQVE7QUFGTCxTQUxQO0FBU0UsY0FBTSxDQUFDLEtBQUQsRUFBUSxXQUFSLENBVFI7QUFVRSxtQkFBVztBQVZiLE9BN0RjLEVBeUVkO0FBQ0UsWUFBSSxDQUROO0FBRUUsZUFBTywyQkFGVDtBQUdFLHFCQUFhLDRIQUhmO0FBSUUsY0FBTSx3REFKUjtBQUtFLGFBQUs7QUFDSCxlQUFLLDRCQURGO0FBRUgsa0JBQVE7QUFGTCxTQUxQO0FBU0UsY0FBTSxDQUFDLEtBQUQsRUFBUSxXQUFSLENBVFI7QUFVRSxtQkFBVztBQVZiLE9BekVjLEVBcUZkO0FBQ0UsWUFBSSxDQUROO0FBRUUsZUFBTyxpQkFGVDtBQUdFLHFCQUFhLDJJQUhmO0FBSUUsY0FBTSw2Q0FKUjtBQUtFLGFBQUs7QUFDSCxlQUFLLCtCQURGO0FBRUgsa0JBQVE7QUFGTCxTQUxQO0FBU0UsY0FBTSxDQUFDLEtBQUQsQ0FUUjtBQVVFLG1CQUFXO0FBVmIsT0FyRmMsRUFpR2Q7QUFDRSxZQUFJLENBRE47QUFFRSxlQUFPLGFBRlQ7QUFHRSxxQkFBYSx1SUFIZjtBQUlFLGNBQU0sMkNBSlI7QUFLRSxhQUFLO0FBQ0gsZUFBSywrQkFERjtBQUVILGtCQUFRO0FBRkwsU0FMUDtBQVNFLGNBQU0sQ0FBQyxZQUFELENBVFI7QUFVRSxtQkFBVztBQVZiLE9BakdjLEVBNkdkO0FBQ0UsWUFBSSxDQUROO0FBRUUsZUFBTyxtQkFGVDtBQUdFLHFCQUFhLHNLQUhmO0FBSUUsY0FBTSxnREFKUjtBQUtFLGFBQUs7QUFDSCxlQUFLLDhCQURGO0FBRUgsa0JBQVE7QUFGTCxTQUxQO0FBU0UsY0FBTSxDQUFDLEtBQUQsRUFBUSxXQUFSLENBVFI7QUFVRSxtQkFBVztBQVZiLE9BN0djLEVBeUhkO0FBQ0UsWUFBSSxFQUROO0FBRUUsZUFBTyw0QkFGVDtBQUdFLHFCQUFhLHlEQUhmO0FBSUUsY0FBTSx5REFKUjtBQUtFLGFBQUs7QUFDSCxlQUFLLDRCQURGO0FBRUgsa0JBQVE7QUFGTCxTQUxQO0FBU0UsY0FBTSxDQUFDLEtBQUQsRUFBUSxXQUFSLENBVFI7QUFVRSxtQkFBVztBQVZiLE9BekhjLEVBcUlkO0FBQ0UsWUFBSSxFQUROO0FBRUUsZUFBTyxTQUZUO0FBR0UscUJBQWEscUhBSGY7QUFJRSxjQUFNLHNDQUpSO0FBS0UsYUFBSztBQUNILGVBQUssMkJBREY7QUFFSCxrQkFBUTtBQUZMLFNBTFA7QUFTRSxjQUFNLENBQUMsWUFBRCxFQUFlLFNBQWYsQ0FUUjtBQVVFLG1CQUFXO0FBVmIsT0FySWMsRUFpSmQ7QUFDRSxZQUFJLEVBRE47QUFFRSxlQUFPLGNBRlQ7QUFHRSxxQkFBYSxzR0FIZjtBQUlFLGNBQU0sMkNBSlI7QUFLRSxhQUFLO0FBQ0gsZUFBSyxnQ0FERjtBQUVILGtCQUFRO0FBRkwsU0FMUDtBQVNFLGNBQU0sQ0FBQyxLQUFELENBVFI7QUFVRSxtQkFBVztBQVZiLE9BakpjLEVBNkpkO0FBQ0UsWUFBSSxFQUROO0FBRUUsZUFBTyxlQUZUO0FBR0UscUJBQWEsbUZBSGY7QUFJRSxjQUFNLDRDQUpSO0FBS0UsYUFBSztBQUNILGVBQUssaUNBREY7QUFFSCxrQkFBUTtBQUZMLFNBTFA7QUFTRSxjQUFNLENBQUMsS0FBRCxDQVRSO0FBVUUsbUJBQVc7QUFWYixPQTdKYyxFQXlLZDtBQUNFLFlBQUksRUFETjtBQUVFLGVBQU8sa0JBRlQ7QUFHRSxxQkFBYSxvR0FIZjtBQUlFLGNBQU0sK0NBSlI7QUFLRSxhQUFLO0FBQ0gsZUFBSyxpQ0FERjtBQUVILGtCQUFRO0FBRkwsU0FMUDtBQVNFLGNBQU0sQ0FBQyxZQUFELEVBQWUsVUFBZixDQVRSO0FBVUUsbUJBQVc7QUFWYixPQXpLYyxFQXFMZDtBQUNFLFlBQUksRUFETjtBQUVFLGVBQU8sV0FGVDtBQUdFLHFCQUFhLDRHQUhmO0FBSUUsY0FBTSx3Q0FKUjtBQUtFLGFBQUs7QUFDSCxlQUFLLDZCQURGO0FBRUgsa0JBQVE7QUFGTCxTQUxQO0FBU0UsY0FBTSxDQUFDLEtBQUQsQ0FUUjtBQVVFLG1CQUFXO0FBVmIsT0FyTGMsRUFpTWQ7QUFDRSxZQUFJLEVBRE47QUFFRSxlQUFPLDZCQUZUO0FBR0UscUJBQWEsbUhBSGY7QUFJRSxjQUFNLDBEQUpSO0FBS0UsYUFBSztBQUNILGVBQUssb0NBREY7QUFFSCxrQkFBUTtBQUZMLFNBTFA7QUFTRSxjQUFNLENBQUMsWUFBRCxFQUFlLFNBQWYsQ0FUUjtBQVVFLG1CQUFXO0FBVmIsT0FqTWMsRUE2TWQ7QUFDRSxZQUFJLEVBRE47QUFFRSxlQUFPLHdCQUZUO0FBR0UscUJBQWEsMklBSGY7QUFJRSxjQUFNLHFEQUpSO0FBS0UsYUFBSztBQUNILGVBQUssNEJBREY7QUFFSCxrQkFBUTtBQUZMLFNBTFA7QUFTRSxjQUFNLENBQUMsWUFBRCxDQVRSO0FBVUUsbUJBQVc7QUFWYixPQTdNYyxFQXlOZDtBQUNFLFlBQUksRUFETjtBQUVFLGVBQU8sNEJBRlQ7QUFHRSxxQkFBYSx1R0FIZjtBQUlFLGNBQU0seURBSlI7QUFLRSxhQUFLO0FBQ0gsZUFBSyw4Q0FERjtBQUVILGtCQUFRO0FBRkwsU0FMUDtBQVNFLGNBQU0sQ0FBQyxLQUFELEVBQVEsV0FBUixDQVRSO0FBVUUsbUJBQVc7QUFWYixPQXpOYyxFQXFPZDtBQUNFLFlBQUksRUFETjtBQUVFLGVBQU8sZ0JBRlQ7QUFHRSxxQkFBYSxzSEFIZjtBQUlFLGNBQU0sNkNBSlI7QUFLRSxhQUFLO0FBQ0gsZUFBSywyQkFERjtBQUVILGtCQUFRO0FBRkwsU0FMUDtBQVNFLGNBQU0sQ0FBQyxLQUFELEVBQVEsV0FBUixDQVRSO0FBVUUsbUJBQVc7QUFWYixPQXJPYyxFQWlQZDtBQUNFLFlBQUksRUFETjtBQUVFLGVBQU8sc0NBRlQ7QUFHRSxxQkFBYSwwS0FIZjtBQUlFLGNBQU0sa0VBSlI7QUFLRSxhQUFLO0FBQ0gsZUFBSywyQkFERjtBQUVILGtCQUFRO0FBRkwsU0FMUDtBQVNFLGNBQU0sQ0FBQyxLQUFELEVBQVEsU0FBUixDQVRSO0FBVUUsbUJBQVc7QUFWYixPQWpQYyxFQTZQZDtBQUNFLFlBQUksRUFETjtBQUVFLGVBQU8sd0JBRlQ7QUFHRSxxQkFBYSx5SEFIZjtBQUlFLGNBQU0sb0RBSlI7QUFLRSxhQUFLO0FBQ0gsZUFBSyx3Q0FERjtBQUVILGtCQUFRO0FBRkwsU0FMUDtBQVNFLGNBQU0sQ0FBQyxLQUFELEVBQVEsU0FBUixDQVRSO0FBVUUsbUJBQVc7QUFWYixPQTdQYyxFQXlRZDtBQUNFLFlBQUksRUFETjtBQUVFLGVBQU8sa0JBRlQ7QUFHRSxxQkFBYSw0R0FIZjtBQUlFLGNBQU0sK0NBSlI7QUFLRSxhQUFLO0FBQ0gsZUFBSyxvQ0FERjtBQUVILGtCQUFRO0FBRkwsU0FMUDtBQVNFLGNBQU0sQ0FBQyxLQUFELEVBQVEsU0FBUixDQVRSO0FBVUUsbUJBQVc7QUFWYixPQXpRYyxFQXFSZDtBQUNFLFlBQUksRUFETjtBQUVFLGVBQU8sb0JBRlQ7QUFHRSxxQkFBYSwwSUFIZjtBQUlFLGNBQU0sZ0RBSlI7QUFLRSxhQUFLO0FBQ0gsZUFBSyxnQ0FERjtBQUVILGtCQUFRO0FBRkwsU0FMUDtBQVNFLGNBQU0sQ0FBQyxZQUFELEVBQWUsUUFBZixDQVRSO0FBVUUsbUJBQVc7QUFWYixPQXJSYyxFQWlTZDtBQUNFLFlBQUksRUFETjtBQUVFLGVBQU8sdUJBRlQ7QUFHRSxxQkFBYSwwR0FIZjtBQUlFLGNBQU0sb0RBSlI7QUFLRSxhQUFLO0FBQ0gsZUFBSyxpQ0FERjtBQUVILGtCQUFRO0FBRkwsU0FMUDtBQVNFLGNBQU0sQ0FBQyxZQUFELEVBQWUsVUFBZixFQUEyQixZQUEzQixDQVRSO0FBVUUsbUJBQVc7QUFWYixPQWpTYyxFQTZTZDtBQUNFLFlBQUksRUFETjtBQUVFLGVBQU8saUJBRlQ7QUFHRSxxQkFBYSwyTEFIZjtBQUlFLGNBQU0sOENBSlI7QUFLRSxhQUFLO0FBQ0gsZUFBSyxtQ0FERjtBQUVILGtCQUFRO0FBRkwsU0FMUDtBQVNFLGNBQU0sQ0FBQyxZQUFELEVBQWUsWUFBZixDQVRSO0FBVUUsbUJBQVc7QUFWYixPQTdTYyxFQXlUZDtBQUNFLFlBQUksRUFETjtBQUVFLGVBQU8scUJBRlQ7QUFHRSxxQkFBYSx5RUFIZjtBQUlFLGNBQU0sa0RBSlI7QUFLRSxhQUFLO0FBQ0gsZUFBSyw2QkFERjtBQUVILGtCQUFRO0FBRkwsU0FMUDtBQVNFLGNBQU0sQ0FBQyxRQUFELEVBQVcsWUFBWCxFQUF5QixZQUF6QixDQVRSO0FBVUUsbUJBQVc7QUFWYixPQXpUYztBQXRCWixLQXpCZTs7QUF1WHJCLGFBQVMsaUJBQVMsQ0FBVCxFQUFZO0FBQUE7O0FBQ25CLFVBQUssQ0FBQyxLQUFLLFVBQUwsRUFBTixFQUEwQjtBQUN4QjtBQUNEOztBQUVELFVBQUksU0FBUyxLQUFLLFVBQUwsRUFBYjtBQUNBLFdBQUssT0FBTCxHQUFlLE1BQU0sT0FBTixDQUFjLE9BQU8sSUFBckIsSUFBNkIsT0FBTyxJQUFwQyxHQUEyQyxPQUFPLElBQVAsQ0FBWSxLQUFaLEVBQTFEO0FBQ0EsV0FBSyxPQUFMLENBQWEsSUFBYixHQUFvQixLQUFLLE9BQXpCOztBQUVBLFdBQUssT0FBTCxDQUFhLEdBQWIsQ0FBaUIsVUFBQyxNQUFELEVBQVk7QUFDM0IsZUFBSyxhQUFMLENBQW1CLEdBQW5CLENBQXVCLFVBQUMsR0FBRCxFQUFTO0FBQzlCLGNBQUssSUFBSSxNQUFKLEtBQWUsTUFBcEIsRUFBNkI7QUFDM0IsZ0JBQUksUUFBSixHQUFlLElBQWY7QUFDRDtBQUNGLFNBSkQ7QUFLRCxPQU5EO0FBT0QsS0F2WW9COztBQXlZckIsYUFBUztBQUNQLHNCQUFnQix3QkFBUyxDQUFULEVBQVk7QUFDMUIsYUFBSyxhQUFMLENBQW1CLEdBQW5CLENBQXVCLFVBQUMsR0FBRCxFQUFTO0FBQzlCLGNBQUksVUFBSixHQUFpQixJQUFqQjtBQUNBLHFCQUFXO0FBQUEsbUJBQU0sSUFBSSxVQUFKLEdBQWlCLEtBQXZCO0FBQUEsV0FBWCxFQUF5QyxHQUF6QztBQUNELFNBSEQ7QUFJRCxPQU5NOztBQVFQLGdCQUFVLG9CQUFXO0FBQ25CLFlBQUksZUFBZSxFQUFFLGdCQUFGLENBQW5COztBQUVBLFlBQUssT0FBTyxVQUFQLEdBQW9CLEdBQXpCLEVBQStCO0FBQzdCLGNBQUssS0FBSyxPQUFMLENBQWEsTUFBbEIsRUFBMkI7QUFDekIseUJBQWEsSUFBYixDQUFrQixLQUFLLE9BQUwsQ0FBYSxJQUFiLENBQWtCLElBQWxCLENBQWxCO0FBQ0QsV0FGRCxNQUVPO0FBQ0wseUJBQWEsSUFBYixDQUFrQixLQUFLLFVBQXZCO0FBQ0Q7QUFDRixTQU5ELE1BTU87QUFDTCx1QkFBYSxJQUFiLENBQWtCLEtBQUssVUFBdkI7QUFDRDtBQUNGLE9BcEJNOztBQXNCUCxpQkFBVyxtQkFBUyxDQUFULEVBQVk7QUFBQTs7QUFDckIsWUFBSSxLQUFLLEVBQUUsTUFBWDtBQUNBLFlBQUksWUFBWSxHQUFHLE9BQUgsQ0FBVyxNQUEzQjtBQUNBLFlBQUksUUFBUSxLQUFLLE9BQUwsQ0FBYSxPQUFiLENBQXFCLFNBQXJCLEtBQW1DLENBQS9DOztBQUVBLFlBQUksZUFBZSxFQUFFLGdCQUFGLENBQW5CO0FBQ0EsWUFBSSxhQUFhLEtBQUssVUFBdEI7O0FBRUEsYUFBSyxTQUFMLEdBQWlCLElBQWpCO0FBQ0EsYUFBSyxjQUFMLENBQW9CLENBQXBCOztBQUVBLG1CQUFXLFlBQU07QUFDZixxQkFBVztBQUFBLG1CQUFNLE9BQUssU0FBTCxHQUFpQixLQUF2QjtBQUFBLFdBQVgsRUFBeUMsR0FBekM7O0FBRUEsY0FBSyxHQUFHLFNBQUgsQ0FBYSxRQUFiLENBQXNCLGVBQXRCLENBQUwsRUFBOEM7QUFDNUMsbUJBQUssT0FBTCxHQUFlLENBQUMsU0FBRCxDQUFmO0FBQ0EsbUJBQUssYUFBTCxDQUFtQixHQUFuQixDQUF1QixVQUFTLEdBQVQsRUFBYztBQUNuQyxrQkFBSyxJQUFJLE1BQUosS0FBZSxTQUFwQixFQUFnQztBQUM5QixvQkFBSSxRQUFKLEdBQWUsS0FBZjtBQUNELGVBRkQsTUFFTztBQUNMLG9CQUFJLFFBQUosR0FBZSxJQUFmO0FBQ0Q7QUFDRixhQU5EO0FBT0QsV0FURCxNQVNPO0FBQ0wsZ0JBQUssQ0FBQyxLQUFOLEVBQWM7QUFDWixxQkFBSyxPQUFMLENBQWEsSUFBYixDQUFrQixTQUFsQjtBQUNELGFBRkQsTUFFTyxJQUFLLEtBQUwsRUFBYTtBQUNsQixxQkFBSyxPQUFMLENBQWEsTUFBYixDQUFvQixPQUFLLE9BQUwsQ0FBYSxPQUFiLENBQXFCLFNBQXJCLENBQXBCLEVBQXFELENBQXJEO0FBQ0Q7O0FBRUQsbUJBQUssYUFBTCxDQUFtQixHQUFuQixDQUF1QixVQUFTLEdBQVQsRUFBYztBQUNuQyxrQkFBSSxTQUFTLGNBQWMsSUFBSSxNQUEvQjtBQUNBLGtCQUFLLFVBQVUsQ0FBQyxJQUFJLFFBQXBCLEVBQStCO0FBQzdCLG9CQUFJLFFBQUosR0FBZSxJQUFmO0FBQ0QsZUFGRCxNQUVPLElBQUssVUFBVSxJQUFJLFFBQW5CLEVBQThCO0FBQ25DLG9CQUFJLFFBQUosR0FBZSxLQUFmO0FBQ0Q7QUFDRixhQVBEO0FBUUQ7O0FBRUQsY0FBSyxPQUFPLFVBQVAsR0FBb0IsR0FBekIsRUFBK0I7QUFDN0IsZ0JBQUssT0FBSyxPQUFMLENBQWEsTUFBbEIsRUFBMkI7QUFDekIsMkJBQWEsSUFBYixDQUFrQixPQUFLLE9BQUwsQ0FBYSxJQUFiLENBQWtCLElBQWxCLENBQWxCO0FBQ0QsYUFGRCxNQUVPO0FBQ0wsMkJBQWEsSUFBYixDQUFrQixVQUFsQjtBQUNEO0FBQ0Y7O0FBRUQsaUJBQUssV0FBTCxHQUFtQixDQUFuQjtBQUNBLGlCQUFLLFVBQUwsQ0FBZ0IsUUFBaEI7QUFFRCxTQXhDRCxFQXdDRyxHQXhDSDtBQXlDRCxPQTFFTTs7QUE0RVAsZ0JBQVUsb0JBQVc7QUFBQTs7QUFDbkIsYUFBSyxTQUFMLEdBQWlCLElBQWpCOztBQUVBLG1CQUFXLFlBQU07QUFDZixxQkFBVztBQUFBLG1CQUFNLE9BQUssU0FBTCxHQUFpQixLQUF2QjtBQUFBLFdBQVgsRUFBeUMsR0FBekM7QUFDQSxpQkFBSyxPQUFMLEdBQWUsRUFBZjs7QUFFQSxpQkFBSyxhQUFMLENBQW1CLEdBQW5CLENBQXVCLGVBQU87QUFDNUIsZ0JBQUksUUFBSixHQUFlLEtBQWY7QUFDRCxXQUZEOztBQUlBLGNBQUssT0FBTyxVQUFQLEdBQW9CLEdBQXpCLEVBQStCO0FBQzdCLGNBQUUsZ0JBQUYsRUFBb0IsSUFBcEIsQ0FBeUIsbUJBQXpCO0FBQ0Q7O0FBRUQsaUJBQUssVUFBTCxDQUFnQixRQUFoQjtBQUVELFNBZEQsRUFjRyxHQWRIO0FBZUQsT0E5Rk07O0FBZ0dQLGtCQUFZLHNCQUFXO0FBQ3JCLGVBQU8sU0FBUyxJQUFULENBQWMsT0FBZCxDQUFzQixHQUF0QixFQUEyQixFQUEzQixFQUErQixLQUEvQixDQUFxQyxHQUFyQyxFQUEwQyxNQUExQyxDQUFpRCxVQUFDLE9BQUQsRUFBVSxJQUFWLEVBQW1CO0FBQ3pFLGNBQU0sTUFBTSxLQUFLLEtBQUwsQ0FBVyxHQUFYLEVBQWdCLENBQWhCLENBQVo7QUFDQSxjQUFNLFFBQVEsS0FBSyxLQUFMLENBQVcsR0FBWCxFQUFnQixDQUFoQixDQUFkOztBQUVBLGNBQUssQ0FBQyxHQUFELElBQVEsQ0FBQyxLQUFkLEVBQXNCO0FBQ3BCO0FBQ0QsV0FGRCxNQUVPO0FBQ0wsbUJBQU8sT0FBTyxNQUFQLENBQWMsRUFBZCxFQUNMLE9BREssc0JBRUYsR0FGRSxFQUVJLE1BQU0sT0FBTixDQUFjLEdBQWQsTUFBdUIsQ0FBQyxDQUF4QixHQUE0QixNQUFNLE9BQU4sQ0FBYyxLQUFkLEVBQXFCLEdBQXJCLEVBQTBCLEtBQTFCLENBQWdDLEdBQWhDLENBQTVCLEdBQW1FLE1BQU0sT0FBTixDQUFjLEtBQWQsRUFBcUIsR0FBckIsQ0FGdkUsRUFBUDtBQUtEO0FBQ0YsU0FiTSxFQWFKLEVBYkksQ0FBUDtBQWNELE9BL0dNOztBQWlIUCxrQkFBWSxvQkFBUyxHQUFULEVBQWM7QUFDeEIsYUFBSyxPQUFMLENBQWEsSUFBYixHQUFvQixLQUFLLE9BQXpCOztBQUVBLFlBQUssS0FBSyxPQUFMLENBQWEsSUFBYixDQUFrQixNQUF2QixFQUFnQztBQUM5QixrQkFBUSxTQUFSLENBQWtCLElBQWxCLEVBQXdCLElBQXhCLEVBQThCLE1BQU0sS0FBSyxPQUFMLENBQWEsSUFBakQ7QUFDRCxTQUZELE1BRU87QUFDTCxrQkFBUSxTQUFSLENBQWtCLElBQWxCLEVBQXdCLElBQXhCLEVBQThCLEdBQTlCO0FBQ0Q7QUFDRixPQXpITTs7QUEySFAsOEJBQXdCLGdDQUFTLENBQVQsRUFBWTtBQUNsQyxZQUFLLE9BQU8sVUFBUCxHQUFvQixHQUF6QixFQUErQjtBQUM3QixlQUFLLGNBQUwsQ0FBb0IsU0FBcEIsR0FBZ0MsQ0FBQyxLQUFLLGNBQUwsQ0FBb0IsU0FBckQ7QUFDRDtBQUNGOztBQS9ITSxLQXpZWTtBQTJnQnJCLGNBQVU7QUFDUiwyQkFBcUIsK0JBQVc7QUFDOUIsWUFBSyxLQUFLLE9BQUwsQ0FBYSxNQUFiLEdBQXNCLENBQTNCLEVBQStCO0FBQzdCLGlCQUFPLEtBQUssY0FBWjtBQUNEOztBQUVELFlBQUksUUFBUSxJQUFaOztBQUVBLGVBQU8sS0FBSyxjQUFMLENBQW9CLE1BQXBCLENBQTJCLFVBQVMsT0FBVCxFQUFrQjtBQUNsRCxpQkFBTyxRQUFRLElBQVIsQ0FBYSxJQUFiLENBQWtCO0FBQUEsbUJBQU8sTUFBTSxPQUFOLENBQWMsT0FBZCxDQUFzQixHQUF0QixLQUE4QixDQUFyQztBQUFBLFdBQWxCLENBQVA7QUFDRCxTQUZNLENBQVA7QUFHRCxPQVhPO0FBWVIsa0JBQVksc0JBQVc7QUFDckIsZUFBTyxLQUFLLFdBQVo7QUFDRDtBQWRPLEtBM2dCVztBQTJoQnJCLGdCQUFZO0FBQ1YsdUJBQWlCO0FBQ2YsZUFBTyxDQUFDLFFBQUQsRUFBVyxVQUFYLENBRFE7QUFFZjtBQUZlLE9BRFA7QUFRVix5QkFBbUI7QUFDakIsZUFBTyxDQUFDLFVBQUQsRUFBYSxVQUFiLEVBQXlCLGFBQXpCLENBRFU7QUFFakIsY0FBTSxnQkFBVztBQUNmLGlCQUFPO0FBQ0wsNkJBQWlCLEVBRFo7QUFFTCx3QkFBWTtBQUZQLFdBQVA7QUFJRCxTQVBnQjtBQVFqQixpQkFBUztBQUNQLG9CQUFVLG9CQUFXO0FBQ25CLGlCQUFLLFVBQUwsR0FBa0IsS0FBSyxJQUFMLENBQVUsS0FBSyxNQUFMLENBQVksUUFBWixDQUFxQixNQUFyQixHQUE4QixLQUFLLGVBQTdDLENBQWxCO0FBQ0EsbUJBQU8sS0FBSyxVQUFaO0FBQ0QsV0FKTTtBQUtQLDBCQUFnQix3QkFBUyxJQUFULEVBQWU7QUFBQTs7QUFBQSxnQkFDckIsV0FEcUIsR0FDTCxLQUFLLE9BREEsQ0FDckIsV0FEcUI7O0FBRTdCLGdCQUFJLFFBQVEsRUFBRSxpQkFBRixDQUFaOztBQUVBLGlCQUFLLE9BQUwsQ0FBYSxTQUFiLEdBQXlCLElBQXpCOztBQUVBLHVCQUFXLFlBQU07QUFDZix5QkFBVztBQUFBLHVCQUFNLE9BQUssT0FBTCxDQUFhLFNBQWIsR0FBeUIsS0FBL0I7QUFBQSxlQUFYLEVBQWlELEdBQWpEOztBQUVBLG9CQUFNLElBQU4sQ0FBVyxVQUFTLENBQVQsRUFBWSxFQUFaLEVBQWdCO0FBQ3pCLG9CQUFJLFdBQVcsRUFBRSxJQUFGLEVBQVEsSUFBUixDQUFhLFdBQWIsQ0FBZjtBQUNBLG9CQUFLLFlBQVksSUFBakIsRUFBd0I7QUFDdEIsb0JBQUUsSUFBRixFQUFRLFFBQVIsQ0FBaUIsd0JBQWpCO0FBQ0QsaUJBRkQsTUFFTztBQUNMLG9CQUFFLElBQUYsRUFBUSxXQUFSLENBQW9CLHdCQUFwQjtBQUNEO0FBQ0YsZUFQRDs7QUFTQSxrQkFBSSxnQkFBZ0IsSUFBcEIsRUFBMEI7QUFDeEIsdUJBQU8sV0FBUDtBQUNEOztBQUVELHFCQUFLLE9BQUwsQ0FBYSxXQUFiLEdBQTJCLElBQTNCO0FBQ0EscUJBQU8sT0FBSyxPQUFMLENBQWEsV0FBcEI7QUFDRCxhQWxCRCxFQWtCRyxHQWxCSDtBQW1CRCxXQTlCTTtBQStCUCxzQkFBWSxzQkFBVztBQUNyQixnQkFBTSxPQUFPLEtBQUssT0FBTCxDQUFhLFdBQWIsR0FBMkIsQ0FBeEM7QUFDQSxnQkFBSyxPQUFPLENBQVosRUFBZ0I7QUFDZDtBQUNEOztBQUVELG1CQUFPLEtBQUssY0FBTCxDQUFvQixJQUFwQixDQUFQO0FBQ0QsV0F0Q007QUF1Q1Asc0JBQVksc0JBQVc7QUFDckIsZ0JBQU0sT0FBTyxLQUFLLE9BQUwsQ0FBYSxXQUFiLEdBQTJCLENBQXhDO0FBQ0EsZ0JBQUssT0FBTyxLQUFLLFFBQUwsRUFBWixFQUE4QjtBQUM1QjtBQUNEOztBQUVELG1CQUFPLEtBQUssY0FBTCxDQUFvQixJQUFwQixDQUFQO0FBQ0Q7QUE5Q00sU0FSUTtBQXdEakIsa0JBQVU7QUFDUiw0QkFEUSxnQ0FDYTtBQUFBLGdCQUNYLE1BRFcsR0FDNkIsSUFEN0IsQ0FDWCxNQURXO0FBQUEsZ0JBQ0gsV0FERyxHQUM2QixJQUQ3QixDQUNILFdBREc7QUFBQSxnQkFDVSxlQURWLEdBQzZCLElBRDdCLENBQ1UsZUFEVjs7O0FBR25CLG1CQUFPLEtBQUssTUFBTCxDQUFZLFFBQVosQ0FBcUIsTUFBckIsR0FBOEIsTUFBOUIsQ0FBcUMsQ0FBQyxjQUFjLENBQWYsSUFBb0IsZUFBekQsRUFBMEUsZUFBMUUsQ0FBUDtBQUNELFdBTE87O0FBTVIsc0JBQVksc0JBQVc7QUFDckIsbUJBQU8sS0FBSyxPQUFMLENBQWEsV0FBcEI7QUFDRDtBQVJPLFNBeERPO0FBa0VqQjtBQWxFaUI7QUFSVDtBQTNoQlMsR0FBUixDQUFmO0FBeW9CRCxDQWhwQkQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfXJldHVybiBlfSkoKSIsIi8vIFlvdSBjYW4gd3JpdGUgYSBjYWxsIGFuZCBpbXBvcnQgeW91ciBmdW5jdGlvbnMgaW4gdGhpcyBmaWxlLlxuLy9cbi8vIFRoaXMgZmlsZSB3aWxsIGJlIGNvbXBpbGVkIGludG8gYXBwLmpzIGFuZCB3aWxsIG5vdCBiZSBtaW5pZmllZC5cbi8vIEZlZWwgZnJlZSB3aXRoIHVzaW5nIEVTNiBoZXJlLlxuXG5pbXBvcnQgdnVlRmlsdGVyIGZyb20gJy4vbW9kdWxlcy92dWVfZmlsdGVyJztcbmltcG9ydCBkZXRlY3RDaHJvbWUgZnJvbSAnLi9tb2R1bGVzL2RldGVjdENocm9tZSc7XG5cbiggKCQpID0+IHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8vIFdoZW4gRE9NIGlzIHJlYWR5XG4gICQoKCkgPT4ge1xuXG4gICAgZGV0ZWN0Q2hyb21lLmluaXQoKTtcbiAgICBcbiAgfSk7XG5cbn0pKGpRdWVyeSk7IiwibGV0IGRldGVjdENocm9tZSA9IHtcbiAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKCB0aGlzLmRldGVjdENocm9tZSgpICkge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdjaHJvbWUnKTtcbiAgICB9XG4gIH0sXG4gIGRldGVjdENocm9tZTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIC9DaHJvbWUvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgL0dvb2dsZSBJbmMvLnRlc3QobmF2aWdhdG9yLnZlbmRvcik7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBkZXRlY3RDaHJvbWU7IiwiKCgpID0+IHtcbiAgbGV0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbHRlcicpO1xuXG4gIGlmICggIWVsICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGZpbHRlciA9IG5ldyBWdWUoe1xuICAgIGVsOiBlbCxcbiAgICBtb3VudGVkOiBmdW5jdGlvbigpIHtcbiAgICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgICBsZXQgcmVzaXplVGltZXI7XG5cbiAgICAgICQoZG9jdW1lbnQpLm9mZignY2xpY2sudG9nZ2xlRHJvcERvd24gdG91Y2hlbmQudG9nZ2xlRHJvcERvd24nKS5vbignY2xpY2sudG9nZ2xlRHJvcERvd24gdG91Y2hlbmQudG9nZ2xlRHJvcERvd24nLCBmdW5jdGlvbihlKSB7XG5cbiAgICAgICAgaWYgKCB3aW5kb3cuaW5uZXJXaWR0aCA8IDY0MCApIHtcbiAgICAgICAgICBpZiAoICQoZS50YXJnZXQpLmhhc0NsYXNzKCdmaWx0ZXJfX2NhdGVnb3JpZXMnKSB8fCAkKGUudGFyZ2V0KS5wYXJlbnQoKS5oYXNDbGFzcygnZmlsdGVyX19jYXRlZ29yaWVzJykgfHwgJChlLnRhcmdldCkuaGFzQ2xhc3MoJ2ZpbHRlcl9fdGl0bGUnKSApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX3RoaXMubW9iaWxlRHJvcERvd24uaXNWaXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgJCh3aW5kb3cpLm9uKCdyZXNpemUnLCAoZSkgPT4ge1xuICAgICAgICBjbGVhclRpbWVvdXQocmVzaXplVGltZXIpO1xuICAgICAgICByZXNpemVUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMub25SZXNpemUoKTtcbiAgICAgICAgfSwgMjUwKTtcbiAgICAgIH0pO1xuXG4gICAgfSxcbiAgICBkYXRhOiB7XG4gICAgICB1cmxIYXNoOiB7fSxcbiAgICAgIHRpbWVvdXREZWxheTogMjUwLFxuICAgICAgZmlsdGVyczogW10sXG4gICAgICBmaWx0ZXJUZXh0OiAnU2VsZWN0IFRlY2hub2xvZ3knLFxuICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICAgIG1vYmlsZURyb3BEb3duOiB7XG4gICAgICAgIGlzVmlzaWJsZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgY3VycmVudFBhZ2U6IDEsXG4gICAgICBwcm9qZWN0UGVyUGFnZTogMTIsXG4gICAgICBmaWx0ZXJCdXR0b25zOiBbXG4gICAgICAgIHsgdGV4dDogJ1dvcmRQcmVzcycsIGZpbHRlcjogJ1dvcmRQcmVzcycsIGlzQWN0aXZlOiBmYWxzZSwgaXNEaXNhYmxlZDogZmFsc2UgfSxcbiAgICAgICAgeyB0ZXh0OiAnUEhQJywgZmlsdGVyOiAnUEhQJywgaXNBY3RpdmU6IGZhbHNlLCBpc0Rpc2FibGVkOiBmYWxzZSB9LFxuICAgICAgICB7IHRleHQ6ICdIVE1MNS9DU1MzJywgZmlsdGVyOiAnSFRNTDUvQ1NTMycsIGlzQWN0aXZlOiBmYWxzZSwgaXNEaXNhYmxlZDogZmFsc2UgfSxcbiAgICAgICAgeyB0ZXh0OiAnSmF2YVNjcmlwdCcsIGZpbHRlcjogJ0phdmFTY3JpcHQnLCBpc0FjdGl2ZTogZmFsc2UsIGlzRGlzYWJsZWQ6IGZhbHNlIH0sXG4gICAgICAgIHsgdGV4dDogJ1Z1ZS5qcycsIGZpbHRlcjogJ1Z1ZS5qcycsIGlzQWN0aXZlOiBmYWxzZSwgaXNEaXNhYmxlZDogZmFsc2UgfSxcbiAgICAgICAgeyB0ZXh0OiAnUmVhY3QuanMnLCBmaWx0ZXI6ICdSZWFjdC5qcycsIGlzQWN0aXZlOiBmYWxzZSwgaXNEaXNhYmxlZDogZmFsc2UgfSxcbiAgICAgICAgeyB0ZXh0OiAnTm9kZS5qcycsIGZpbHRlcjogJ05vZGUuanMnLCBpc0FjdGl2ZTogZmFsc2UsIGlzRGlzYWJsZWQ6IGZhbHNlIH0sXG4gICAgICAgIHsgdGV4dDogJ01hZ2VudG8nLCBmaWx0ZXI6ICdNYWdlbnRvJywgaXNBY3RpdmU6IGZhbHNlLCBpc0Rpc2FibGVkOiBmYWxzZSB9LFxuICAgICAgICB7IHRleHQ6ICdNb2JpbGUgQXBwJywgZmlsdGVyOiAnTW9iaWxlIEFwcCcsIGlzQWN0aXZlOiBmYWxzZSwgaXNEaXNhYmxlZDogZmFsc2UgfSxcbiAgICAgIF0sXG4gICAgICBmaWx0ZXJQcm9qZWN0czogW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDAsXG4gICAgICAgICAgdGl0bGU6ICdZaWkyIFN0YXJ0ZXInLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnSnVzdENvZGVkIFByb2plY3QgU3RhcnRlciBmb3IgYWxsIHByb2plY3RzIGJhc2VkIG9uIHRoZSBZSUkyIFBIUCBGcmFtZXdvcmsuJyxcbiAgICAgICAgICBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL2p1c3Rjb2RlZC95aWkyLXN0YXJ0ZXInLFxuICAgICAgICAgIGltZzoge1xuICAgICAgICAgICAgc3JjOiAnYXNzZXRzL2ltYWdlcy95aWkyX3N0YXJ0ZXIuanBnJyxcbiAgICAgICAgICAgIHNyY3NldDogJ2Fzc2V0cy9pbWFnZXMveWlpMl9zdGFydGVyLmpwZyAxeCwgYXNzZXRzL2ltYWdlcy95aWkyX3N0YXJ0ZXItMnguanBnIDJ4J1xuICAgICAgICAgIH0sXG4gICAgICAgICAgdGFnczogWydQSFAnXSxcbiAgICAgICAgICBpc1Zpc2libGU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMSxcbiAgICAgICAgICB0aXRsZTogJ0p1c3QgSW1hZ2UgT3B0aW1pemVyJyxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ1dvcmRQcmVzcyBwbHVnaW4gdG8gY29tcHJlc3MgaW1hZ2UgZmlsZXMsIGltcHJvdmUgcGVyZm9ybWFuY2UgYW5kIGJvb3N0IHlvdXIgU0VPIHJhbmsgdXNpbmcgR29vZ2xlIFBhZ2UgU3BlZWQgSW5zaWdodHMgY29tcHJlc3Npb24gYW5kIG9wdGltaXphdGlvbi4nLFxuICAgICAgICAgIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vanVzdGNvZGVkL2p1c3QtaW1hZ2Utb3B0aW1pemVyJyxcbiAgICAgICAgICBpbWc6IHtcbiAgICAgICAgICAgIHNyYzogJ2Fzc2V0cy9pbWFnZXMvanVzdF9pbWFnZV9vcHRpbWl6ZXIuanBnJyxcbiAgICAgICAgICAgIHNyY3NldDogJ2Fzc2V0cy9pbWFnZXMvanVzdF9pbWFnZV9vcHRpbWl6ZXIuanBnIDF4LCBhc3NldHMvaW1hZ2VzL2p1c3RfaW1hZ2Vfb3B0aW1pemVyLTJ4LmpwZyAyeCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0YWdzOiBbJ1BIUCcsICdXb3JkUHJlc3MnXSxcbiAgICAgICAgICBpc1Zpc2libGU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMixcbiAgICAgICAgICB0aXRsZTogJ0p1c3QgUmVzcG9uc2l2ZSBJbWFnZXMnLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnV29yZFByZXNzIFBsdWdpbiB0byBzdXBwb3J0IGJldHRlciByZXNwb25zaXZlIGltYWdlcyB3aXRoIDxwaWN0dXJlPiB0YWcsIGJhY2tncm91bmRzLCByZXRpbmEgc3VwcG9ydCwgZXRjLicsXG4gICAgICAgICAgbGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS9qdXN0Y29kZWQvanVzdC1yZXNwb25zaXZlLWltYWdlcycsXG4gICAgICAgICAgaW1nOiB7XG4gICAgICAgICAgICBzcmM6ICdhc3NldHMvaW1hZ2VzL2p1c3RfcmVzcG9uc2l2ZV9pbWFnZXMuanBnJyxcbiAgICAgICAgICAgIHNyY3NldDogJ2Fzc2V0cy9pbWFnZXMvanVzdF9yZXNwb25zaXZlX2ltYWdlcy5qcGcgMXgsIGFzc2V0cy9pbWFnZXMvanVzdF9yZXNwb25zaXZlX2ltYWdlcy0yeC5qcGcgMngnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgdGFnczogWydQSFAnLCAnV29yZFByZXNzJ10sXG4gICAgICAgICAgaXNWaXNpYmxlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDMsXG4gICAgICAgICAgdGl0bGU6ICdEcmliYmJsZSBPYXV0aC0yJyxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ1NpbXBsZSBwcm94eSBzZXJ2ZXIgd2l0aCBOb2RlSlMgYW5kIEV4cHJlc3NKUyB0aGF0IGhhbmRsZXMgYXV0aG9yaXNhdGlvbiBhbmQgZ2V0cyBhbiBhY2Nlc3MgdG9rZW4gdXNpbmcgb3VyIGxpYnJhcnkuJyxcbiAgICAgICAgICBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL2p1c3Rjb2RlZC9kcmliYmJsZS1vYXV0aDInLFxuICAgICAgICAgIGltZzoge1xuICAgICAgICAgICAgc3JjOiAnYXNzZXRzL2ltYWdlcy9kcmliYmJsZS5qcGcnLFxuICAgICAgICAgICAgc3Jjc2V0OiAnYXNzZXRzL2ltYWdlcy9kcmliYmJsZS5qcGcgMXgsIGFzc2V0cy9pbWFnZXMvZHJpYmJibGUtMnguanBnIDJ4JyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRhZ3M6IFsnSmF2YVNjcmlwdCcsICdSZWFjdC5qcyddLFxuICAgICAgICAgIGlzVmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiA0LFxuICAgICAgICAgIHRpdGxlOiAnV2ViIFN0YXJ0ZXIgS2l0JyxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ1dlYiBTdGFydGVyIEtpdCBpcyBhbiBvcGluaW9uYXRlZCBib2lsZXJwbGF0ZSBmb3Igd2ViIGRldmVsb3BtZW50LkEgc29saWQgc3RhcnRpbmcgcG9pbnQgZm9yIGJvdGggcHJvZmVzc2lvbmFscyBhbmQgbmV3Y29tZXJzIHRvIHRoZSBpbmR1c3RyeS4nLFxuICAgICAgICAgIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vanVzdGNvZGVkL3dlYi1zdGFydGVyLWtpdCcsXG4gICAgICAgICAgaW1nOiB7XG4gICAgICAgICAgICBzcmM6ICdhc3NldHMvaW1hZ2VzL3dlYl9zdGFydGVyLmpwZycsXG4gICAgICAgICAgICBzcmNzZXQ6ICdhc3NldHMvaW1hZ2VzL3dlYl9zdGFydGVyLmpwZywgYXNzZXRzL2ltYWdlcy93ZWJfc3RhcnRlci0yeC5qcGcgMngnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgdGFnczogWydIVE1MNS9DU1MzJywgJ05vZGUuanMnXSxcbiAgICAgICAgICBpc1Zpc2libGU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogNSxcbiAgICAgICAgICB0aXRsZTogJ1dvcmRQcmVzcyBUaGVtZSBCb2lsZXJwbGF0ZScsXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdXb3JkUHJlc3MgdGhlbWUgYm9pbGVycGxhdGUgd2l0aCBhbiBpbXByb3ZlZCBjbGFzc2VzLWJhc2VkIGNvZGUgc3RydWN0dXJlLCB0aGVtZSB3cmFwcGVyLCBhbmQgc2VjdXJpdHkgcGF0Y2hlcy4nLFxuICAgICAgICAgIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vanVzdGNvZGVkL3dvcmRwcmVzcy10aGVtZS1ib2lsZXJwbGF0ZScsXG4gICAgICAgICAgaW1nOiB7XG4gICAgICAgICAgICBzcmM6ICdhc3NldHMvaW1hZ2VzL3dwX2JvaWxlcnBsYXRlLmpwZycsXG4gICAgICAgICAgICBzcmNzZXQ6ICdhc3NldHMvaW1hZ2VzL3dwX2JvaWxlcnBsYXRlLmpwZyAxeCwgYXNzZXRzL2ltYWdlcy93cF9ib2lsZXJwbGF0ZS0yeC5qcGcgMngnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgdGFnczogWydQSFAnLCAnV29yZFByZXNzJ10sXG4gICAgICAgICAgaXNWaXNpYmxlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDYsXG4gICAgICAgICAgdGl0bGU6ICdXb3JkUHJlc3MgVGhlbWUgRnJhbWV3b3JrJyxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0xpZ2h0d2VpZ2h0IE1WQyB0aGVtaW5nIGZyYW1ld29yayBmb3IgZGV2ZWxvcGVycyB3aG8gd2FudCB0byBiZXR0ZXIgb3JnYW5pemUgdGhlaXIgb3duIGN1c3RvbSB0aGVtZXMgd2l0aCBhbiBNVkMgYXBwcm9hY2guJyxcbiAgICAgICAgICBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL2p1c3Rjb2RlZC93b3JkcHJlc3MtdGhlbWUtZnJhbWV3b3JrJyxcbiAgICAgICAgICBpbWc6IHtcbiAgICAgICAgICAgIHNyYzogJ2Fzc2V0cy9pbWFnZXMvd3BfdGhlbWUuanBnJyxcbiAgICAgICAgICAgIHNyY3NldDogJ2Fzc2V0cy9pbWFnZXMvd3BfdGhlbWUuanBnIDF4LCBhc3NldHMvaW1hZ2VzL3dwX3RoZW1lLTJ4LmpwZyAyeCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0YWdzOiBbJ1BIUCcsICdXb3JkUHJlc3MnXSxcbiAgICAgICAgICBpc1Zpc2libGU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogNyxcbiAgICAgICAgICB0aXRsZTogJ1BIUCBDb2RlU25pZmZlcicsXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdQSFAgQ29kZSBTbmlmZmVyIGN1c3RvbSBydWxlcyBwYWNrLiBUaGlzIHBhY2thZ2UgY29udGFpbnMgYSBkZWZhdWx0IHNldCBvZiBydWxlcyBhbmQgY3VzdG9tIHJ1bGVzIHdoaWNoIGFyZSB1c2VkIGluIGFsbCBiZXN0IElUIHByb2plY3RzLicsXG4gICAgICAgICAgbGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS9qdXN0Y29kZWQvcGhwY29kZXNuaWZmZXInLFxuICAgICAgICAgIGltZzoge1xuICAgICAgICAgICAgc3JjOiAnYXNzZXRzL2ltYWdlcy9jb2RlU25pZmZlci5qcGcnLFxuICAgICAgICAgICAgc3Jjc2V0OiAnYXNzZXRzL2ltYWdlcy9jb2RlU25pZmZlci5qcGcgMXgsIGFzc2V0cy9pbWFnZXMvY29kZVNuaWZmZXItMnguanBnIDJ4JyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRhZ3M6IFsnUEhQJ10sXG4gICAgICAgICAgaXNWaXNpYmxlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDgsXG4gICAgICAgICAgdGl0bGU6ICdqUXVlcnkgU3RhcicsXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdUaGlzIGlzIGEgalF1ZXJ5IHBsdWdpbiB0aGF0IGFkZHMgc29tZSBcIk1hZ2ljXCIgdG8geW91ciBzaXRlLiBCeSBcIk1hZ2ljXCIgd2UgbWVhbiBzaGluaW5nIHN0YXJzLCB3aGljaCBhcHBlYXIgd2hlbiB5b3UgbW92ZSB5b3VyIG1vdXNlLicsXG4gICAgICAgICAgbGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS9qdXN0Y29kZWQvanF1ZXJ5LXN0YXJzJyxcbiAgICAgICAgICBpbWc6IHtcbiAgICAgICAgICAgIHNyYzogJ2Fzc2V0cy9pbWFnZXMvalF1ZXJ5X3N0YXIuanBnJyxcbiAgICAgICAgICAgIHNyY3NldDogJ2Fzc2V0cy9pbWFnZXMvalF1ZXJ5X3N0YXIuanBnIDF4LCBhc3NldHMvaW1hZ2VzL2pRdWVyeV9zdGFyLTJ4LmpwZyAyeCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0YWdzOiBbJ0hUTUw1L0NTUzMnXSxcbiAgICAgICAgICBpc1Zpc2libGU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogOSxcbiAgICAgICAgICB0aXRsZTogJ1dvcmRQcmVzcyBTdGFydGVyJyxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ1dvcmRQcmVzcyBQcm9qZWN0IFRlbXBsYXRlIGlzIGEgc2tlbGV0b24gYmVzdCBmb3IgcmFwaWRseSBjcmVhdGluZyBwcm9qZWN0cyB3aXRoIG1vZGVybiBkZXZlbG9wbWVudCB0b29scywgaGFzIGVhc3kgY29uZmlndXJhdGlvbiwgYW5kIGFuIGltcHJvdmVkIGZvbGRlciBzdHJ1Y3R1cmUuJyxcbiAgICAgICAgICBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL2p1c3Rjb2RlZC93b3JkcHJlc3Mtc3RhcnRlcicsXG4gICAgICAgICAgaW1nOiB7XG4gICAgICAgICAgICBzcmM6ICdhc3NldHMvaW1hZ2VzL3dwX3N0YXJ0ZXIuanBnJyxcbiAgICAgICAgICAgIHNyY3NldDogJ2Fzc2V0cy9pbWFnZXMvd3Bfc3RhcnRlci5qcGcgMXgsIGFzc2V0cy9pbWFnZXMvd3Bfc3RhcnRlci0yeC5qcGcgMngnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgdGFnczogWydQSFAnLCAnV29yZFByZXNzJ10sXG4gICAgICAgICAgaXNWaXNpYmxlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDEwLFxuICAgICAgICAgIHRpdGxlOiAnV29yZHByZXNzIENvbXBvc2VyIFNjcmlwdHMnLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQ3VzdG9tIENvbXBvc2VyIHNjcmlwdHMgZm9yIFdvcmRQcmVzcyBQcm9qZWN0IFRlbXBsYXRlLicsXG4gICAgICAgICAgbGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS9qdXN0Y29kZWQvd29yZHByZXNzLWNvbXBvc2VyLXNjcmlwdHMnLFxuICAgICAgICAgIGltZzoge1xuICAgICAgICAgICAgc3JjOiAnYXNzZXRzL2ltYWdlcy9jb21wb3Nlci5qcGcnLFxuICAgICAgICAgICAgc3Jjc2V0OiAnYXNzZXRzL2ltYWdlcy9jb21wb3Nlci5qcGcgMXgsIGFzc2V0cy9pbWFnZXMvY29tcG9zZXItMnguanBnIDJ4JyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRhZ3M6IFsnUEhQJywgJ1dvcmRQcmVzcyddLFxuICAgICAgICAgIGlzVmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAxMSxcbiAgICAgICAgICB0aXRsZTogJ05QTSBqY24nLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQ29tbWFuZCBsaW5lIHRvb2wgZm9yIEp1c3RDb2RlZCB3aGljaCBhbGxvd3MgdGhlIGNyZWF0aW9uIG9mIGEgc3RhcnRlciBib2lsZXJwbGF0ZSBmb3IgZGlmZmVyZW50IGtpbmRzIG9mIHByb2plY3RzLicsXG4gICAgICAgICAgbGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS9qdXN0Y29kZWQvbnBtLWpjbicsXG4gICAgICAgICAgaW1nOiB7XG4gICAgICAgICAgICBzcmM6ICdhc3NldHMvaW1hZ2VzL25wbV9qY24uanBnJyxcbiAgICAgICAgICAgIHNyY3NldDogJ2Fzc2V0cy9pbWFnZXMvbnBtX2pjbi5qcGcgMXgsIGFzc2V0cy9pbWFnZXMvbnBtX2pjbi0yeC5qcGcgMngnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgdGFnczogWydKYXZhU2NyaXB0JywgJ05vZGUuanMnXSxcbiAgICAgICAgICBpc1Zpc2libGU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMTIsXG4gICAgICAgICAgdGl0bGU6ICdGb3JtIEhhbmRsZXInLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVmFsaWRhdGUgc2ltcGxlIEhUTUwgZm9ybSByZXF1ZXN0cywgc2VuZCBlbWFpbCBub3RpZmljYXRpb25zIHdpdGggZWFzZS4gQmVzdCBmb3IgcHVyZSBIVE1MIHdlYnNpdGVzLicsXG4gICAgICAgICAgbGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS9qdXN0Y29kZWQvZm9ybS1oYW5kbGVyJyxcbiAgICAgICAgICBpbWc6IHtcbiAgICAgICAgICAgIHNyYzogJ2Fzc2V0cy9pbWFnZXMvZm9ybV9oYW5kbGVyLmpwZycsXG4gICAgICAgICAgICBzcmNzZXQ6ICdhc3NldHMvaW1hZ2VzL2Zvcm1faGFuZGxlci5qcGcgMXgsIGFzc2V0cy9pbWFnZXMvZm9ybV9oYW5kbGVyLTJ4LmpwZyAyeCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0YWdzOiBbJ1BIUCddLFxuICAgICAgICAgIGlzVmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAxMyxcbiAgICAgICAgICB0aXRsZTogJ1lpaTIgU2V0dGluZ3MnLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnWWlpMiBTZXR0aW5ncyBDb21wb25lbnQgd2l0aCBJREUgYXV0b2NvbXBsZXRpb24gZm9yIHNldHRpbmcga2V5cywgcmVwbGFjZSBwYXJhbXMuJyxcbiAgICAgICAgICBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL2p1c3Rjb2RlZC95aWkyLXNldHRpbmdzJyxcbiAgICAgICAgICBpbWc6IHtcbiAgICAgICAgICAgIHNyYzogJ2Fzc2V0cy9pbWFnZXMveWlpMl9zZXR0aW5ncy5qcGcnLFxuICAgICAgICAgICAgc3Jjc2V0OiAnYXNzZXRzL2ltYWdlcy95aWkyX3NldHRpbmdzLmpwZyAxeCwgYXNzZXRzL2ltYWdlcy95aWkyX3NldHRpbmdzLTJ4LmpwZyAyeCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0YWdzOiBbJ1BIUCddLFxuICAgICAgICAgIGlzVmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAxNCxcbiAgICAgICAgICB0aXRsZTogJ1JlYWN0LkpTIEV4YW1wbGUnLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnV2ViIEFwcGxpY2F0aW9uIGZvciBib29raW5nIG1lZXRpbmcgcm9vbXMgdXNpbmcgR29vZ2xlIENhbGVuZGFyIGFuZCBiYXNlZCBvbiB0aGUgUmVhY3QuanMgbGlicmFyeS4nLFxuICAgICAgICAgIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vanVzdGNvZGVkL3JlYWN0LmpzLWV4YW1wbGUnLFxuICAgICAgICAgIGltZzoge1xuICAgICAgICAgICAgc3JjOiAnYXNzZXRzL2ltYWdlcy9yZWFjdF9leGFtcGxlLmpwZycsXG4gICAgICAgICAgICBzcmNzZXQ6ICdhc3NldHMvaW1hZ2VzL3JlYWN0X2V4YW1wbGUuanBnIDF4LCBhc3NldHMvaW1hZ2VzL3JlYWN0X2V4YW1wbGUtMnguanBnIDJ4JyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRhZ3M6IFsnSmF2YVNjcmlwdCcsICdSZWFjdC5qcyddLFxuICAgICAgICAgIGlzVmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAxNSxcbiAgICAgICAgICB0aXRsZTogJ1lpaTIgUmJhYycsXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdZaWkyIFJCQUMgTWFuYWdlciB3aXRoIG5pY2UgZ3JhcGhpYyBpbnRlcmZhY2UgYW5kIGFkdmFuY2VkIEFjY2Vzc0ZpbHRlciB3aXRoIGF1dG9tYXRpYyByb3V0ZS1iYXNlZCBhY2Nlc3MuJyxcbiAgICAgICAgICBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL2p1c3Rjb2RlZC95aWkyLXJiYWMnLFxuICAgICAgICAgIGltZzoge1xuICAgICAgICAgICAgc3JjOiAnYXNzZXRzL2ltYWdlcy95aWkyX3JiYWMuanBnJyxcbiAgICAgICAgICAgIHNyY3NldDogJ2Fzc2V0cy9pbWFnZXMveWlpMl9yYmFjLmpwZyAxeCwgYXNzZXRzL2ltYWdlcy95aWkyX3JiYWMtMnguanBnIDJ4JyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRhZ3M6IFsnUEhQJ10sXG4gICAgICAgICAgaXNWaXNpYmxlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDE2LFxuICAgICAgICAgIHRpdGxlOiAnVHV0b3JpYWwgU2hvcGlmeSBOb2RlanMgQXBwJyxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0V4YW1wbGUgb2YgYSBTaG9waWZ5IGVtYmVkZGVkIGFwcCBvbiBOb2RlLmpzIHRoYXQgZGVtb25zdHJhdGVzIGhvdyB0byBjcmVhdGUgYXBwbGljYXRpb25zIGZvciBhIFNob3BpZnkgcGxhdGZvcm0uJyxcbiAgICAgICAgICBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL2p1c3Rjb2RlZC90dXRvcmlhbF9zaG9waWZ5X25vZGVqc19hcHAnLFxuICAgICAgICAgIGltZzoge1xuICAgICAgICAgICAgc3JjOiAnYXNzZXRzL2ltYWdlcy90dXRvcmlhbF9zaG9waWZ5LmpwZycsXG4gICAgICAgICAgICBzcmNzZXQ6ICdhc3NldHMvaW1hZ2VzL3R1dG9yaWFsX3Nob3BpZnkuanBnIDF4LCBhc3NldHMvaW1hZ2VzL3R1dG9yaWFsX3Nob3BpZnktMnguanBnIDJ4JyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRhZ3M6IFsnSmF2YVNjcmlwdCcsICdOb2RlLmpzJ10sXG4gICAgICAgICAgaXNWaXNpYmxlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDE3LFxuICAgICAgICAgIHRpdGxlOiAnRXhhbXBsZXMgU0NTUyBCZW0gQ29kZScsXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdTbWFsbCB3ZWJzaXRlIHRoYXQgd2FzIGRldmVsb3BlZCB1c2luZyBTQ1NTIGFuZCBCRU0gbWV0aG9kb2xvZ3kuIEFsc28gd2UgdXNlZCBvdXIgV2ViIFN0YXJ0ZXIgS2l0IGFuZCBOb2RlLmpzIG1vZHVsZXMgdG8gb3B0aW1pemUgaW1hZ2VzLicsXG4gICAgICAgICAgbGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS9qdXN0Y29kZWQvZXhhbXBsZXMtc2Nzcy1iZW0tY29kZScsXG4gICAgICAgICAgaW1nOiB7XG4gICAgICAgICAgICBzcmM6ICdhc3NldHMvaW1hZ2VzL2JlbV9zY3NzLmpwZycsXG4gICAgICAgICAgICBzcmNzZXQ6ICdhc3NldHMvaW1hZ2VzL2JlbV9zY3NzLmpwZyAxeCwgYXNzZXRzL2ltYWdlcy9iZW1fc2Nzcy0yeC5qcGcgMngnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgdGFnczogWydIVE1MNS9DU1MzJ10sXG4gICAgICAgICAgaXNWaXNpYmxlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDE4LFxuICAgICAgICAgIHRpdGxlOiAnSnVzdCBUaW55bWNlIEN1c3RvbSBTdHlsZXMnLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnV29yZFByZXNzIFBsdWdpbiB0byBtb2RpZnkgVGlueU1DRSBzdHlsZV9mb3JtYXRzIG9wdGlvbi4gQWxzbyB0aGVyZSBpcyBhIHByZXNldCBmb3IgQm9vdHN0cmFwIHN0eWxlcy4nLFxuICAgICAgICAgIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vanVzdGNvZGVkL2p1c3QtdGlueW1jZS1jdXN0b20tc3R5bGVzJyxcbiAgICAgICAgICBpbWc6IHtcbiAgICAgICAgICAgIHNyYzogJ2Fzc2V0cy9pbWFnZXMvanVzdF90aW55bWNlX2N1c3RvbV9zdHlsZXMuanBnJyxcbiAgICAgICAgICAgIHNyY3NldDogJ2Fzc2V0cy9pbWFnZXMvanVzdF90aW55bWNlX2N1c3RvbV9zdHlsZXMuanBnIDF4LCBhc3NldHMvaW1hZ2VzL2p1c3RfdGlueW1jZV9jdXN0b21fc3R5bGVzLTJ4LmpwZyAyeCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0YWdzOiBbJ1BIUCcsICdXb3JkUHJlc3MnXSxcbiAgICAgICAgICBpc1Zpc2libGU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMTksXG4gICAgICAgICAgdGl0bGU6ICdXUCBIb3N0IFVwZGF0ZScsXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdXaGVuIHlvdSBtb3ZlIFdvcmRQcmVzcyB0byBhbm90aGVyIGhvc3QgeW91IHVzdWFsbHkgbmVlZCB0byB1cGRhdGUgdGhlIGRhdGFiYXNlIHdpdGggbmV3IFVSTHMgaW5zaWRlIGEgbG90IG9mIHBhZ2VzLicsXG4gICAgICAgICAgbGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS9qdXN0Y29kZWQvd3AtaG9zdC11cGRhdGUnLFxuICAgICAgICAgIGltZzoge1xuICAgICAgICAgICAgc3JjOiAnYXNzZXRzL2ltYWdlcy93cF9ob3N0LmpwZycsXG4gICAgICAgICAgICBzcmNzZXQ6ICdhc3NldHMvaW1hZ2VzL3dwX2hvc3QuanBnIDF4LCBhc3NldHMvaW1hZ2VzL3dwX2hvc3QtMnguanBnIDJ4JyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRhZ3M6IFsnUEhQJywgJ1dvcmRQcmVzcyddLFxuICAgICAgICAgIGlzVmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAyMCxcbiAgICAgICAgICB0aXRsZTogJ01hZ2VudG8yOiBjb25maWd1cmFibGUgYmFjayBpbiBzdG9jaycsXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdEZWZhdWx0IHByb2R1Y3QgYWxlcnRzIGluIE1hZ2VudG8gMiB3b3JrIG9ubHkgZm9yIHRoZSB3aG9sZSBjb25maWd1cmFibGUgcHJvZHVjdHMuIFRoaXMgbW9kdWxlIGFsbG93cyBjdXN0b21lcnMgdG8gc2VsZWN0IHNwZWNpZmljIGNvbmZpZ3VyYXRpb25zIHRvIGdldCBub3RpZmllZCBhYm91dC4nLFxuICAgICAgICAgIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vanVzdGNvZGVkL21hZ2VudG8yLWNvbmZpZ3VyYWJsZS1iYWNrLWluLXN0b2NrJyxcbiAgICAgICAgICBpbWc6IHtcbiAgICAgICAgICAgIHNyYzogJ2Fzc2V0cy9pbWFnZXMvbWFnZW50by5qcGcnLFxuICAgICAgICAgICAgc3Jjc2V0OiAnYXNzZXRzL2ltYWdlcy9tYWdlbnRvLmpwZyAxeCwgYXNzZXRzL2ltYWdlcy9tYWdlbnRvLTJ4LmpwZyAyeCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0YWdzOiBbJ1BIUCcsICdNYWdlbnRvJ10sXG4gICAgICAgICAgaXNWaXNpYmxlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDIxLFxuICAgICAgICAgIHRpdGxlOiAnTWFnZW50bzI6IGxvY2FsIGNvbmZpZycsXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdUaGUgbW9kdWxlIGhlbHBzIGRldmVsb3BlcnMgd2hvIHdvcmsgd2l0aCByZW1vdGUgZGF0YWJhc2VzIG9yIG5lZWQgdG8gaW1wb3J0IGRhdGFiYXNlcyBmcmVxdWVudGx5IHRvIHRoZSBsb2NhbCBtYWNoaW5lLicsXG4gICAgICAgICAgbGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS9qdXN0Y29kZWQvbWFnZW50bzItbG9jYWwtY29uZmlnJyxcbiAgICAgICAgICBpbWc6IHtcbiAgICAgICAgICAgIHNyYzogJ2Fzc2V0cy9pbWFnZXMvbWFnZW50b19sb2NhbF9jb25maWcuanBnJyxcbiAgICAgICAgICAgIHNyY3NldDogJ2Fzc2V0cy9pbWFnZXMvbWFnZW50b19sb2NhbF9jb25maWcuanBnIDF4LCBhc3NldHMvaW1hZ2VzL21hZ2VudG9fbG9jYWxfY29uZmlnLTJ4LmpwZyAyeCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0YWdzOiBbJ1BIUCcsICdNYWdlbnRvJ10sXG4gICAgICAgICAgaXNWaXNpYmxlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDIyLFxuICAgICAgICAgIHRpdGxlOiAnTWFnZW50byBwY2kgYXV0aCcsXG4gICAgICAgICAgZGVzY3JpcHRpb246ICcgVGhpcyBtb2R1bGUgaGVscHMgbWFrZSBNYWdlbnRvIDEueCBpbnN0YWxsYXRpb24gbW9yZSBQQ0ktY29tcGxpYW50IGJ5IGNvbnRyb2xsaW5nIHVzZXIgcGFzc3dvcmQgYmVoYXZpb3IuJyxcbiAgICAgICAgICBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL2p1c3Rjb2RlZC9tYWdlbnRvLXBjaS1hdXRoJyxcbiAgICAgICAgICBpbWc6IHtcbiAgICAgICAgICAgIHNyYzogJ2Fzc2V0cy9pbWFnZXMvbWFnZW50b19wY2lfYXV0aC5qcGcnLFxuICAgICAgICAgICAgc3Jjc2V0OiAnYXNzZXRzL2ltYWdlcy9tYWdlbnRvX3BjaV9hdXRoLmpwZyAxeCwgYXNzZXRzL2ltYWdlcy9tYWdlbnRvX3BjaV9hdXRoLTJ4LmpwZyAyeCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0YWdzOiBbJ1BIUCcsICdNYWdlbnRvJ10sXG4gICAgICAgICAgaXNWaXNpYmxlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDIzLFxuICAgICAgICAgIHRpdGxlOiAnVnVlLmpzLWdyaWQtZmlsdGVyJyxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ1RoaXMgbW9kdWxlIHByb3ZpZGVzIGEgZmlsdGVyZWQgdmlldyBvZiBwb3N0cyAob3IgYW55IGtpbmQgb2YgbGlzdGluZyBkYXRhKSwgZmlsdGVyaW5nL3BhZ2luYXRpb24vc29ydGluZyBzaG91bGQgYmUgcmVhbGl6ZWQgb24gYmFja2VuZC4nLFxuICAgICAgICAgIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vanVzdGNvZGVkL3Z1ZWpzLWdyaWQtZmlsdGVyJyxcbiAgICAgICAgICBpbWc6IHtcbiAgICAgICAgICAgIHNyYzogJ2Fzc2V0cy9pbWFnZXMvdnVlanNfZmlsdGVyLmpwZycsXG4gICAgICAgICAgICBzcmNzZXQ6ICdhc3NldHMvaW1hZ2VzL3Z1ZWpzX2ZpbHRlci5qcGcgMXgsIGFzc2V0cy9pbWFnZXMvdnVlanNfZmlsdGVyLTJ4LmpwZyAyeCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0YWdzOiBbJ0phdmFTY3JpcHQnLCAnVnVlLmpzJ10sXG4gICAgICAgICAgaXNWaXNpYmxlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDI0LFxuICAgICAgICAgIHRpdGxlOiAnUmVhY3QtbmV3c2FwaS5vcmctYXBwJyxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ05ld3MgQXBwIGJhc2VkIG9uIHRoZSBSZWFjdCBOYXRpdmUgZnJhbWV3b3JrIHRoYXQgcHJvdmlkZXMgbmV3cyBmcm9tIGRpZmZlcmVudCBjb3VudHJpZXMgYW5kIGNhdGVnb3JpZXMuJyxcbiAgICAgICAgICBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL2p1c3Rjb2RlZC9yZWFjdC1uZXdzYXBpLm9yZy1hcHAnLFxuICAgICAgICAgIGltZzoge1xuICAgICAgICAgICAgc3JjOiAnYXNzZXRzL2ltYWdlcy9yZWFjdF9uZXdzYXBpLmpwZycsXG4gICAgICAgICAgICBzcmNzZXQ6ICdhc3NldHMvaW1hZ2VzL3JlYWN0X25ld3NhcGkuanBnIDF4LCBhc3NldHMvaW1hZ2VzL3JlYWN0X25ld3NhcGktMnguanBnIDJ4JyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRhZ3M6IFsnSmF2YVNjcmlwdCcsICdSZWFjdC5qcycsICdNb2JpbGUgQXBwJ10sXG4gICAgICAgICAgaXNWaXNpYmxlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDI1LFxuICAgICAgICAgIHRpdGxlOiAnQW5pbWF0aW9ucy1jaXR5JyxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ1dlYi1wYWdlIGZpbGxlZCB3aXRoIGFuaW1hdGlvbnMgd2hpY2ggcmVzcG9uZCB0byB0aGUgYWN0aW9ucyBvZiB1c2Vycy4gVGhlIHZpZXcgb2YgdGhlIGNpdHkgaGFzIG1hbnkgc2hpZnRpbmcgZGV0YWlscywgc28gd2UgY2hvc2UgYSB0ZW1wbGF0ZSB3aGljaCB5b3XigJlsbCBub3RpY2Ugb24gdGhlIHJpZ2h0IGhhbmQgc2lkZS4nLFxuICAgICAgICAgIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vanVzdGNvZGVkL2FuaW1hdGlvbnMtY2l0eScsXG4gICAgICAgICAgaW1nOiB7XG4gICAgICAgICAgICBzcmM6ICdhc3NldHMvaW1hZ2VzL2FuaW1hdGlvbnNfY2l0eS5qcGcnLFxuICAgICAgICAgICAgc3Jjc2V0OiAnYXNzZXRzL2ltYWdlcy9hbmltYXRpb25zX2NpdHkuanBnIDF4LCBhc3NldHMvaW1hZ2VzL2FuaW1hdGlvbnNfY2l0eS0yeC5qcGcgMngnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgdGFnczogWydKYXZhU2NyaXB0JywgJ0hUTUw1L0NTUzMnXSxcbiAgICAgICAgICBpc1Zpc2libGU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMjYsXG4gICAgICAgICAgdGl0bGU6ICdqdXN0Y29kZWQuZ2l0aHViLmlvJyxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ1RoaXMgaXMgYSBoYW5keSBsaXN0IG9mIG91ciBtb2R1bGVzIGFuZCBjb21wb25lbnRzIGF2YWlsYWJsZSBhdCBHaXRIdWIuJyxcbiAgICAgICAgICBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL2p1c3Rjb2RlZC9qdXN0Y29kZWQuZ2l0aHViLmlvJyxcbiAgICAgICAgICBpbWc6IHtcbiAgICAgICAgICAgIHNyYzogJ2Fzc2V0cy9pbWFnZXMvZ2l0aHViX2lvLmpwZycsXG4gICAgICAgICAgICBzcmNzZXQ6ICdhc3NldHMvaW1hZ2VzL2dpdGh1Yl9pby5qcGcgMXgsIGFzc2V0cy9pbWFnZXMvZ2l0aHViX2lvLTJ4LmpwZyAyeCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0YWdzOiBbJ1Z1ZS5qcycsICdKYXZhU2NyaXB0JywgJ0hUTUw1L0NTUzMnXSxcbiAgICAgICAgICBpc1Zpc2libGU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG5cbiAgICBjcmVhdGVkOiBmdW5jdGlvbihlKSB7XG4gICAgICBpZiAoICF0aGlzLmdldFVybFRhZ3MoKSApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBsZXQgdXJsT2JqID0gdGhpcy5nZXRVcmxUYWdzKCk7XG4gICAgICB0aGlzLmZpbHRlcnMgPSBBcnJheS5pc0FycmF5KHVybE9iai50YWdzKSA/IHVybE9iai50YWdzIDogdXJsT2JqLnRhZ3Muc3BsaXQoKTtcbiAgICAgIHRoaXMudXJsSGFzaC50YWdzID0gdGhpcy5maWx0ZXJzO1xuXG4gICAgICB0aGlzLmZpbHRlcnMubWFwKChmaWx0ZXIpID0+IHtcbiAgICAgICAgdGhpcy5maWx0ZXJCdXR0b25zLm1hcCgoYnRuKSA9PiB7XG4gICAgICAgICAgaWYgKCBidG4uZmlsdGVyID09PSBmaWx0ZXIgKSB7XG4gICAgICAgICAgICBidG4uaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgZGlzYWJsZUJ1dHRvbnM6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgdGhpcy5maWx0ZXJCdXR0b25zLm1hcCgoYnRuKSA9PiB7XG4gICAgICAgICAgYnRuLmlzRGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gYnRuLmlzRGlzYWJsZWQgPSBmYWxzZSwgNTAwKTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuXG4gICAgICBvblJlc2l6ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCAkc2VsZWN0VGl0bGUgPSAkKCcuZmlsdGVyX190aXRsZScpO1xuXG4gICAgICAgIGlmICggd2luZG93LmlubmVyV2lkdGggPCA2NDAgKSB7XG4gICAgICAgICAgaWYgKCB0aGlzLmZpbHRlcnMubGVuZ3RoICkge1xuICAgICAgICAgICAgJHNlbGVjdFRpdGxlLnRleHQodGhpcy5maWx0ZXJzLmpvaW4oJywgJykpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkc2VsZWN0VGl0bGUudGV4dCh0aGlzLmZpbHRlclRleHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkc2VsZWN0VGl0bGUudGV4dCh0aGlzLmZpbHRlclRleHQpO1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICBzZXRGaWx0ZXI6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgbGV0IGVsID0gZS50YXJnZXQ7XG4gICAgICAgIGxldCBmaWx0ZXJUYWcgPSBlbC5kYXRhc2V0LmZpbHRlcjtcbiAgICAgICAgbGV0IGZvdW5kID0gdGhpcy5maWx0ZXJzLmluZGV4T2YoZmlsdGVyVGFnKSA+PSAwO1xuXG4gICAgICAgIGxldCAkc2VsZWN0VGl0bGUgPSAkKCcuZmlsdGVyX190aXRsZScpO1xuICAgICAgICBsZXQgc2VsZWN0VGV4dCA9IHRoaXMuZmlsdGVyVGV4dDtcblxuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuZGlzYWJsZUJ1dHRvbnMoZSk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmlzTG9hZGluZyA9IGZhbHNlLCAyMDApO1xuXG4gICAgICAgICAgaWYgKCBlbC5jbGFzc0xpc3QuY29udGFpbnMoJ3Byb2plY3RzX190YWcnKSApIHtcbiAgICAgICAgICAgIHRoaXMuZmlsdGVycyA9IFtmaWx0ZXJUYWddO1xuICAgICAgICAgICAgdGhpcy5maWx0ZXJCdXR0b25zLm1hcChmdW5jdGlvbihidG4pIHtcbiAgICAgICAgICAgICAgaWYgKCBidG4uZmlsdGVyICE9PSBmaWx0ZXJUYWcgKSB7XG4gICAgICAgICAgICAgICAgYnRuLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYnRuLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICggIWZvdW5kICkge1xuICAgICAgICAgICAgICB0aGlzLmZpbHRlcnMucHVzaChmaWx0ZXJUYWcpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICggZm91bmQgKSB7XG4gICAgICAgICAgICAgIHRoaXMuZmlsdGVycy5zcGxpY2UodGhpcy5maWx0ZXJzLmluZGV4T2YoZmlsdGVyVGFnKSwgMSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuZmlsdGVyQnV0dG9ucy5tYXAoZnVuY3Rpb24oYnRuKSB7XG4gICAgICAgICAgICAgIGxldCB0YXJnZXQgPSBmaWx0ZXJUYWcgPT09IGJ0bi5maWx0ZXI7XG4gICAgICAgICAgICAgIGlmICggdGFyZ2V0ICYmICFidG4uaXNBY3RpdmUgKSB7XG4gICAgICAgICAgICAgICAgYnRuLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmICggdGFyZ2V0ICYmIGJ0bi5pc0FjdGl2ZSApIHtcbiAgICAgICAgICAgICAgICBidG4uaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCB3aW5kb3cuaW5uZXJXaWR0aCA8IDY0MCApIHtcbiAgICAgICAgICAgIGlmICggdGhpcy5maWx0ZXJzLmxlbmd0aCApIHtcbiAgICAgICAgICAgICAgJHNlbGVjdFRpdGxlLnRleHQodGhpcy5maWx0ZXJzLmpvaW4oJywgJykpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgJHNlbGVjdFRpdGxlLnRleHQoc2VsZWN0VGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IDE7XG4gICAgICAgICAgdGhpcy5zZXRVcmxUYWdzKCcjdGFncz0nKTtcblxuICAgICAgICB9LCAzMDApO1xuICAgICAgfSxcblxuICAgICAgY2xlYXJBbGw6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmlzTG9hZGluZyA9IGZhbHNlLCAyMDApO1xuICAgICAgICAgIHRoaXMuZmlsdGVycyA9IFtdO1xuXG4gICAgICAgICAgdGhpcy5maWx0ZXJCdXR0b25zLm1hcChidG4gPT4ge1xuICAgICAgICAgICAgYnRuLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBpZiAoIHdpbmRvdy5pbm5lcldpZHRoIDwgNjQwICkge1xuICAgICAgICAgICAgJCgnLmZpbHRlcl9fdGl0bGUnKS50ZXh0KCdTZWxlY3QgVGVjaG5vbG9neScpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuc2V0VXJsVGFncygnI3RhZ3M9Jyk7XG5cbiAgICAgICAgfSwgMzAwKTtcbiAgICAgIH0sXG5cbiAgICAgIGdldFVybFRhZ3M6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gbG9jYXRpb24uaGFzaC5yZXBsYWNlKCcjJywgJycpLnNwbGl0KCcmJykucmVkdWNlKChmaWx0ZXJzLCBkYXRhKSA9PiB7XG4gICAgICAgICAgY29uc3Qga2V5ID0gZGF0YS5zcGxpdCgnPScpWzBdO1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gZGF0YS5zcGxpdCgnPScpWzFdO1xuXG4gICAgICAgICAgaWYgKCAha2V5IHx8ICF2YWx1ZSApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sXG4gICAgICAgICAgICAgIGZpbHRlcnMsIHtcbiAgICAgICAgICAgICAgICBba2V5XTogdmFsdWUuaW5kZXhPZignLCcpICE9PSAtMSA/IHZhbHVlLnJlcGxhY2UoJyUyMCcsICcgJykuc3BsaXQoJywnKSA6IHZhbHVlLnJlcGxhY2UoJyUyMCcsICcgJylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHt9KTtcbiAgICAgIH0sXG5cbiAgICAgIHNldFVybFRhZ3M6IGZ1bmN0aW9uKHN0cikge1xuICAgICAgICB0aGlzLnVybEhhc2gudGFncyA9IHRoaXMuZmlsdGVycztcblxuICAgICAgICBpZiAoIHRoaXMudXJsSGFzaC50YWdzLmxlbmd0aCApIHtcbiAgICAgICAgICBoaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCBzdHIgKyB0aGlzLnVybEhhc2gudGFncyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgbnVsbCwgJyAnKTtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgdG9nZ2xlTW9iaWxlQ2F0ZWdvcmllczogZnVuY3Rpb24oZSkge1xuICAgICAgICBpZiAoIHdpbmRvdy5pbm5lcldpZHRoIDwgNjQwICkge1xuICAgICAgICAgIHRoaXMubW9iaWxlRHJvcERvd24uaXNWaXNpYmxlID0gIXRoaXMubW9iaWxlRHJvcERvd24uaXNWaXNpYmxlO1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgfSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgZ2V0RmlsdGVyZWRQcm9qZWN0czogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICggdGhpcy5maWx0ZXJzLmxlbmd0aCA8IDEgKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyUHJvamVjdHM7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmZpbHRlclByb2plY3RzLmZpbHRlcihmdW5jdGlvbihwcm9qZWN0KSB7XG4gICAgICAgICAgcmV0dXJuIHByb2plY3QudGFncy5zb21lKHRhZyA9PiBfdGhpcy5maWx0ZXJzLmluZGV4T2YodGFnKSA+PSAwKTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgdXBkYXRlUGFnZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRQYWdlO1xuICAgICAgfVxuICAgIH0sXG4gICAgY29tcG9uZW50czoge1xuICAgICAgJ2ZpbHRlci1idXR0b24nOiB7XG4gICAgICAgIHByb3BzOiBbJ2J1dHRvbicsICdjYWxsYmFjayddLFxuICAgICAgICB0ZW1wbGF0ZTpcbiAgICAgICAgICBgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJmaWx0ZXJfX2J1dHRvblwiIEBjbGljay5wcmV2ZW50PVwiY2FsbGJhY2tcIj5cbiAgICAgICAgICAgIHt7IGJ1dHRvbi50ZXh0IH19XG4gICAgICAgICAgPC9idXR0b24+YCxcbiAgICAgIH0sXG4gICAgICAnZmlsdGVyLXByb2plY3RzJzoge1xuICAgICAgICBwcm9wczogWydwcm9qZWN0cycsICdjYWxsYmFjaycsICdjdXJyZW50UGFnZSddLFxuICAgICAgICBkYXRhOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcHJvamVjdHNQZXJQYWdlOiAxMixcbiAgICAgICAgICAgIHBhZ2VzVG90YWw6IG51bGwsXG4gICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgIGdldFBhZ2VzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMucGFnZXNUb3RhbCA9IE1hdGguY2VpbCh0aGlzLiRwcm9wcy5wcm9qZWN0cy5sZW5ndGggLyB0aGlzLnByb2plY3RzUGVyUGFnZSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYWdlc1RvdGFsO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc2V0Q3VycmVudFBhZ2U6IGZ1bmN0aW9uKHBhZ2UpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgY3VycmVudFBhZ2UgfSA9IHRoaXMuJHBhcmVudDtcbiAgICAgICAgICAgIGxldCAkYnRucyA9ICQoJy5wcm9qZWN0c19fcGFnZScpO1xuXG4gICAgICAgICAgICB0aGlzLiRwYXJlbnQuaXNMb2FkaW5nID0gdHJ1ZTtcblxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy4kcGFyZW50LmlzTG9hZGluZyA9IGZhbHNlLCAyMDApO1xuXG4gICAgICAgICAgICAgICRidG5zLmVhY2goZnVuY3Rpb24oaSwgZWwpIHtcbiAgICAgICAgICAgICAgICBsZXQgZGF0YVBhZ2UgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtcGFnZScpO1xuICAgICAgICAgICAgICAgIGlmICggZGF0YVBhZ2UgPT0gcGFnZSApIHtcbiAgICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ3Byb2plY3RzX19wYWdlLS1hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygncHJvamVjdHNfX3BhZ2UtLWFjdGl2ZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgaWYgKGN1cnJlbnRQYWdlID09PSBwYWdlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnRQYWdlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgdGhpcy4kcGFyZW50LmN1cnJlbnRQYWdlID0gcGFnZTtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHBhcmVudC5jdXJyZW50UGFnZTtcbiAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBnb1ByZXZQYWdlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhZ2UgPSB0aGlzLiRwYXJlbnQuY3VycmVudFBhZ2UgLSAxO1xuICAgICAgICAgICAgaWYgKCBwYWdlIDwgMSApIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRDdXJyZW50UGFnZShwYWdlKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGdvTmV4dFBhZ2U6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc3QgcGFnZSA9IHRoaXMuJHBhcmVudC5jdXJyZW50UGFnZSArIDE7XG4gICAgICAgICAgICBpZiAoIHBhZ2UgPiB0aGlzLmdldFBhZ2VzKCkgKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0Q3VycmVudFBhZ2UocGFnZSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICBnZXRQcm9qZWN0c1BlclBhZ2UoKSB7XG4gICAgICAgICAgICBjb25zdCB7ICRwcm9wcywgY3VycmVudFBhZ2UsIHByb2plY3RzUGVyUGFnZX0gPSB0aGlzO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kcHJvcHMucHJvamVjdHMuY29uY2F0KCkuc3BsaWNlKChjdXJyZW50UGFnZSAtIDEpICogcHJvamVjdHNQZXJQYWdlLCBwcm9qZWN0c1BlclBhZ2UpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgdXBkYXRlUGFnZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kcGFyZW50LmN1cnJlbnRQYWdlO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHRlbXBsYXRlOlxuICAgICAgICAgIGA8ZGl2IGNsYXNzPVwicHJvamVjdHNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0c19faW5uZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3RzX19pdGVtXCIgdi1mb3I9XCJwcm9qZWN0IGluIGdldFByb2plY3RzUGVyUGFnZVwiIDprZXk9XCJwcm9qZWN0LmlkXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3RzX19pdGVtLWlubmVyXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdHNfX2xvZ29cIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgOmhyZWY9XCJwcm9qZWN0LmxpbmtcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIDpzcmNzZXQ9XCJwcm9qZWN0LmltZy5zcmNzZXRcIiA6c3JjPVwicHJvamVjdC5pbWcuc3JjXCIgYWx0PVwiaW1hZ2UgZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdHNfX2Rlc2NyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cInByb2plY3RzX190aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxhIDpocmVmPVwicHJvamVjdC5saW5rXCIgdGFyZ2V0PVwiX2JsYW5rXCI+e3sgcHJvamVjdC50aXRsZSB9fTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJwcm9qZWN0c19fdHh0XCI+e3sgcHJvamVjdC5kZXNjcmlwdGlvbiB9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3RzX190YWdzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB2LWZvcj1cInRhZyBpbiBwcm9qZWN0LnRhZ3NcIiBAY2xpY2sucHJldmVudD1cImNhbGxiYWNrXCIgOmRhdGEtZmlsdGVyPVwidGFnXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwicHJvamVjdHNfX3RhZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3sgdGFnIH19XG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdHNfX3BhZ2luYXRpb25cIiB2LWlmPVwiZ2V0UGFnZXMoKSAhPT0gMVwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInByb2plY3RzX19wcmV2XCIgQGNsaWNrLnByZXZlbnQ9XCJnb1ByZXZQYWdlXCIgOmRpc2FibGVkPVwiY3VycmVudFBhZ2UgPT09IDFcIj5QcmV2aW91czwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInByb2plY3RzX19wYWdlXCIgdi1mb3I9XCJwYWdlIGluIGdldFBhZ2VzKClcIiBAY2xpY2sucHJldmVudD1cInNldEN1cnJlbnRQYWdlKHBhZ2UpXCIgOmRhdGEtcGFnZT1cInBhZ2VcIiA6Y2xhc3M9XCJ7ICdwcm9qZWN0c19fcGFnZS0tYWN0aXZlJzogdXBkYXRlUGFnZSA9PSBwYWdlIH1cIj5cbiAgICAgICAgICAgICAgICB7e3BhZ2V9fVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJwcm9qZWN0c19fbmV4dFwiIEBjbGljay5wcmV2ZW50PVwiZ29OZXh0UGFnZVwiIDpkaXNhYmxlZD1cImN1cnJlbnRQYWdlID09PSBwYWdlc1RvdGFsXCI+TmV4dDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+YCxcbiAgICAgIH0sXG4gICAgfVxuICB9KTtcblxufSkoKTsiXX0=

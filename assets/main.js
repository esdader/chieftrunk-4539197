(function ($, window) {

    'use strict';

    var ChiefTrunk = {
        init: function () {
            var self = this;

            self.mainHeader       = $('.main-header');
            self.mainHeaderHeight = self.mainHeader.height();
            self.shopNav          = $('.shop-nav');
            self.shopNavLinks     = self.shopNav.find('a');
            self.shopNavHeight    = self.shopNav.height();
            self.mainFooter       = $('.main-footer');
            self.mainFooterHeight = self.mainFooter.height();
            self.shopLanding      = $('.shop-landing');
            self.landingMargin    = $(window).height() - self.mainHeaderHeight - self.shopNavHeight;
            self.theBody          = $('body');

            self.scrollElem = scrollableElement('html', 'body');

            self.miniNavBtn = $('.mini-nav-btn');
            self.miniNav = $('.l-mini-nav-container');

            self.setInitialMargin();
            self.vents();
        },

        vents: function () {
            var self = this;

            self.miniNavBtn.on('click', function(e) {
                e.preventDefault();
                self.miniNav.addClass('is-open');
                self.trackOutsideClick();
            });

            self.shopNavLinks.on('click', function(e){
                e.preventDefault();

                var $this = $(this);

                self.scrollToCollection($this.attr('href'));
            });

        },

        scrollToCollection: function(collectionName) {
                
            var self             = this,
                theCollection    = $(collectionName),
                collectionOffset = theCollection.offset().top - 107;
                console.log(collectionOffset);

            self.theBody
                .removeClass('alt-color')
                .addClass('is-scrolling');

            $(self.scrollElem).animate({scrollTop: collectionOffset}, 1000);

        },

        trackOutsideClick: function() {
            var self = this;

            $('html').on('click', function(e){
                self.miniNav.removeClass('is-open');
                $('html').off('click');
            });

            self.miniNavBtn.on('click', function(e){
                e.stopPropagation();
            });
        },

        setInitialMargin: function () {
            var self = this;
            self.shopLanding.css('margin-top', self.landingMargin);
        }


    };

    // use the first element that is "scrollable"
      function scrollableElement(els) {
        for (var i = 0, argLength = arguments.length; i <argLength; i++) {
          var el = arguments[i],
              $scrollElement = $(el);
          if ($scrollElement.scrollTop()> 0) {
            return el;
          } else {
            $scrollElement.scrollTop(1);
            var isScrollable = $scrollElement.scrollTop()> 0;
            $scrollElement.scrollTop(0);
            if (isScrollable) {
              return el;
            }
          }
        }
        return [];
      }

    ChiefTrunk.init();
})(jQuery, window);
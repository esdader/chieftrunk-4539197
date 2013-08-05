(function ($, window) {

    'use strict';

    var ChiefTrunk = {
        init: function () {
            var self = this;

            self.mainHeader       = $('.main-header');
            self.mainHeaderHeight = self.mainHeader.height();
            self.shopNav          = $('.shop-nav');
            self.shopNavHeight    = self.shopNav.height();
            self.mainFooter       = $('.main-footer');
            self.mainFooterHeight = self.mainFooter.height();
            self.shopLanding      = $('.shop-landing');
            self.landingMargin    = $(window).height() - self.mainHeaderHeight - self.shopNavHeight;

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
                console.log('you clicked me');
            });

        },

        setInitialMargin: function () {
            var self = this;
            self.shopLanding.css('margin-top', self.landingMargin);
        }


    };

    ChiefTrunk.init();
})(jQuery, window);
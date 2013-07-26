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

            self.setInitialMargin();
        },

        vents: function () {
        },

        setInitialMargin: function () {
            var self = this;
            self.shopLanding.css('margin-top', self.landingMargin);
        }


    };

    ChiefTrunk.init();
})(jQuery, window);
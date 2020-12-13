(function ($) {
    "use strict";

    $.fn.AlertMessage = function (option) {
        let alertMessageContainer = $(this);
        let alertMessageSelector = '.alert-message';
        let alertMessageOption = option;
        /*
            option: {
                'action'        : 'init' | 'show' | 'hideAll',
                'type'          : bootstrap alert classes,
                'content'   : {
                    'icon'  : 'icon class',
                    'title' : 'alert message title',
                    'text'  : 'alert message text'
                },
                'dismissible'   : true | false,
                'timeout'       : hide timeout(miliseconds)
            }
        */

        switch (alertMessageOption.action) {
            case 'init':
                init();
                break;
            case 'show':
                show();
                break;
            case 'hideAll':
                hideAll();
                break;
            default:
                console.log('AlertMessage: Unkown option > ' + alertMessageOption.action);
        }

        function init() {
            hideAll();
            alertMessageContainer.html('');
        }

        function show() {
            let alertOption = alertMessageOption;
            let elem = '';

            if (alertOption.dismissible) { // dismissible alert
                elem = `
                    <div class="alert alert-${alertOption.type} alert-dismissible alert-message fade show" role="alert">
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                        <strong>${alertOption.content.title}</strong> ${alertOption.content.text}
                    </div>
                `;
            } else {
                elem = `
                    <div class="alert alert-${alertOption.type} alert-message" role="alert">
                        <strong>${alertOption.content.title}</strong> ${alertOption.content.text}
                    </div>
                `;
            }

            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });

            const alertElem = $(elem);
            if (alertOption.timeout > 0) {
                $(alertElem).prependTo(alertMessageContainer).fadeIn('fast').delay(alertOption.timeout).fadeOut('fast');
            } else {
                $(alertElem).hide().prependTo(alertMessageContainer).fadeIn('fast');
            }
        }

        function hideAll() {
            $(alertMessageSelector).hide();
        }
    }

}(window.jQuery));
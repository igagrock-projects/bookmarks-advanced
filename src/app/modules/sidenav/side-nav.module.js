import bookmarkService from '../../services/bookmark.service';
import eventService from '../../services/event-name.service';
import sideNavComponent from './side-nav.component';


/*@ngInject */
export default
    angular.module('sideNavModule', [])
        .component("sideNav", sideNavComponent())
        .service('bookmarkService', bookmarkService)
        .service("events",eventService)
        .name;
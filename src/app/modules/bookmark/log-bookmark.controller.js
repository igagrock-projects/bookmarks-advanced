export default
    /*@ngInject */

    class LogBookmarkController {
    constructor($scope, bookmarkService) {
        var _this = this;
        _this.bookMarks = [];
        _this.parentBookMarks = [];
        _this.getFolderLength = function (obj) {
            return bookmarkService.getChildrenFolderLength(obj);
        }
        _this.openBookMark = function(ele){
            if(ele.type == 'bookmark'){
                window.open(ele.url, '_blank');
            }
        }

        var getBookMarks = function () {
            bookmarkService.getParentBookMarks().then(
                (arr) => { $scope.$apply(() => { _this.parentBookMarks = arr; }); });
            bookmarkService.getBookMarkFlatArray().then(
                (arr) => {$scope.$apply(() => { _this.bookMarks = arr; });});
        }

        getBookMarks();
    }
}
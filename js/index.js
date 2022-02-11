$(document).ready(function () {

    $('#btnExplorar__procesos').click(function () {
        $('#collapsePlantas').collapse('hide');
        $('#collapseProcesos').collapse('show');
    });

    $('#btnExplorar__plantas').click(function () {
        $('#collapseProcesos').collapse('hide');
        $('#collapsePlantas').collapse('show');
    });
});
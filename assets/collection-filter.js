

// $(document).ready(function () {

//     shopify.queryParams = {};
//     if (location.search.length) {
//         var params = location.search.substr(1).split('&');
//         $.each(params, function (index, param) {
//             var keyValue = param.split('=');
//             if (keyValue.length > 1) {
//                 shopify.queryParams[decodeURIComponent(keyValue[0])] = decodeURIComponent(keyValue[1]);
//             }
//         })
//     }

//     $('#sort_by').on('change', function () {
//         var selectedOption = $(this).val();
//         shopify.queryParams.sort_by = selectedOption;
//         var newQueryString = $.param(shopify.queryParams);
//         window.location.search = newQueryString;
//     });
// })

document.addEventListener("DOMContentLoaded", function () {

    const sortSelect = document.getElementById("sort_by");

    if (!sortSelect) return;

    sortSelect.addEventListener("change", function () {

        const url = new URL(window.location.href);
        url.searchParams.set("sort_by", this.value);

        window.location.href = url.toString();
    });

});
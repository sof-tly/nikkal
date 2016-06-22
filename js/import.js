/**
 * Import html into the page
 */

(function($) {
	// imports
	$(document).ready(function() {
		$('[type="import"]').each(function(i, el) {
			var href = $(el).attr('href')
			if (href) {
				$.ajax(href).done(function(html) {
					$(el).append(html)
				})
			}
		})
	})
	// menu
	$(document).ready(function() {
		setTimeout(function() {
			var matches = window.location.href.match(/[^\/]+\.html$/)
			var page = matches[0]
			$('#menu_main').find('[href="' + page + '"]').parent().addClass('current-menu-parent')
		}, 100)
	})
})(jQuery)


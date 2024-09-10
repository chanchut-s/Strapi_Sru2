module.exports = () => ({
    scheduler: {
		enabled: true,
		config: {
			contentTypes: {
				'api::blog-event.blog-event': {},
				'api::blog-publicity.blog-publicity': {}
			}
		}
	},
});

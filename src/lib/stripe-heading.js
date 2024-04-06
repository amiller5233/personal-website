
export function initStripeHeaders() {
	const containers = document.querySelectorAll('.stripe-heading');
	containers.forEach(container => {
		const options = { threshold: 0.2 };
		const observer = new IntersectionObserver((entries, observer) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add('show');
				}
			});
		}, options);
		observer.observe(container);
	});
}
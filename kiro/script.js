// Simple search functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search');
    const searchButton = document.querySelector('.search-box button');
    
    if (searchInput && searchButton) {
        // Handle search button click
        searchButton.addEventListener('click', function() {
            performSearch();
        });
        
        // Handle Enter key in search input
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
        
        // Simple search function (placeholder)
        function performSearch() {
            const query = searchInput.value.trim();
            if (query) {
                // In a real implementation, this would redirect to a search results page
                // or filter the current posts
                console.log('Searching for:', query);
                alert(`Search functionality would look for: "${query}"`);
            }
        }
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add loading states for external links
    document.querySelectorAll('a[href^="http"]').forEach(link => {
        link.addEventListener('click', function() {
            this.style.opacity = '0.7';
            setTimeout(() => {
                this.style.opacity = '1';
            }, 200);
        });
    });
});

// Simple analytics placeholder
function trackPageView() {
    // Placeholder for analytics tracking
    console.log('Page view tracked:', window.location.pathname);
}

// Track page view on load
document.addEventListener('DOMContentLoaded', trackPageView);
// Content data for each interactive object
const objectContent = {
    'banner-what': {
        image: 'assets/what-content.jpg'
    },
    'banner-who': {
        image: 'assets/who-content.jpg'
    },
    'student': {
        image: 'assets/student-content.jpg'
    },
    'schedule': {
        image: 'assets/schedule-content.jpg'
    },
    'yellow-book': {
        video: 'https://www.dropbox.com/scl/fi/h7umixce3k2y4e7qftwff/yellow-book-video-content.mov?rlkey=mcn87tyonggbi9c4gcj0iiyjr&st=v8qc00nj&raw=1'
    }
};

// Get modal elements
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const modalIcon = document.getElementById('modalIcon');
const modalImage = document.getElementById('modalImage');
const modalVideo = document.getElementById('modalVideo');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');

// Get background music element
const bgMusic = document.getElementById('bgMusic');
let isMusicPlaying = false;

// Function to toggle background music
function toggleMusic() {
    if (bgMusic) {
        if (isMusicPlaying) {
            bgMusic.pause();
            isMusicPlaying = false;
        } else {
            bgMusic.play().then(() => {
                isMusicPlaying = true;
            }).catch(error => {
                console.log('Music play prevented:', error);
            });
        }
    }
}

// Try to start background music on page load
window.addEventListener('load', function() {
    if (bgMusic) {
        bgMusic.volume = 0.5; // Set volume to 50%
        bgMusic.play().then(() => {
            isMusicPlaying = true;
        }).catch(error => {
            console.log('Autoplay prevented, user interaction required:', error);
            // Music will start when user clicks sound button
        });
    }
});

// Function to open modal with content
function openModal(objectId) {
    const content = objectContent[objectId];
    if (!content) return;
    
    const modalContent = document.querySelector('.modal-content');
    
    // Show/hide content based on type (video, image, or text)
    if (content.video) {
        // Show video only, hide icon, image, title, and body
        modalIcon.style.display = 'none';
        modalImage.style.display = 'none';
        modalTitle.style.display = 'none';
        modalBody.style.display = 'none';
        modalVideo.src = content.video;
        modalVideo.muted = false; // Ensure video is unmuted
        modalVideo.style.display = 'block';
        modalContent.classList.add('image-only'); // Reuse image-only class styling for video
        // Pause background music if playing
        if (bgMusic && !bgMusic.paused) {
            bgMusic.pause();
        }
        // Try to play video (some browsers require user interaction)
        modalVideo.play().catch(error => {
            console.log('Autoplay prevented:', error);
        });
    } else if (content.image) {
        // Show image only, hide icon, video, title, and body
        modalIcon.style.display = 'none';
        modalVideo.style.display = 'none';
        modalTitle.style.display = 'none';
        modalBody.style.display = 'none';
        modalImage.src = content.image;
        modalImage.style.display = 'block';
        modalContent.classList.add('image-only');
    } else {
        // Show icon, title, and body
        modalImage.style.display = 'none';
        modalVideo.style.display = 'none';
        modalContent.classList.remove('image-only');
        modalIcon.textContent = content.icon;
        modalIcon.style.display = 'block';
        modalTitle.textContent = content.title;
        modalTitle.style.display = 'block';
        
        // Show body text if it exists, otherwise hide it
        if (content.body) {
            modalBody.textContent = content.body;
            modalBody.style.display = 'block';
        } else {
            modalBody.style.display = 'none';
        }
    }
    
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Function to close modal
function closeModal() {
    // Pause video if playing
    if (modalVideo && !modalVideo.paused) {
        modalVideo.pause();
    }
    // Resume background music if it was paused by video
    if (bgMusic && bgMusic.paused && isMusicPlaying) {
        bgMusic.play().catch(() => {});
    }
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
// Pause background music when modal video starts playing, resume when video is paused or ended
if (modalVideo) {
    modalVideo.addEventListener('play', function() {
        if (bgMusic && !bgMusic.paused) {
            bgMusic.pause();
        }
    });
    modalVideo.addEventListener('pause', function() {
        if (bgMusic && isMusicPlaying && modalOverlay.classList.contains('active')) {
            bgMusic.play().catch(() => {});
        }
    });
    modalVideo.addEventListener('ended', function() {
        if (bgMusic && isMusicPlaying && modalOverlay.classList.contains('active')) {
            bgMusic.play().catch(() => {});
        }
    });
}
}

// Add click event listeners to all interactive elements
document.querySelectorAll('.clickable-area, .interactive-button, .control-btn').forEach(object => {
    object.addEventListener('click', function() {
        const objectId = this.dataset.id;
        if (objectId) {
            // Handle sound control separately
            if (objectId === 'control-sound') {
                toggleMusic();
                // Add click animation
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
                return;
            }
            // Handle help overlay toggle
            if (objectId === 'control-help') {
                const helpImg = document.getElementById('objectsLined');
                if (helpImg) {
                    helpImg.style.display = helpImg.style.display === 'none' ? 'block' : 'none';
                }
                // Add click animation
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
                return;
            }
            openModal(objectId);
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        }
    });
});

// Close modal when clicking the close button
modalClose.addEventListener('click', closeModal);

// Close modal when clicking outside the modal content
modalOverlay.addEventListener('click', function(e) {
    if (e.target === modalOverlay) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
        closeModal();
    }
});

// No entrance animation needed for invisible clickable areas
// Buttons will still have their hover effects

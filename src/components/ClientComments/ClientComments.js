import React from 'react';
import './ClientComments.css';

const ClientComments = () => {
    return (
        <section class="client-comments">
            <div class="comment comment-light">
                <h3 class="comment-title">Client 1</h3>
                <p class="comment-text">This is a fantastic service! I loved the experience.</p>
                <hr class="comment-divider" />
                <div class="comment-author">
                    <img src="path/to/photo1.jpg" alt="Author 1" class="author-photo" />
                    <span class="author-name">John Doe</span>
                </div>
            </div>

            <div class="comment comment-green">
                <h3 class="comment-title">Client 2</h3>
                <p class="comment-text">Excellent support and user-friendly interface!</p>
                <hr class="comment-divider" />
                <div class="comment-author">
                    <img src="path/to/photo2.jpg" alt="Author 2" class="author-photo" />
                    <span class="author-name">Jane Smith</span>
                </div>
            </div>

            <div class="comment comment-green">
                <h3 class="comment-title">Client 3</h3>
                <p class="comment-text">Highly recommend this to everyone!</p>
                <hr class="comment-divider" />
                <div class="comment-author">
                    <img src="path/to/photo3.jpg" alt="Author 3" class="author-photo" />
                    <span class="author-name">Emily Johnson</span>
                </div>
            </div>
        </section>

    );
}

export default ClientComments;
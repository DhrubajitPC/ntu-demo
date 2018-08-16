import Vue from 'vue';

export default Vue.component('like', {
    props: ['nbLikes'],
    data: function() {
        return {
            isLiked: true,
            likeButton: {
                'font-size': '14px',
                padding: '10px',
                'border-radius': '5px',
            },
            liked: {
                color: 'yellowgreen'
            }
        };
    },
    toggleLike: () => this.isLiked = !this.isLiked,
    template: `
        <button @click="toggleLike()" :style="{likeButton: true, liked: isLiked}">
        ❤ {{nbLikes}}
        </button>
    `,
});
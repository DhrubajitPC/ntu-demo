<template>
	<div>
		<button 
			@click="toggleLike()" 
			class="likeButton" 
			:class="{liked: isLiked}">
		  <i class="fas fa-heart"></i> {{nbLikes}}
		</button>
	</div>
</template>

<script>

export default {
	props: {
		nbLikes: {
			type: Number,
			default: 0,
		},
		id: {
			type: Number,
			default: 0,
		}
	},
	data: function() {
		return {
			isLiked: false,
		}
	},
	methods: {
		toggleLike() {
			if (!this.isLiked) {
				this.$emit('addLike')
			} else {
				this.$emit('removeLike', this.id)
			}
			this.isLiked = !this.isLiked;
		}
	}
}
</script>

<style scoped>
	.liked {
		color: yellowgreen;
	}
	.likeButton {
		font-size: 14px;
		padding: 10px;
		border-radius: 5px;
	}
</style>

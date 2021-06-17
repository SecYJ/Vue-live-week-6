<script>
import { token } from "@/views/backstage/token.js";

export default {
	mounted() {
		this.verifyUser();
	},
	methods: {
		async verifyUser() {
			if (!token) return this.$router.push("/login");
			const url = `${process.env.VUE_APP_APIURL}/api/user/check`;

			try {
				const res = await fetch(url, {
					method: "post",
					headers: { Authorization: token },
				});
				const data = await res.json();
				if (!data.success) throw new Error("你尚未登入");
			} catch (err) {
				alert(err.message);
				this.$router.push("/login");
			}
		},
		signOut() {
			document.cookie = `token=; expires=`;
			alert("Token已清除!");
			this.$router.push("/login");
		},
	},
};
</script>

<template>
	<div id="nav">
		<router-link to="/">回到前台</router-link> |
		<router-link to="/admin/products">後台產品列表</router-link> |
		<router-link to="/admin/order">後台訂單</router-link> |
		<a href="#" @click.prevent="signOut">登出</a>
	</div>
	<router-view></router-view>
</template>

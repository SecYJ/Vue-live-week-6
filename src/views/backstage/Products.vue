<script>
import { token } from "@/views/backstage/token.js";
import pagination from "@/components/Pagination.vue";

export default {
	components: { pagination },
	data() {
		return {
			products: [],
			pages: {},
		};
	},
	methods: {
		async getProducts(page = 1) {
			const url = `${process.env.VUE_APP_APIURL}/api/${process.env.VUE_APP_APIPATH}/admin/products?page=${page}`;
			try {
				const res = await fetch(url, {
					headers: { Authorization: token },
				});
				const data = await res.json();
				this.products = data.products;
				this.pages = data.pagination;
			} catch (err) {
				alert(err.message);
			}
		},
	},
	mounted() {
		this.getProducts();
	},
};
</script>

<template>
	<div>
		這裡是 後台 產品列表
		<table class="table mt-4">
			<thead>
				<tr>
					<th width="120">分類</th>
					<th>產品名稱</th>
					<th width="120">原價</th>
					<th width="120">售價</th>
					<th width="100">是否啟用</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="item in products" :key="item.id">
					<td>{{ item.unit }}</td>
					<td>{{ item.title }}</td>
					<td class="text-end">{{ item.origin_price }}</td>
					<td class="text-end">{{ item.price }}</td>
					<td>
						<span class="text-success" v-if="item.is_enabled"
							>啟用</span
						>
						<span v-else>未啟用</span>
					</td>
				</tr>
			</tbody>
		</table>
		<pagination :pages="pages" @switch-page="getProducts"></pagination>
	</div>
</template>

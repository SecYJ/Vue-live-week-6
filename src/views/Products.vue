<script>
import Modal from "@/components/Modal.vue";

export default {
	components: {
		Modal,
	},
	data() {
		return {
			products: [],
			tempProduct: {},
		};
	},
	methods: {
		async getProducts(page = 1) {
			let loader = this.$loading.show();
			const url = `${process.env.VUE_APP_APIURL}/api/${process.env.VUE_APP_APIPATH}/products?page=${page}`;
			try {
				const res = await fetch(url);
				const data = await res.json();
				loader.hide();
				if (!data.success) throw new Error(data.message);
				this.products = data.products;
			} catch (err) {
				alert(err.message);
			}
		},
		modalClose(boolean) {
			this.modalStatus = boolean;
		},
		async checkMoreDetails(product) {
			let loader = this.$loading.show();
			const url = `${process.env.VUE_APP_APIURL}/api/${process.env.VUE_APP_APIPATH}/product/${product.id}`;
			try {
				const res = await fetch(url);
				const data = await res.json();
				loader.hide();
				if (!data.success) throw new Error(data.message);
				this.tempProduct = data.product;
				this.$refs.modal.openModal();
			} catch (err) {
				alert(err.message);
			}
		},
		async addToCart(product) {
			let loader = this.$loading.show();
			const url = `${process.env.VUE_APP_APIURL}/api/${process.env.VUE_APP_APIPATH}/cart`;
			const obj = {
				data: {
					product_id: product.id,
					qty: product.qty,
				},
			};
			try {
				const res = await fetch(url, {
					method: "post",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(obj),
				});
				const data = await res.json();
				loader.hide();
				const { success, message } = data;
				if (!success) throw new Error(message);
				alert(message);
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
		<h1>This is 產品列表頁面</h1>
		<table class="table align-middle">
			<thead>
				<tr>
					<th>圖片</th>
					<th>商品名稱</th>
					<th>價格</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="product in products" :key="product.id">
					<td style="width: 200px">
						<div
							style="
								height: 100px;
								background-size: cover;
								background-position: center;
							"
							:style="{
								backgroundImage: product.imageUrl
									? `url(${product.imageUrl})`
									: '',
							}"
						></div>
					</td>

					<td>{{ product.title }}</td>
					<td>
						<div class="h6"></div>
						<del class="h5">
							原價 {{ product.origin_price }} 元
						</del>
						<div class="h5">現在只要 {{ product.price }} 元</div>
					</td>
					<td>
						<div class="btn-group btn-group-sm">
							<button
								type="button"
								class="btn btn-outline-secondary"
								@click.prevent="checkMoreDetails(product)"
							>
								<i class="fas fa-spinner fa-pulse"></i>
								查看更多
							</button>
							<button
								type="button"
								class="btn btn-outline-danger"
								@click.prevent="
									addToCart({ ...product, qty: 1 })
								"
							>
								<i class="fas fa-spinner fa-pulse"></i>
								加到購物車
							</button>
						</div>
					</td>
				</tr>
			</tbody>
		</table>

		<Modal
			ref="modal"
			:product="tempProduct"
			@modal-close="modalClose"
			@add-to-cart="addToCart"
		></Modal>
	</div>
</template>

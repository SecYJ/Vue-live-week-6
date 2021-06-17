<script>
export default {
	data() {
		return {
			cartList: [],
			totalPrice: 0,
			form: {
				user: {
					email: "",
					name: "",
					tel: "",
					address: "",
				},
				message: "",
			},
		};
	},
	methods: {
		async getCartList() {
			let loader = this.$loading.show();
			const url = `${process.env.VUE_APP_APIURL}/api/${process.env.VUE_APP_APIPATH}/cart`;
			try {
				const res = await fetch(url);
				const data = await res.json();
				const { total, carts } = data.data;
				this.totalPrice = total;
				loader.hide();
				if (!data.success) throw new Error(data.message);
				this.cartList = carts;
			} catch (err) {
				alert(err.message);
			}
		},
		async removeSelectedCartItem(item) {
			let loader = this.$loading.show();
			const url = `${process.env.VUE_APP_APIURL}/api/${process.env.VUE_APP_APIPATH}/cart/${item.id}`;
			try {
				const res = await fetch(url, { method: "delete" });
				const data = await res.json();
				const { success, message } = data;
				loader.hide();
				if (!success) throw new Error(message);
				this.getCartList();
			} catch (err) {
				alert(err.message);
			}
		},
		async submitForm() {
			let loader = this.$loading.show();
			const url = `${process.env.VUE_APP_APIURL}/api/${process.env.VUE_APP_APIPATH}/order`;
			const obj = { data: this.form };
			try {
				const res = await fetch(url, {
					method: "post",
					headers: { "content-type": "application/json" },
					body: JSON.stringify(obj),
				});
				const data = await res.json();
				loader.hide();
				const { success, message } = data;
				if (!success) throw new Error(message);
				this.getCartList();
				this.$refs.form.resetForm();
				this.form.message = "";
			} catch (err) {
				alert(err.message);
			}
		},
	},
	mounted() {
		this.getCartList();
	},
};
</script>

<template>
	<div class="about">
		<h1>This is 購物車頁面</h1>
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-6">
					<table class="table align-middle">
						<thead>
							<tr>
								<th></th>
								<th>品名</th>
								<th style="width: 110px">數量</th>
								<th>單價</th>
							</tr>
						</thead>
						<tbody>
							<!-- <template> -->
							<tr v-for="item in cartList" :key="item.product_id">
								<td>
									<button
										type="button"
										class="btn btn-outline-danger btn-sm"
										@click.prevent="
											removeSelectedCartItem(item)
										"
									>
										<i class="fas fa-spinner fa-pulse"></i>
										移除購物車
									</button>
								</td>
								<td>
									<!-- <div class="text-success">
										已套用優惠券
									</div> -->
									{{ item.product.title }}
								</td>
								<td>
									<div class="input-group input-group-sm">
										{{ item.qty }} / {{ item.product.unit }}
									</div>
								</td>
								<td class="text-end">
									<!-- <small class="text-success">折扣價：</small> -->
									{{ item.total }}
								</td>
							</tr>
							<!-- </template> -->
						</tbody>
						<tfoot>
							<tr>
								<td colspan="3" class="text-end">總計</td>
								<td class="text-end">{{ totalPrice }}</td>
							</tr>
							<tr>
								<td colspan="3" class="text-end text-success">
									折扣價
								</td>
								<td class="text-end text-success"></td>
							</tr>
						</tfoot>
					</table>
				</div>
			</div>
			<div class="my-5 row justify-content-center">
				<Form
					ref="form"
					v-slot="{ errors }"
					class="col-md-6"
					@submit="submitForm"
				>
					<div class="mb-3">
						<label for="email" class="form-label">Email</label>
						<Field
							id="email"
							name="email"
							type="email"
							class="form-control"
							:class="{ 'is-invalid': errors['email'] }"
							placeholder="請輸入 Email"
							rules="required|email"
							v-model.trim="form.user.email"
						></Field>
						<ErrorMessage
							name="email"
							class="invalid-feedback"
						></ErrorMessage>
					</div>

					<div class="mb-3">
						<label for="name" class="form-label">收件人姓名</label>
						<Field
							id="name"
							name="姓名"
							type="text"
							class="form-control"
							placeholder="請輸入姓名"
							rules="required"
							:class="{ 'is-invalid': errors['姓名'] }"
							v-model.trim="form.user.name"
						></Field>
						<ErrorMessage
							name="姓名"
							class="invalid-feedback"
						></ErrorMessage>
					</div>

					<div class="mb-3">
						<label for="tel" class="form-label">收件人電話</label>
						<Field
							id="tel"
							name="電話"
							type="text"
							class="form-control"
							placeholder="請輸入電話"
							rules="required|min:8|max:10"
							:class="{ 'is-invalid': errors['電話'] }"
							v-model.trim="form.user.tel"
						></Field>
						<ErrorMessage
							name="電話"
							class="invalid-feedback"
						></ErrorMessage>
					</div>

					<div class="mb-3">
						<label for="address" class="form-label"
							>收件人地址</label
						>
						<Field
							id="address"
							name="地址"
							type="text"
							class="form-control"
							placeholder="請輸入地址"
							rules="required"
							:class="{ 'is-invalid': errors['地址'] }"
							v-model.trim="form.user.address"
						></Field>
						<ErrorMessage
							name="地址"
							class="invalid-feedback"
						></ErrorMessage>
					</div>

					<div class="mb-3">
						<label for="message" class="form-label">留言</label>
						<textarea
							name=""
							id="message"
							class="form-control"
							cols="30"
							rows="10"
							v-model.trim="form.message"
						></textarea>
					</div>
					<div class="text-end">
						<button type="submit" class="btn btn-danger">
							送出訂單
						</button>
					</div>
				</Form>
			</div>
		</div>
	</div>
</template>

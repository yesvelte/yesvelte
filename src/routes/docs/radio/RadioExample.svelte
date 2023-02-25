<script lang="ts">
	import { Radio } from 'yesvelte'
</script>

<Radio name="payment" checked>
	<span class="payment payment-visa me-1 mb-1" />
	ending in <strong>7998</strong>
</Radio>

<Radio name="payment">
	<span class="payment payment-master me-1" />
	ending in <strong>7998</strong>
</Radio>

<Radio name="payment">
	<span class="payment payment-paypal me-1" />
	ending in <strong>7998</strong>
</Radio>

<style>
	.payment {
		width: 2.49999rem;
		height: 1.5rem;
		display: inline-block;
		background: no-repeat center/100% 100%;
		vertical-align: middle;
		font-style: normal;
		box-shadow: 0 0 1px 1px rgb(0 0 0 / 10%);
		border-radius: 2px;
	}
	.payment-visa {
		background-image: url('/images/visa.svg');
	}
	.payment-master {
		background-image: url('/images/mastercard.svg');
	}
	.payment-paypal {
		background-image: url('/images/paypal.svg');
	}
</style>

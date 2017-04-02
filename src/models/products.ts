// Products model based on the structure of github api at
// https://api.github.com/users/{username}
export interface Products {
	product_id: number;
	name: string;
	image: string;
	color: number;
	color_cd: number;
	size: number;
	size_cd: number;
	cost_price: number;
	price_per_unit: number;
	mrp_per_unit: number;
	mrp: number;
	type: number;
	type_cd: number;
	qty_purchased: number;
	serial_no: string;
	date: string;
	comments: string;
	party: string;
	created_at: string;
	updated_at: string;
}
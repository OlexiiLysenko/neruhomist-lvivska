export class Room {
	public name: string;
	public description: string;
	public imagePath: string;	
	public area: number;
	public price: number;
	public floor: number;

	constructor (name: string, desc: string, imagePath: string, area: number, price: number, floor: number) {
		this.name = name;
		this.description = desc;
		this.imagePath = imagePath;
		this.area = area;
		this.price = price;
		this.floor = floor;
	}
}
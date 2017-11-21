export class Building {
	public counter: number;
	public name: string;
	public description: string;
	public imagePath: string;	
	// public roomsList: any[];

	constructor (counter: number, name: string, desc: string, imagePath: string) {
		this.counter = counter;
		this.name = name;
		this.description = desc;
		this.imagePath = imagePath;
		// this.roomsList = roomsList;
	}
}
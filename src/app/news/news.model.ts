export class News {
	public name: string;
	public theme: string;
	public description: string;
	public imagePath: string;	
	

	constructor (name: string, theme: string, desc: string, imagePath: string) {
		this.name = name;
		this.theme = theme;
		this.description = desc;
		this.imagePath = imagePath;
	}
}
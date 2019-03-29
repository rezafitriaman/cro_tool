/*
==============================
CUSTOM CONSOLE.LOG
==============================
*/

export	class LogInput {
	developEnvi: boolean;
	
	constructor(developEnvi: boolean) {
		// code...
		this.developEnvi = developEnvi;
	}
	log(input: any) {
		if(this.developEnvi) {
  			console.log(`%ccustom-log = `, 'color: green', input);
		}else {
		 	return;
		}
	}
}
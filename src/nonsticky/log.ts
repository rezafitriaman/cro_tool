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
  			console.log(input);
		}else {
		 	return;
		}
	}
}